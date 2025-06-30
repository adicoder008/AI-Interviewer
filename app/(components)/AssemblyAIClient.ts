// assemblyAIClient.ts

let socket: WebSocket | null = null;
let mediaRecorder: MediaRecorder | null = null;

export function startAssemblyAIStream({ onTranscript }: { onTranscript: (text: string) => void }) {
  fetch("https://api.assemblyai.com/v2/realtime/token", {
    method: "POST",
    headers: {
      authorization: process.env.NEXT_PUBLIC_ASSEMBLYAI_API_KEY || "",
    },
  })
    .then(res => res.json())
    .then(({ token }) => {
      socket = new WebSocket(`wss://api.assemblyai.com/v2/realtime/ws?sample_rate=16000&token=${token}`);

      socket.onmessage = (message) => {
        const res = JSON.parse(message.data);
        if (res.text) onTranscript(res.text);
      };

      socket.onopen = () => {
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
          const audioCtx = new AudioContext();
          const source = audioCtx.createMediaStreamSource(stream);
          const processor = audioCtx.createScriptProcessor(4096, 1, 1);

          processor.onaudioprocess = (e) => {
            const input = e.inputBuffer.getChannelData(0);
            const int16Buffer = convertFloat32ToInt16(input);
            if (socket?.readyState === WebSocket.OPEN) {
              socket.send(int16Buffer);
            }
          };

          source.connect(processor);
          processor.connect(audioCtx.destination);
        });
      };
    });
}

export function stopAssemblyAIStream() {
  if (socket) socket.close();
  if (mediaRecorder && mediaRecorder.state !== "inactive") mediaRecorder.stop();
}

function convertFloat32ToInt16(buffer: Float32Array) {
  const l = buffer.length;
  const buf = new Int16Array(l);
  for (let i = 0; i < l; i++) {
    buf[i] = Math.min(1, buffer[i]) * 0x7fff;
  }
  return buf.buffer;
}

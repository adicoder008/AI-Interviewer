import { useEffect, useRef, useState } from "react";

export function useAssemblyStream(onTranscript: (text: string) => void) {
  const socketRef = useRef<WebSocket | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const startRecording = async () => {
    // Get microphone access
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream, {
      mimeType: "audio/webm",
    });
    mediaRecorderRef.current = mediaRecorder;

    // ✅ Fetch temporary token from your backend
    const res = await fetch("/api/get-assembly-token");
// const { token } = await res.json();

    const data = await res.json();
    const tempToken = data.token;

    if (!tempToken) {
      console.error("Failed to fetch AssemblyAI token.");
      return;
    }

    // ✅ Connect WebSocket with token in query
    socketRef.current = new WebSocket(
      `wss://api.assemblyai.com/v2/realtime/ws?sample_rate=16000&token=${tempToken}`
    );

    socketRef.current.onopen = () => {
      console.log("✅ WebSocket connection opened.");

      // Start sending audio chunks every 250ms
      mediaRecorder.ondataavailable = async (event) => {
        if (socketRef.current?.readyState === 1) {
          const audioData = await event.data.arrayBuffer();
          console.log("🎙️ Sending audio chunk:", audioData.byteLength);
          socketRef.current.send(audioData);
        } else {
          console.warn("⚠️ Socket not ready. Dropping audio chunk.");
        }
      };

      mediaRecorder.onstart = () => console.log("🎬 MediaRecorder started.");
      mediaRecorder.onstop = () => console.log("🛑 MediaRecorder stopped.");

      mediaRecorder.start(250);
      setIsRecording(true);
    };

    socketRef.current.onmessage = (msg) => {
      const res = JSON.parse(msg.data);
      if (res.text) {
        console.log("📝 Received transcript:", res.text);
        onTranscript(res.text);
      }
    };

    socketRef.current.onerror = (err) => {
      console.error("❌ WebSocket error:", err);
    };

    socketRef.current.onclose = () => {
      console.log("🔌 WebSocket connection closed.");
    };
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    socketRef.current?.close();
    setIsRecording(false);
  };

  return { startRecording, stopRecording, isRecording };
}

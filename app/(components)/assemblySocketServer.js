// Node server or API route
import { WebSocketServer } from 'ws';
import { AssemblyAI } from 'assemblyai';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', async (ws) => {
  const client = new AssemblyAI({ apiKey: process.env.ASSEMBLY_API_TOKEN });

  const transcriber = client.streaming.transcriber({
    sampleRate: 16000,
    formatText: true,
  });

  await transcriber.connect();

  transcriber.on('transcript', (msg) => {
    if (msg.text) {
      ws.send(msg.text); // send transcript to frontend
    }
  });

  ws.on('message', (data) => {
    transcriber.sendAudio(data);
  });

  ws.on('close', () => {
    transcriber.close();
  });
});

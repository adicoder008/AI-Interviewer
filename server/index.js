import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import { AssemblyAI } from 'assemblyai'
import recorder from 'node-record-lpcm16'
import { Readable } from 'stream'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: { origin: '*' }
})

io.on('connection', (socket) => {
  console.log('Client connected')

  let recording, transcriber

  socket.on('start-recording', async () => {
    const client = new AssemblyAI({ apiKey: process.env.ASSEMBLY_API_TOKEN })

    transcriber = client.streaming.transcriber({ sampleRate: 16000, formatTurns: true })

    transcriber.on('open', ({ id }) => console.log(`Session started: ${id}`))
    transcriber.on('error', (err) => console.error('Error:', err))
    transcriber.on('close', (code, reason) => console.log('Closed:', code, reason))
    transcriber.on('turn', (turn) => {
      const transcript = turn.transcript?.text
      if (transcript) {
        socket.emit('transcript', transcript)
      }
    })

    await transcriber.connect()

    recording = recorder.record({ sampleRate: 16000, channels: 1, audioType: 'wav' })
    Readable.toWeb(recording.stream()).pipeTo(transcriber.stream())
  })

  socket.on('stop-recording', async () => {
    if (recording) recording.stop()
    if (transcriber) await transcriber.close()
  })

  socket.on('disconnect', () => {
    if (recording) recording.stop()
    if (transcriber) transcriber.close()
    console.log('Client disconnected')
  })
})

server.listen(5000, () => {
  console.log('Server listening on http://localhost:5000')
})

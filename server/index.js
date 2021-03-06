import express from 'express'
import cors from 'cors'
import http from 'http'
import { webSocketsHandlers } from './socket/socketConnection'
import { onConnect } from './socket'
import { getAllSnakes } from './utils/snakes'
import { createApple } from './utils/apple'
import { SPEED } from './configGame'

const app = express()
app.use(cors())
const PORT = process.env.PORT || 8000
const server = http.Server(app)

export const ioConnection = webSocketsHandlers()(server)
ioConnection.on('connect', onConnect)
setInterval(() => {
  ioConnection.emit('snakes:get', { snakes: getAllSnakes(), apples: createApple() })
}, SPEED)

server.listen(PORT, () => {
  console.log(`Server started on host http://localhost:${PORT}`)
})
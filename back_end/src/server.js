const { WebSocketServer } = require('ws');

const dotenv = require('dotenv');

dotenv.config();

const wss = new WebSocketServer({ port: process.env.PORT || 3000 });

wss.on('connection', (ws) => {

  ws.on('error',(error) => {
    console.error('WebSocket error:', error);
  });

ws.on('message', (data) => {

  ws.clients.forEach((client) => (clients.send(data.toString())));

});

console.log("connected");
});
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');
const app = express();

let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//enviando configuracion
module.exports.io = socketIO(server);

//implementando los sockets
require('./sockets/socket');


// esta es la comunicacion del backend
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor ejecutando en puerto ${ port }`);

});
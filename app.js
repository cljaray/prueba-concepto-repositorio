require('dotenv').config({path: './config.env'})
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {cors: { origin: '*'}});
const valor = require('./routes/valor');
const connectDB = require('./config/database');

//CONEXION CON MONGO

/* connectDB(); */


global.io = io;

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

app.use(valor)


const PORT = process.env.PORT || 3001;

server.listen( PORT , () => {
    console.log('servidor corriendo');
})
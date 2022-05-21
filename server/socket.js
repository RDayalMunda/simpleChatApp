const app = require('express')();
const PORT = 3090;
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, { cors: { origin:"*" } })
// const io = require('socket.io')(httpServer)

httpServer.listen( PORT, async ()=>{
    console.log('SOCKET listening on port :', PORT)
} )

io.on('connection', (socket)=>{
    // query object is stored in socket.handshake.query
    console.log(socket.id, "Connected")

    socket.on('disconnect', async ()=>{
        console.log(socket.id, "Disconnected")
    });
})
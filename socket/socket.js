const app = require('express')();
const PORT = 3090;
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, { cors: { origin:"*" } })
// const io = require('socket.io')(httpServer)

httpServer.listen( PORT, async ()=>{
    console.log('SOCKET listening on port :', PORT)
} )

io.on('connection', (socketObj)=>{
    // query object is stored in socketObj.handshake.query
    console.log('socketObj : ', socketObj.id)
})
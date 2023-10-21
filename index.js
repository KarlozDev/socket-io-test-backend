const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer();

const io = require("socket.io")(server, { cors: { origin: "*" } });

let textUpd = "";

io.on("connection", (socket) => {
    socket.on("sendText", (text) => {
        io.emit("sendText", text);
        textUpd = text;
    })

    socket.emit("updateText", textUpd === "" ? "Mongola" : textUpd)
})

server.listen(port, () => {
    console.log(`Puerto establecido en: ${port}`)
});

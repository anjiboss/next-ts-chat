const app = require("express")();
const server = require("http").createServer(app);
const socketIo = require("socket.io");
const PORT = process.env.PORT || 5000;
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});
io.on("connection", (socket) => {
  console.log("con");
  socket.on("joinRoom", ({ username, roomID }) => {
    console.log(roomID);
    socket.join(roomID);
    io.to(roomID).emit("joinedRoom", username + " Have Joined Room " + roomID);
    socket.on("send-msg", (chatInfo) => {
      io.to(roomID).emit("recieved-msg", chatInfo);
    });
  });
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`));

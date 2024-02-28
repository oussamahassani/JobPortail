const express = require("express");
const cors = require("cors");
const app = express();
const { Server } = require("socket.io");
const http = require("http");
const path = require('path');

app.use(cors());
app.use(express.json());
require('dotenv').config()
app.use(express.urlencoded({ extended: true }));
const db = require("./config/database");

const userrouter = require('./routes/users.routes');






app.use('/users', userrouter)



app.get("/user/:user", (req, res) => {
  let user = req.params.user
  res.json({ message: "Hii " + user });
});

app.use('/file', express.static(path.join(__dirname, 'public')));




const PORT = process.env.PORT || 3333;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}. `);
});

//Socket IO logic

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("join_room", (room_id) => {
    socket.join(room_id);
  });

  socket.on("send_message", async (data) => {
    //const postRes = await postMessage(data);
 
    socket.to(data.chatId).emit("receive_message", "hello");
  });
});

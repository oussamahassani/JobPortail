const express = require("express");
const cors = require("cors");
const app = express();
const { Server } = require("socket.io");
const http = require("http");
const path = require('path');
const fileUploadMiddleware = require('./middlewares/upload');

app.use(cors());
app.use(express.json());
require('dotenv').config()
app.use(express.urlencoded({ extended: true }));
const db = require("./config/database");

const userRouter = require('./routes/users.routes');
const blogRouter = require('./routes/Blog.routes');
const jobRouter = require('./routes/Job.routes.')




app.use('/users', userRouter)
app.use('/blog', blogRouter)
app.use('/jobs',jobRouter)


// Define the upload route
app.post('/api/affinda/resume/upload', fileUploadMiddleware.handleFileUpload, (req, res) => {
  // Read the file from the uploads folder
  const filePath = req.file.path;

  // Set up the options for the Affinda API request
  const options = {
    method: 'POST',
    url: 'https://api.affinda.com/v3/documents',
    headers: {
      accept: 'application/json',
      'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
      authorization: `Bearer ${process.env.KEY}`
    },
    formData: {
      wait: 'true',
      file: {
        value: fs.createReadStream(filePath),
        options: { filename: req.file.originalname, contentType: req.file.mimetype }
      },
      collection: 'vocqDuAi',
      workspace: 'yqeFohQi'
    }
  };

  // Make the request to the Affinda API
  request(options, (error, response, body) => {
    if (error) {
      console.error(error);
      res.status(500).send({ error: 'An error occurred while processing the file.' });
    } else {
      // Parse the response body as JSON
      const data = JSON.parse(body);

      // Send the parsed data back to the client
      res.send(data);
    }
  });
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

const app = require("express")();
const http = require("http");
const server = http.createServer(app);
require("dotenv").config();

// Socket.io configuration
const io = require("socket.io")(server, {
    cors: {
        origin: process.env.CLIENT_URL,
        method: ["GET", "POST"],
    },
});

// Socket.io events
io.on("connection", (socket) => {
    // Join a video call room
    socket.emit("me", socket.id);

    socket.on("disconnect", () => {
        socket.broadcast.emit("callEnded");
    });

    socket.on("callUser", ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit("callUser", { signal: signalData, from, name });
    });

    socket.on("answerCall", (data) => {
        io.to(data.to).emit("callAccepted", data.signal);
    });

    // Chatroom configuration
    socket.on("joinRoom", ({ username, room }) => {
        const user = userJoin(socket.id, username, room);

        socket.join(user.room);

        // Welcome current user
        socket.emit("message", formatMessage(botName, "Welcome to ChatCord!"));

        // Broadcast when a user connects
        socket.broadcast
            .to(user.room)
            .emit(
                "message",
                formatMessage(botName, `${user.username} has joined the chat`)
            );

        // Send users and room info
        io.to(user.room).emit("roomUsers", {
            room: user.room,
            users: getRoomUsers(user.room),
        });
    });
});

server.listen(process.env.PORT || 5000, () =>
    console.log("server is running on port 5000")
);

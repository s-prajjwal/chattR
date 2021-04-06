const express = require("express");
const { type } = require("os");
const socket = require("socket.io");

// App setup
const app = express();
const server = app.listen(5000, function () {
    console.log("Server is running!");
});

// Static files
app.use(express.static('public'));

// Socket setup
const io = socket(server);

io.on("connection", function (socket) {
    console.log("Made socket connection!", socket.id);
    socket.on("query", function (data) {
        console.log("Data incoming is", data);
        apiCall();
    });
});



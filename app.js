const express = require('express');
const http = require('http');
const {Chess} = require('chess.js');
const socket = require('socket.io');
const path = require('path');
const app = express();

const server = http.createServer(app);
const io = socket(server);

const chess = new Chess();


let player = {

}

let currPlayer = "W";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


app.get('/' , (req, res)=>{
   res.render("index", {title : "Chess game"});
})

server.listen(3000, ()=>{
    console.log("server started on port 3000" );
})



const https = require("https"); 

const express = require("express"); 
const app = express(); 

const fs = require("fs"); 
const bodyParser = require("body-parser"); 


app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 

app.get("/", function (req, res) { 
  res.send("Hello from app server."); 
}); 

app.post("/cloudTrail", function (req, res) { 
  console.log(req.body); 
}); 

const options = { 
key: fs.readFileSync("server.key"), 
cert: fs.readFileSync("server.cert"), 
}; 


https.createServer(options, app) 
.listen(3000, function (req, res) { 
console.log("Server started at port 3000"); 
});

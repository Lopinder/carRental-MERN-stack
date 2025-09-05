const http = require('http');
const app = require('./app');
const pool = require('./db');
const port = process.env.PORT || 4000;
const server = http.createServer(app);


server.listen(port, ()=>{
    console.log("app is running on port " + port);
});
import http from "http";
import dotenv from "dotenv"
import app from "./src/config/express.config.js";
dotenv.config()


const port = process.env.PORT;

const server = http.createServer(app);

server.listen(port,(error)=> {
    if(!error){
        console.log(`server is listning on port ${port}`)
    }
})
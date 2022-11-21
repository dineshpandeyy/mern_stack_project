require("dotenv").config();
const express = require("express")
const app = express();
require("./db/connection");
const router = require("./routes/router");
const cors = require("cors")
const bodyparser = require('body-parser');


const port = 8000;
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false })) 
app.use(bodyparser.json()) 


// app.get("/", (req,res)=>{
//     res.send("server is started!!!")
// })
app.use(router);

app.use("/uploads", express.static("./uploads"))

app.listen(port, () => {
    console.log(`server start at port number ${port}`)
})
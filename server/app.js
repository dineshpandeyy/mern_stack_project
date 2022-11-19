const express = require("express")
const app = express();
require("./db/connection");
const router = require("./routes/router");

const port = 8000;


// app.get("/", (req,res)=>{
//     res.send("server is started!!!")
// })
app.use(router);

app.listen(port, () => {
    console.log(`server start at port number ${port}`)
})
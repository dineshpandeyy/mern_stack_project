const express = require("express")
const app = express();
const port = 8000;

app.get("/", (req,res)=>{
    res.send("server is started!!!")
})

app.listen(port, () => {
    console.log(`server start at port number ${port}`)
})
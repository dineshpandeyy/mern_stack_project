const mongoose = require('mongoose');

const DB = "mongodb+srv://blogpost:kathmandu8848@cluster0.vn1qqx3.mongodb.net/BlogPost?retryWrites=true&w=majority";

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("DATABASE is connected")).catch((err)=> console.log("error" + err.message))
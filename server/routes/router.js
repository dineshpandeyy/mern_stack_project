const express = require("express");
const router = new express.Router();
const multer  = require('multer');
const users = require("../model/usersSchema"); 
const moment = require("moment");

// img storage path
const imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        callback(null,`imgae-${Date.now()}. ${file.originalname}`)
    }
})

// img filter
const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(new Error("only images is allowed"))
    }
}

const upload = multer({ 
    storage:imgconfig,
    fileFilter:isImage
})

// user register
router.post("/register",upload.single("photo"),async(req,res)=>{

    const {filename} = req.file;

    const fname = req.body.fname;
    console.log(req.body)
    

    const view = req.body.pundit;
    console.log(view);

    if(!fname || !filename){
        res.status(401).json({status:401,message:"fill all the data"})
    }

    try {
        const date = moment(new Date()).format("YYYY-MM-DD");
        const userdata = new users({
            fname:fname,
            imgpath:filename,
            date:date,
            view: view
        });

        const finaldata = await userdata.save();
        res.status(201).json({status:201,finaldata});

    } catch (error) {
        res.status(401).json({status:401,error})
    }
});

// user data get
router.get("/getdata",async(req,res)=>{
    try {
        const getUser = await users.find();

        res.status(201).json({status:201,getUser})
    } catch (error) {
        res.status(401).json({status:401,error})
    }
});


module.exports = router;

// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config()
//   }
require("dotenv").config();
const express = require("express")
const app = express();
require("./db/connection");
const router = require("./routes/router");
const cors = require("cors")
const bodyparser = require('body-parser');

// const bcrypt = require("bcrypt");
// const passport = require('passport')
// const flash = require('express-flash')
// const session = require('express-session')


// const initializePassport = require('./passport-config')
// initializePassport(
//     passport,
//     email => users.find(user => user.email === email),
//     id => users.find(user => user.id === id)
// )


// const users = []


const port = 8000;
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false })) 
app.use(bodyparser.json()) 

// app.use(express.urlencoded({ extended: false }))
// app.use(flash())
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
//   }))
// app.use(passport.initialize())
// app.use(passport.session())

// app.use(methodOverride('_method'))



app.get("/", (req,res)=>{
    res.send("server is started!!!")
})

// app.post('/login', passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true
//   }))

// app.post('/newuser', async (req, res) => {
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10)
//         users.push({
//           id: Date.now().toString(),
//           name: req.body.name,
//           email: req.body.email,
//           password: hashedPassword
//         })
//         res.redirect('/login')
//       } catch {
//         res.redirect('/newuser')
//       }
//       console.log(users)
//     })

// app.get('/newuser',(req, res) => {
//     res.render("newuser.js")
// })

// app.get('/newuser', async (req, res) => {
// })

app.use(router);



app.use("/uploads", express.static("./uploads"))

app.listen(port, () => {
    console.log(`server start at port number ${port}`)
})
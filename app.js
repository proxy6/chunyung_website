require("dotenv").config();
const express = require("express");
const ejs = require("ejs")
const path = require('path')
const app = express();
const {sendMessage}  = require("./sendMessage");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

//get index page
app.get('/', (req, res)=> {
    res.render('index')
})



app.post('/contact-us', async (req, res) => {
    let resp =  await sendMessage(req.body);
    res.send(resp);
})

// app.get('*', (req, res)=>{
//     res.render("not-found")
// })

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("server listening on port" + port)
})
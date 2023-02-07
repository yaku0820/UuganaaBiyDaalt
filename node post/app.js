const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose')
const indexRouter = require("./routers")
const postRouter = require('./routers/post');
const adminRouter = require('./routers/admin');
const editRouter = require('./routers/edit');



app.use(express.static(path.join(__dirname,"public")))

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.set('view engine',"ejs");
app.set('views',"views");

app.all(["/",'index'],indexRouter);

app.use('/post', postRouter);
app.use('/admin',adminRouter);
app.use('/edit',editRouter);

mongoose.connect('mongodb+srv://uuganaa:uuganaa0820@cluster0.i5sbxg1.mongodb.net/lesson')
.then((result)=>{
    app.listen(3000)
})
.catch(err=>{
    console.log(err)
})



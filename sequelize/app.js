const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require("./routers")
const postRouter = require('./routers/post');
const editRouter = require('./routers/edit')
const sequelize = require('./db_utils/connection');


app.use(express.static(path.join(__dirname,"public")))

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.set('view engine',"ejs");
app.set('views',"views");

app.all(["/",'index'],indexRouter);
app.use('/post', postRouter);
app.use('/edit',editRouter)

sequelize.sync()
.then((result)=>{
    console.log(sequelize.models);
    app.listen(3000)
})
.catch((err)=>{
    throw err
})
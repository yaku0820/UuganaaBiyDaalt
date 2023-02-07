const express = require('express');
const router = express.Router();
const path = require('path');
const productModel = require('../model/product');
router.get('/',(req,res)=>{
    res.render(path.join(__dirname,'../views/post.ejs'));
});
router.post('/', (req,res)=>{
    
    let avatar = req.body.avatar
    let title = req.body.title
    let description = req.body.description
    let price = req.body.price
    productModel.create({
        avatar:avatar,
        title:title,
        description:description,
        price:price
    })
    res.redirect('/')
}

);


module.exports=router
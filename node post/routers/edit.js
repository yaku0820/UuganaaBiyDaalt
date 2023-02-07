const express = require('express');
const router = express.Router();
const path = require('path');
const productModel = require("../model/product")


router.get('/:id',(req,res)=>{
let productId = req.params.id
    productModel.findById(productId)
    .then((product)=>{
      res.render(path.join(__dirname,'../views/edit'),{product:product})    
    }).catch((err)=>{
        console.log(err)
    })
})
router.post('/',(req,res)=>{
    let productId = req.body.id;
    let updateavatar = req.body.avatar;
    let updatetitle = req.body.title;
    let updatedescription = req.body.description;
    let updateprice = req.body.price;
    console.log(productId)
    productModel.findById(productId)
    .then((product)=>{
        console.log(product)
        product.avatar = updateavatar,
        product.title =updatetitle,
        product.description = updatedescription,
        product.price = updateprice
        return product.save()
    })
    .then(()=>{
        res.redirect('/admin')
    }).catch(err=>{
        console.log(err)
    })


})
module.exports = router
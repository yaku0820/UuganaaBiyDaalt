const { Sequelize } = require("sequelize")
const sequelize = new Sequelize("mgl-site",'root','88560820',{
    dialect:"mysql",
    host:"localhost"
})

module.exports=sequelize

const Sequelize = require('sequelize');
const sequelize = require('../db_utils/connection');
const Product =sequelize.define( 'product',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    avatar:{
        type:Sequelize.STRING,
        allowNull:false
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.DOUBLE,
        allowNull:false
    }
});
module.exports = Product
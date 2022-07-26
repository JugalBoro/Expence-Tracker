const Sequelize=require('sequelize')

const sequelize= new Sequelize('expense-tracker','root','12ka442ka1',{
    dialect:'mysql',
    host:'localhost'
})



module.exports=sequelize;
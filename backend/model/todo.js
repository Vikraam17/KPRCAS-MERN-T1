const mongoose = require('mongoose')

const todoScheme = mongoose.Schema({
    task:String,
    completed:{type:Boolean,default:false}
})

module.exports = mongoose.model('todo',todoScheme);
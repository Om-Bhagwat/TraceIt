const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



const dataSchema = new mongoose.Schema({
    
    id: {
        type: String,
        
    },
    type: {
        type: String,
        
    },
    count:{
        type: Number,
        
    },
    productdesc:{
        type:String,
        
    }
})


const data = mongoose.model('data',dataSchema)

module.exports = data
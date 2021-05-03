const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



const commentSchema = new mongoose.Schema({
    
    name: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    comment:{
        type: String,
        required: true
    },
    companyid:{
        type:String,
        required:true
    }
})


const comment = mongoose.model('comment',commentSchema)

module.exports = comment
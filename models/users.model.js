const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    rol:{
        type:["user","admin","developer","company"],
        default:"user"
    },
    company:{
        type:String
    },
    active:{
        type:Boolean, 
        default:true
    },
    updatedBy:{
        type:String, 
        default:null
    }
},
{
    timestamps:true,
    versionKey:false
})

module.exports =  mongoose.model('users',usersSchema)
const mongoose = require('mongoose');

const daySchema = mongoose.Schema({
   week:{
    type:String
   },
    day:{
        type:String
      
    },
    hours:{
        type:String,
        default:[
            '9AM',
            '10AM',
            '11AM',
            '12PM'

        ]
    },
    hoursAvailable:{
        type:String
    },
    name:{
        type:String
    }
      
})
module.exports = new mongoose.model('days',daySchema)
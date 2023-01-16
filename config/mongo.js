const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

module.exports = async()=>{
    try {
        const DB_URI = process.env.DB_URI
       await mongoose.connect(DB_URI)
        console.log('**DATABASE CONNECTED**');
    } catch (error) {
        console.log(error);
    }
}
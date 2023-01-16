const express = require('express');
const {createCompany} = require('../controllers/company.controller')
// const sid = "AC665aea0edb7357612b18744981e20288"
// const auth_token = "e07f08c172b5c03549e567a5e8e3879e"

// const twilio = require('twilio')(sid,auth_token);

const router = express.Router()
router.get('/company',(req,res)=>{
    // console.log(req.headers.host);
    res.render('company')
})
router.post('/company',createCompany)

// router.post('/sms',(req,res)=>{

// twilio.messages.create({
//     from:"+19893822489",
//     to:"+18292753367",
//     body:"test message from anderson"
// }).then((res)=>console.log("message sent")).catch((err)=>console.log(err))
// twilio.messages 
//       .create({ 
//          body: 'test mssg Anderson',  
//          messagingServiceSid: 'MG8c682fb3cec613f1f927741ab1a00ea9',      
//          to: '+18292753367' 
//        }) 
//       .then(message => console.log(message.sid)) 
//       .done();


// })

module.exports = router
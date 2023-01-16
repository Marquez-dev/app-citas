const nodemailer = require('nodemailer');
const mailgen = require('mailgen');

let config = {
  service:'gmail',
  auth:{
    user:process.env.GMAIL,
    pass:process.env.GMAIL_PASS
  }
}

const getBill = (req,res,datos)=>{
   
    let transporter = nodemailer.createTransport(config)
    let mailgenGenerator = new mailgen({
      theme:"default",
      product:{
        name:"Anderson Beauty",
        link:"https://mailgen.js"
      }
    })
    const {email,client,...datos2} = datos
    // console.log(email,client,datos2);
    // const {client,} = data
    let response = {
      body:{
        name:client,
        intro:"Confirmacion de Cita",
        table:{
          data:[
            datos2
          ]
        },
        outro:"Nos vemos pronto",
        signature: 'Gracias por preferirnos'
      }
    }

   
  
    let mail = mailgenGenerator.generate(response)
    let message = {
      from:process.env.GMAIL,
      to:email,
      subject:"Cita",
      html:mail
    }
  
  transporter.sendMail(message).then(()=>{
    // return res.status(201).json({msg:"email sent"})
    console.log('email sent');
  }).catch(error =>{
    // return res.status(500).json({error})
    console.log(error);
  })
  
  }

  const sendCompanyEmail = (req,res,dataEmail)=>{
   
    let transporter = nodemailer.createTransport(config)
    let mailgenGenerator = new mailgen({
      theme:"default",
      product:{
        name:"Anderson-Software",
        link:"https://mailgen.js"
      }
    })
    // const {email,...datos2} = datos
    // console.log(email,client,datos2);
    // const {client,} = data
    let response = {
      body: {
        name: dataEmail.name,
        intro: 'Welcome to Mailgen! We\'re very excited to have you on board.',
        table:{data:[
{usuario:dataEmail.email,
password:dataEmail.password}
        ]},
        action: {
            instructions: 'To get started with Mailgen, please click here:',
            button: {
                color: '#22BC66', // Optional action button color
                text: 'Confirm your account',
                link:`${dataEmail.link}`
            }
        },
        outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
    }
    }

   
  
    let mail = mailgenGenerator.generate(response)
    let message = {
      from:process.env.GMAIL,
      to:dataEmail.email,
      subject:"Software",
      html:mail
    }
  
  transporter.sendMail(message).then(()=>{
    // return res.status(201).json({msg:"email sent"})
    console.log('email sent');
  }).catch(error =>{
    // return res.status(500).json({error})
    console.log(error);
  })
  
  }

  module.exports = {getBill,sendCompanyEmail}
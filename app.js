require('dotenv').config()
const express = require('express');
const cors = require('cors');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const database = require('./config/mongo');
const checkUrl = require('./helpers/checkUrl')
const companyModel = require("./models/company.model");

const app = express()
app.use(cors())
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.use(express.static('public'))

var ruta = ''

//routes
app.use('*',async(req,res,next)=>{
    var url = req.baseUrl
    var lastPart = url.split('/')[1];
    var ruta = ''
    if(lastPart != 'developer'){
        const query = await companyModel.findOne({name:lastPart})
        if(!query)return res.send('NO ruta')
        ruta = '/' + lastPart
    }else{
        ruta = '/' + lastPart
    }

   
// console.log(query);
  

// console.log(ruta);
app.use(ruta,require('./routes/users.route'))
app.use(ruta,require('./routes/company.route'))

app.use(ruta,require('./routes/schedule.route'))
    next()

})


const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log('Server up on port ' + PORT);
})

database()
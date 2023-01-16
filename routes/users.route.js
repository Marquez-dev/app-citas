const express = require('express');
const {createUser,loginUser} = require('../controllers/user.controller')
const verifyToken = require('../helpers/verifyToken')
const verifyRol = require('../helpers/verifyRol')

const router = express.Router()
// router.get('*',(req,res,next)=>{
//     console.log('users routes');
//     next()
// })

router.get('/login',(req,res)=>{
    res.render('login',{data:'',mensaje:''})
})
router.get('/register',(req,res)=>{
    res.render('register')
})
router.get('/main',(req,res)=>{
    var url = req.baseUrl
lastPart = url.split('/')[1];
    res.render('main',{url:lastPart})
})
router.post('/users',createUser)
router.post('/register',createUser)
router.post('/login',loginUser)
// router.get('/ok',verifyToken,verifyRol(['admin','user']),(req,res)=>{
//     res.send('OK')
// })

module.exports = router
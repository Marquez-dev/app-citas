const {saveSchedule,getDays,gethours,makeAppoiment,test} = require('../controllers/schedule.controller')

const express = require('express');

const verifyToken = require('../helpers/verifyToken')
const verifyRol = require('../helpers/verifyRol')

const router = express.Router()

router.post('/schedule',saveSchedule)
router.post('/schedule2',test)
router.get('/schedule',(req,res)=>{
    res.render('horario')
})
router.get('/hacer-cita',(req,res)=>{
    res.render('hacer-cita')
})
router.get('/schedule/:week',getDays)
router.get('/schedule/:week/:day',gethours)

router.post('/create-appoiment',makeAppoiment)

module.exports = router
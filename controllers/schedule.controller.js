const weekModel = require("../models/weeks.model");
const dayModel = require("../models/days.model");
const appoimentModel = require("../models/appoiments.model")

const {getBill} = require('../helpers/sendEmail')

const saveSchedule = async (req, res) => {
  const days = req.body;

  try {
    const query = await weekModel.create(days);
    res.status(200).json({query,mensaje:'Horario guardado con exito'});
  } catch (e) {
    console.log(e);
  }
};

const getDays = async (req, res) => {
  const week = req.params.week;
console.log(week);
  try {
    const query = await weekModel.findOne({ week: week });
    //   res.json(query[0].day.monday.hours);
   
    // const xx = query[0].day;
    if(!query)return res.json(['NO HAY DIAS DISPONIBLES']); 
    res.json(query.days);
    
   
  } catch (e) {
    console.log(e);
  }
};
const gethours = async (req, res) => {
  const week = req.params.week;
  const dayFind = req.params.day;

  try {
    //   const query = await weekModel.find({week:week},{[dayFind2]:1,_id:0  });
    const query = await weekModel.find({week:week});

    //update hours
    // const q = "day." + [dayFind] + ".hours";
    // const query2 = await weekModel.updateOne(
    //   { week: week },
    //   { $pull: { [q]: "10AM" } }
    // );
    
    res.json(query[0].day[dayFind].hours);
    // res.json(query2);
  } catch (e) {
    console.log(e);
  }
};

const makeAppoiment = async(req,res)=>{
  try {
    const body = req.body

  const query = await appoimentModel.create(body)
  //update hours
    const q = "day." + [body.day] + ".hours";
    // console.log(q);
    // console.log(body.time);
const week = body.week
var time = body.time

    const query2 = await weekModel.updateOne(
      { week: week },
      { $pull: { [q]: time} }
    );

  res.status(200).json({query,query2})

  const datos = {
    proveedor:body.provider,
    proceso:body.process,
    dia:body.day,
    hora:body.time,
    email:body.email,
    client:body.client
  }

  const email = await getBill(req,res,datos)
  } catch (e) {
    console.log(e);
  }
  
}

const test = (req,res)=>{
  console.log(req.body);
  res.json('OK recibido')
}

module.exports = { saveSchedule, getDays, gethours,makeAppoiment,test };

const companyModel = require("../models/company.model");
const usersModel = require("../models/users.model");
const {sendCompanyEmail} = require('../helpers/sendEmail')
const bcryptjs = require("bcryptjs");

const createCompany = async (req, res) => {
  // const body = req.body;
  // console.log(body);
  // return 
  try {
    const body = req.body;

    const hashPassword = await bcryptjs.hash(body.ownerPassword, 10);

    const userBody = {
      name: body.owner,
      email: body.ownerEmail,
      password: hashPassword,
      rol: ["company", "admin"],
      company: body.name
    };
    const companyBody = {
      name: body.name,
      code: body.code,
      description: body.description,
      createdBy: "developer",
      owner: body.owner,
      ownerEmail: body.ownerEmail,
    };

    const datosEmail = {
      link:'http://'+req.headers.host + `/${body.name}/login`,
      usuario: body.ownerEmail,
      password:body.ownerPassword,
      email: body.ownerEmail,
      name: body.owner

    }


   
    // console.log(companyBody2);
    const saveCompany = await companyModel.create(companyBody);

    const saveUser = await usersModel.create(userBody);

    res.status(200).json({ saveCompany,saveUser });
    // res.send({mensaje:'ok'})
    await sendCompanyEmail(req,res,datosEmail)
  } catch (e) {
    console.log(e);
    if (e.code == 11000 && e.keyValue.code)
      res.status(400).json({mensaje:"YA EXISTE UNA EMPRESA CON ESTE CODIGO"});
      if (e.code == 11000 && e.keyValue.name)
      res.status(400).json({mensaje:"YA EXISTE UNA EMPRESA CON ESTE nombre"});

    if (e.code == 11000 && e.keyValue.ownerEmail)
      res.status(400).json({mensaje:"ESTE EMAIL YA ESTA EN USO"});
  }
};



module.exports = { createCompany };

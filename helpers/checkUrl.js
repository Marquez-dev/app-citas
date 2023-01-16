const companyModel = require("../models/company.model");

module.exports = (req,res,next)=>{
    var url = req.baseUrl
lastPart = url.split('/')[1];
console.log(lastPart);
next()
}
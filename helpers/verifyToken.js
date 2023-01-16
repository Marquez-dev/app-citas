const jwt = require('jsonwebtoken');

module.exports = async(req,res,next)=>{
    try {
        const token = req.headers.authorization

        if(!token)return res.status(401).json('NO SESSION')

        const cleanToken = token.split(' ').pop()

        const verify = await jwt.verify(cleanToken,process.env.JWT_KEY,(err,user)=>{
            if(err)return res.status(401).json('TOKEN NOT VALID')
            req.user = user
            next()
        })

    } catch (e) {
        console.log(e);
    }
}
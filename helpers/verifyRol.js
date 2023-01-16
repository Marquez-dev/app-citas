module.exports = (roles)=>(req,res,next)=>{
    try {
        const userRol = req.user.rol

        const checkValue = roles.some((rol)=>userRol.includes(rol))

        if(!checkValue)return res.status(401).json('NOT AUTHORIZED')
        next()
    } catch (e) {
        console.log(e);
    }
}
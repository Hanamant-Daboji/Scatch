const jwt =require("jsonwebtoken");
const userModel=require("../models/user-model");
module.export= async function(res,req,next){
    if(!req.cookie.token){
        req.flash("error","You need to login first");
        return res.direct("/");
    }
    try{
        let decoded=jwt.verify(req.cookies.token,process.env.JWT_KEY);
        let user = await userModel
        .findOne({email:decoded.email})
        .select("-password");
        req.user=user;
        next();
       
    }
    catch(err){
        req.flash("something went wrong");
        return res.direct("/");
    }

}

const jwt =require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel =require("../models/user-model")
const {generateToken}=require("../utils/generateToken")

module.exports.registerUser =  async function(res,req){

    try {
        let {fullname,email,password}=req.body;

        let user = await userModel.findOne({email:email});
        if(user) return res.status(401).send("you have already an account, please login");

        bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash(password,salt,async function(err,hash){
            if(err)return res.send(err.message);
            else{
                let user = await userModel.create({
                    fullname,
                    email,
                    password:hash,
                });

                let token = generateToken(user);
                res.cookies("token",token);

        
            res.send(user)
            }
        });
    });

        
    } catch (error) {
    res.send(error.message);
        
    }

    };


module.exports.loginUser = async function(req,res){
    let{email,password}=req.body;
    let user =  await userModel.findOne({email:email});
    if(!user) return res.send("invalid Email and paassword");

    bcrypt.compare(password,user.password,function(err,result){
        if(result){
            let token = generateToken(user);
            res.cookie("token",token);
            res.send("you can login");
        }
        else{
            return res.send("invalid Email and paassword");
        }
    })
};

module.exports.logout =async function(req,res){
    res.cookie("token","");
    res.redirect("/");
};

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
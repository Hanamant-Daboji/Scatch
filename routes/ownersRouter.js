const express=require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");


router.get("/",(req,res)=>{
    res.send("heyyy");
})
console.log(process.env.NODE_ENV);
console.log(process.env.NODE_ENV);
console.log(process.env.NODE_ENV);
console.log(process.env.NODE_ENV);
console.log(process.env.NODE_ENV);


module.exports=router;
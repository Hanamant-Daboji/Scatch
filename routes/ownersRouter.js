const express=require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");
const e = require("express");
 
 
router.post("/create", async(req ,res)=>{
   let owners =ownerModel.find();
      if(owner.length>0){
          return res
          .status(503)
          .send("You Don't have permission to create a new owner");

      }

      let {fullname,email,password}=req.body;
      let createdOwner =await ownerModel.create({
          fullname,
          email,
          password,

      });

    res.status(201).send(createdOwner)
})

router.get("/admin",(req,res)=>{
    let success = req.flash("success");
    res.render("createdproducts",{success});
})


module.exports=router;
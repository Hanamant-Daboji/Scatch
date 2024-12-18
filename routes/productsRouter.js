const express=require("express");
const router = express.Router();
const upload=require("../config/multer-config");
const productModel =require("../models/product-model");




router.post("/create",upload.single("       "),async function(req,res){
    let {image ,name ,price ,discount ,bgcolor,panelcolor ,textcolor} =req.body;
    let product = await productModel.create({
        image:req.file.buffer,
        name ,
        price ,
        discount ,
        bgcolor,
        panelcolor ,
        textcolor
    });
     req.flash("success","product created successfuly");
     res.redirect("owner/admin");

});

router.get("/")

module.exports=router;
const express =require("express");
const router =express.Router();
const isLoggedIn = require("../middlewares/isLoggedin");


router.get("/",function(req,res){
    let error =req.flash("error");
    res.render("index",{error});
});

router.get("/send",isLoggedIn,function(req,res){
    res.render("shop");
})

router.get("/logout",isLoggedIn,function(req,res){
    res.render("shop");
})
module.exports=router;

const express=require("express");
const router = express.Router();
const {registerUser}=require("../controllers/authController")
router.get("/",(req,res)=>{
    res.send("heyyy");
});
router.post("/resister", registerUser );


module.exports=router;
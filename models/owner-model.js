const mongoose =require("mongoose");
  
const ownerSchema = mongoose.Schema({
    fullname : String,
    email : String,
    password : String,
    
    isadmin : Boolean,
    products:{
        type :Array,
        default:[],
    },
    contact : Number,
    picture :String,
})



module.exports = mongoose.model("owner",ownerSchema);
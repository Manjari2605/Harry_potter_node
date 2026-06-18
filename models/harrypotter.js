const mongoose=require("mongoose");
const harryPotterSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    house:{
        type:String,
        required:true
    },
    ancestry:{
        type:String,
        required:true
    },
    wand:{
        type:String,
        required:true
    },
    actor:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }

});
module.exports=mongoose.model("HarryPotter", harryPotterSchema);
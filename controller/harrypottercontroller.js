const Character=require("../models/harrypotter");
const cloudinary=require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET

});
const upload = multer({
    dest: "uploads/"
});

const addCharacter=async (req,res)=>{
    try {
        const result = await cloudinary.uploader.upload(
    req.file.path,
    {
        folder: "harrypotter"
    }
);
   console.log(req.body);
console.log(req.file);
        const character= await Character.create({
            name: req.body.name,
            gender:req.body.gender,
            house: req.body.house,
            ancestry: req.body.ancestry,
            wand: req.body.wand,
            actor: req.body.actor,
            image:result.secure_url
        });
         res.status(201).json({
    message: "Character added",
    character
 })

}catch(err){
    console.log(err);
res.status(500).json({
    message: err,
    
 })

    }
}
const getCharacterById=async (req,res)=>{
    try{
    const character= await Character.findById(req.params.id);
     res.status(200).json({
      character
    });
}catch(err){
res.status(500).json({
    message: err,
})
}
}
const updateCharacters=async (req,res)=>{
    try{
    const character= await Character.findByIdAndUpdate(
        req.params.id,
         req.body,
          {new:true});
     res.status(200).json({
        message:"Character Updated",
      character
    });
}catch(err){
res.status(500).json({
    message: err,
})
}
}
const  deleteCharacter= async (req,res)=>{
    try{
        await Character.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message:"Character Deleted"
        });
    } catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};
module.exports={
    upload,
    addCharacter,
    getCharacterById,
    updateCharacters,
    deleteCharacter,

};
const express=require("express");
const rout= express.Router();
const {
    upload,
    addCharacter,
    getCharacterById,
    updateCharacters,
    deleteCharacter
}=require("../controller/harrypottercontroller");
const auth =
require("../middleware/auth");
rout.post("/add",upload.single("image"), addCharacter);
rout.get("/get/character/:id", getCharacterById);
rout.put("/update/character/:id", updateCharacters);
rout.delete("/delete/character/:id" , deleteCharacter);
module.exports=rout;
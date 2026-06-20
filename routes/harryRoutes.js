const express=require("express");
const rout= express.Router();
const {
    upload,
    addCharacter,
    getCharacters,
    getCharacterById,
    updateCharacters,
    deleteCharacter
}=require("../controller/harrypottercontroller");
const auth =
require("../middleware/authmiddle");
rout.post("/add",upload.single("image"), addCharacter);
rout.get("/characters", getCharacters);
rout.get("/get/character/:id", getCharacterById);
rout.put("/update/character/:id", updateCharacters);
rout.delete("/delete/character/:id" , deleteCharacter);
module.exports=rout;

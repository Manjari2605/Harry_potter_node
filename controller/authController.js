const User = require("../models/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req,res)=>{
    try{

        const {name,email,password} = req.body;

        const hashedPassword =
        await bcrypt.hash(password,10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message:"User Registered",
            user
        });

    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};
const login = async (req,res)=>{
    try{

        const {email,password} = req.body;

        const user =
        await User.findOne({email});

        if(!user){
            return res.status(404).json({
                message:"User Not Found"
            });
        }

        const isMatch =
        await bcrypt.compare(
            password,
            user.password
        );

        if(!isMatch){
            return res.status(401).json({
                message:"Invalid Password"
            });
        }

        const token = jwt.sign(
            {id:user._id},
            "harrypottersecret",
            {expiresIn:"1d"}
        );

        res.status(200).json({
            message:"Login Success",
            token
        });

    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};
module.exports = {
    register,
    login
};
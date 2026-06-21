const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerController = async (req,res) =>{
    try {
    const {username,email, role, department, organization,password} = req.body;
    const isExsiting = await User.findOne({email});
    if(isExsiting){
        return res.status(400).json({
            message:"Email Already Used"
        });
    }  
    const hashPass = await bcrypt.hash(password,10);
    const user = await User.create({
        username,
        email,
        role,
        department,
        password:hashPass,
        organization
    })
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(201).json({
        message:"Registred Succesfully",
        token
    });
    } catch (err) {
        return res.status(400).json({
            errorMessage:err
        })
    }
}

const loginController = async (req,res) =>{
    try {

    const {email,password} = req.body;

    const findUser = await User.findOne({email});
    if(!findUser){
        return res.status(400).json({
            message:"User Not Found"
        });
    }

    const isMatch = await bcrypt.compare(password,findUser.password);
    if(!isMatch){
        return res.status(400).json({
            message:"Invalid Password"
        });
    }
    const token = jwt.sign({ id: findUser._id }, process.env.JWT_SECRET);
    res.status(200).json({
        message:"Logged In Succusfully",
        token
    });
    } catch (err) {
        return res.status(500).json({
            error:err
        });
    }
}
const getMe = (req, res) => {
  res.status(200).json(req.user);
};
module.exports = {registerController,loginController,getMe}
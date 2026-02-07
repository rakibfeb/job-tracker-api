const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.register = async (req,res)=>{
try{
     let {name,email,password} = req.body;

    const exists = await User.findOne({email});

    if(exists){
        return res.status(500).json({message:"Email already exists"});
    }
    const hashed = await bcrypt.hash(password,10);

    const user = await User.create({
        name,email,password:hashed
    });

    res.status(201).json({message:'User registered successfully!',user});

}catch(err){
    return res.status(501).json({message:"failed to register try again"});
}

   
}

exports.login= async(req,res)=>{
    try{
        let {email,password} = req.body;

    const user = await User.findOne({email});
    if(!user){
        return res.status(404).json({message: "User not found kindly register"});
    }

    const match = await bcrypt.compare(password,user.password);
    if(!match){
        return res.status(501).json({message:'Email & password didnt matched'})
    }
// generate token

    const token = jwt.sign(
        {id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:"7d"}
    )

    res.json({
        message:"Login Successful!",token
    })
    }
    catch(err){
        return res.status(501).json({message:"failed to login try again"});
    }
    
}
const User = require('../models/User');
const bcrypt = require('bcryptjs');


exports.register = async (req,res)=>{
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

}
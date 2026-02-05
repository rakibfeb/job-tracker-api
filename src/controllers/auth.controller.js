const User = require('../models/User');
const bcrypt = require('bcryptjs');


exports.register = async (req, res, next) => {
        try {
            let { name, email, password } = req.body;
            if(!name || !email || !password) return res.send("Required name,email and password");
            const exists = await User.findOne({ email });
            if (exists) return res.status(400).json({ message: "User exists" });
            const hashed = await bcrypt.hash(password, 10);
            const user = await User.create({ name, email, password: hashed });

            res.status(201).json({ message:"new user added !" });

        } catch (err) {
            console.log(err);
            next(err);
        }
    };
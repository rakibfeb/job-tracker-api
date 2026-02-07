const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(501).json({ messsage: "auth header not found" });
        }
        const token = authHeader.split(" ")[1];

        // varify token 

        const access = jwt.verify(token, process.env.JWT_SECRET);

        req.user = access.id;
        next();
    }
    catch (err) {
        return res.status(501).json({ message: "failed to varify" });
    }
}
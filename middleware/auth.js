const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
    // get the token from the header
    const token = req.header("x-auth-token");
    // check if not token
    if (!token) {
        return res.status(401).json({ msg: "No token - Authorisation denied" });
    }
    try {
        const decoded = jwt.verify(token, config.get("jwtSecret"));
        req.user = decoded.user;
        next();
    } catch (error) {
        return res.status(401).json({ msg: "Token is not valid" });
    }
};

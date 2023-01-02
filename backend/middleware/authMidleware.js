const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(403)
                .json({message: "No token provided"});
        }
        const decodedToken = jwt.verify(token,
            process.env.JWT_ACCESS_SECRET);
        req.userData = decodedToken;
        next();
    } catch (e) {
        console.log(e)
    }
};
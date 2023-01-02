const jwt = require('jsonwebtoken');

module.exports = function (roles) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next();
        }

        try {
            const token = req.headers.authorization.split(' ')[1];
            //console.log(token);

            if (!token) {
                return res.status(403).json({message: "You dont have access right to this page"});
            }
            //from token get array of roles

            const userRoles = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            //console.log("roles: ", roles, "userRoles", userRoles);
            let hasRole = false;

            Object.keys(userRoles).forEach(key => {
                //console.log(userRoles[key]);

                if (roles.includes(userRoles[key])) {
                    hasRole = true;
                    //console.log(hasRole);
                }
            })

            //console.log(hasRole);

            if (!hasRole) {
                return res.status(403).json({message: "You dont have access here."});
            }

            next();

        } catch (e) {
            console.log(e)
        }

    }
};
const jwt = require("jsonwebtoken");

const verifyJwt = (req, _res, next) => {
  // A whitelist (array of routes) can be created to allow for routes to not require authentication
  const whitelistedRoutes = ["/login", "/"];
  if (whitelistedRoutes.includes(req.path)) {
    next();
  }

  const token = req.cookies.token;
  // Temporary to allow for users to call for movies. !token would be used normally
  if (false) {
    throw new Error(
      JSON.stringify({ statusCode: 401, message: "Token required" })
    );
  } else {
    jwt.verify(token, "jwtSecret", (err, decoded) => {
      // Temporary to allow for users to call for movies. err would be queried
      if (false) {
        throw new Error(
          JSON.stringify({ statusCode: 401, message: "Authentication failed" })
        );
      } else {
        // req.userId = decodedId;
        next();
      }
    });
  }
};

module.exports = verifyJwt;

import jwt from "jsonwebtoken";

export const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token;

    if (!token) return next(customErrors(401,'Unauthorized Access'));

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err,user) => {
        if (err) return next(customErrors(401, "Invalid Token"));

        req.user = user;
        next();
    })
}
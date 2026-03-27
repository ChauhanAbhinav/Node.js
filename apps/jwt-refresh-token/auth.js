import jwt from "jsonwebtoken";

import { JWT_SECRET } from "./constants.js";

export const authMiddleware = (req, res, next) => {
    const token = req.cookies?.token; // from cookies

    if (!token) {
        console.log("Token not found");
        return res.redirect("/login");
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        console.log("Login Successfully");
        next();
    } catch (err) {
        console.log("Login Fail!", err.message);
        return res.redirect("/login");
    }
};

export const checkAuthMiddleware = (req, res, next) => {
    const token = req.cookies?.token; // from cookies

    if (token) {
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            req.user = decoded;
            console.log("Login Successfully");
            return res.redirect("/");
        } catch (err) {
            console.log("Login Fail!", err.message);
            return res.redirect("/login");
        }
    }

    next();
};
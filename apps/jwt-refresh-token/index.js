const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { JWT_SECRET } = require("./constants.js");
const {authMiddleware, checkAuthMiddleware} = require("./auth.js");

const PORT = process.env.PORT || 3000;
const app = express();

// Use the built-in middleware for parsing URL-encoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.set("view engine", "ejs");

app.get("/", authMiddleware, (req, res, next) => {
    return res.render("index.ejs", { username: req.user.email });
})

app.get("/login", checkAuthMiddleware, (req, res,  next) => {
    return res.render("login.ejs", { error: null });
})

app.post("/login", (req, res, next) => {
    let payload = req.body;
    console.log(payload);

    if (!checkPassword(payload)) {
        console.log("Username or Password Incorrect");
        return res.render("login.ejs", { error: "Username or Password Incorrect" });
    }

    let token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: '2m'
    });
    res.cookie('token', token, { httpOnly: true, maxAge: 15 * 60 * 100 }); // 15 mins, httpOnly recommended
    console.log("Login Successfully");
    return res.redirect("/");
})

app.get("/logout", (req, res) => {
    res.clearCookie("token");
    return res.redirect("/login");
});

let checkPassword = function (payload) {
    const { USERNAME, PASSWORD } = require("./constants.js");
    if (payload.email === USERNAME && payload.password === PASSWORD) {
        return true
    } else {
        return false
    }
}

app.listen(PORT, () => {
    console.log("app is listening on PORT:", PORT)
})
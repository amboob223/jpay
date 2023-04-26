const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const cors = require("cors");
const pool = require("./db");

//middleware 
app.use(express.json());
app.use(cors({
    origin: ["localhost:3000/jpay"],
    methods: ["POST", "GET"],
    credentials: true
}));


app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    key: "userID",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24
    }
}))

const saltRounds = 10;

const storage = multer.diskStorage({
    destination: (null, "/images", cb),
    filename: (null, cb)
})

app.post("/login", (req, res) => {
    const username = req.body.username
    const password = req.body.password

    pool.query(
        "SELECT * FROM logins WHERE username = ?",
        username,
        (err, result) => {
            if (err) {
                res.send({ err: err })
            }
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        req.session.user = result
                        console.log(req.session.user)
                        req.send(result)
                    } else {
                        res.send({ message: "wrongg username" })
                    }
                })
            }
        }
    )
})

// app.post("/jpay",())
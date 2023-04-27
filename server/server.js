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
    destination: (req, file, cb) => {
        cb(null, 'images/')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })
app.set("view engine", "ejs");

app.post("/upload", upload.single("image"), (req, res) => {
    res.send("Image uploaded")
})


app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err)
        }

        pool.query(
            "INSERT INTO users (username,password) VALUES (?,?)",
            [username, hash],
            (err, result) => {
                console.log(err);
            }
        )
    })
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
            } else {
                res.send({ message: "user dont exist" })
            }
        }
    )
})

app.listen(3001, () => {
    console.log("3002 pount")
})

// app.post("/jpay",())
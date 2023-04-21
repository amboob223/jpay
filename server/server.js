const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const cors = require("cors")

//middleware 
app.use(express.json());
app.use()
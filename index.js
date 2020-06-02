const express = require("express");
const router = express.Router();

const app = express();
app.set("view engine", "ejs");

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Routes
const home = require("./router");
app.use("/", home);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

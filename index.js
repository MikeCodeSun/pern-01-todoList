const express = require("express");
require("dotenv").config();
const cors = require("cors");
const router = require("./routes/route");

const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/todos", router);

app.get("/", (req, res) => res.send("Home Page"));

app.listen(port, console.log(`server is running on port : ${port}`));

import express from "express";
import bodyParser from "body-parser";
import router from "./routes/network";
import path from "path";
import cors from "cors";

require("dotenv").config({
  path: path.join(__dirname, ".env"),
});

const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200,
    credentials: false,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Main routes
router(app);

app.listen(process.env.PORT || 8080);
console.log(
  `Server is running on port ${process.env.DOMAIN}:${process.env.PORT}`
);

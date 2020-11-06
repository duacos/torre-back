import express from "express";
import bodyParser from "body-parser";
import config from "./config";
import router from "./routes/network";
import path from "path";
import cors from "cors";

require("dotenv").config({
  path: path.join(__dirname, ".env"),
});

const app = express();

app.use(
  cors({
    origin: config.origin,
    optionsSuccessStatus: 200,
    credentials: false,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Main routes
router(app);

app.listen(config.port || 8080);
console.log(`Server is running on port ${config.domain}:${config.port}`);

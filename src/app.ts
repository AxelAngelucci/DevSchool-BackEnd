import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./db/config";
import { grantRouter } from "./routes/grant.routes";

dotenv.config();
const app = express();

app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);
db();

//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Rutas
app.use(grantRouter);

//Cors
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});

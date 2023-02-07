import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./db/config";
import { grantRouter } from "./routes/grant.routes";
import { usersRouter } from "./routes/users.routes";
import { commisionsRouter } from "./routes/commisions.routes";
import { sendMail } from "./utils/mailer";

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
app.use(usersRouter);
app.use(grantRouter);
app.use(commisionsRouter);

//Cors
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});


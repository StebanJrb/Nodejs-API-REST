import express from "express";
import morgan from "morgan";
import labController from"./routes/lab.routes";
import UserController from "./routes/user.routes";

const cors = require('cors');

const app = express();


app.use(cors());
//Settings
app.set("port",3000);
//middlewares
app.options('*',cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/users",UserController);
app.use("/api/labs",labController);


export default app;

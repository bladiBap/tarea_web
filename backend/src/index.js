//dependencies
import express from "express";
import morgan from "morgan";
import cors from "cors";
//import routes
import taskRoutes from "./routes/task.routes.js";

const app = express();

app.use(express.json());

app.use(cors());
app.use(express.static("public"));
app.use(morgan('dev'));

app.use("/public", express.static("public"));
app.use(taskRoutes);


app.listen(process.env.PORT || 4000 );
console.log('server started on port', process.env.PORT || 4000);
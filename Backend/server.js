import express from "express";
import cors from "cors";
import connection from "./Libs/database.js";
import foodRouter from "./Routes/foodRouter.js";
import { globalErrorHandler } from "./ErrorHandler/globalErrorHandler.js";

await connection();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/", foodRouter);
app.use("/images", express.static("Uploads"))
const port = process.env.PORT || 5555;

app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`);
});

app.use(globalErrorHandler);

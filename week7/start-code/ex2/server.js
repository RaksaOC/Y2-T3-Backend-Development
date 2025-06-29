import express from "express";
import dotenv from "dotenv";
import writerRouter from "./route.js";
const application = express();
dotenv.config();

application.use(express.json());
application.use("/writers", writerRouter);
application.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});

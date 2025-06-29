import express from "express";
import dotenv from "dotenv";
import pupilRoute from "./route.js";
const server = express();
dotenv.config();

server.use(express.json());
server.use("/", pupilRoute);
server.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

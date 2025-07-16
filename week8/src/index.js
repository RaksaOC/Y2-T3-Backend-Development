import express from "express";
import dotenv from "dotenv";
import studentRoutes from "./routes/student.routes.js";
import courseRoutes from "./routes/course.routes.js";
import teacherRoutes from "./routes/teacher.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { serveSwagger, setupSwagger } from "./config/swagger.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use(authRoutes);

app.use("/docs", serveSwagger, setupSwagger);

app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);
app.use("/teachers", teacherRoutes);

app.get("/", (req, res) => res.send("Welcome to School API!"));

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);

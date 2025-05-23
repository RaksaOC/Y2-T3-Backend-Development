import express from "express";
import { logger } from "./middleware/logger.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use(logger);

app.use('/', userRoutes);

// Start the server
const PORT = 3010;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

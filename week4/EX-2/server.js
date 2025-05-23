import express from "express";
import journalistRoutes from "./routes/journalistRoutes.js";
import articleRoutes from "./routes/articleRoutes.js";
import categoriesRoutes from "./routes/categoryRoutes.js";

const app = express();

const PORT = 3010;

app.use("/journalists", journalistRoutes);
app.use("/categories", categoriesRoutes);
app.use("/articles", articleRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

import express from "express";
import sentMail from "./sentMail.js";
import cors from "cors";
import dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = 1000;
const app = express();

app.use(express.json());
dotenv.config();
app.use(cors());
app.use(sentMail);

app.get("/", (req, res) => {
  app.use(
    express.static(path.resolve(__dirname, "contactpage_frontend", "dist"))
  );
  res.sendFile(
    path.resolve(__dirname, "contactpage_frontend", "dist", "index.html")
  );
});

app.listen(port, () => {
  console.log("Server started");
});

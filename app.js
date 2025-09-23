import express from "express";
import { connectDB } from "./src/config/database.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router } from "./src/routers/index.routes.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api", router);
app.use(cors({ origin: "http://localhost:4632", credentials: true }));
app.use(cookieParser());

app.listen(PORT, async () => {
  await connectDB();
  console.log(`servidor se escucha con exito el puerto${PORT}`);
});

import expres from "express";
import { connectDB } from "./src/config/database.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = expres();
const PORT = process.env.PORT;

app.use(expres.json());
app.use(cors({ origin: "http://localhost:4632", credentials: true }));
app.use(cookieParser());

app.listen(PORT, async () => {
  await connectDB();
  console.log(`servidor se escucha con exito el puerto${PORT}`);
});

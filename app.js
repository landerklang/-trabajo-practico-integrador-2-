import expres from "express";
import { connectDB } from "./src/config/database.js";

const app = expres();
const PORT = process.env.PORT;

app.use(expres.json());

app.listen(PORT, async () => {
  await connectDB();
  console.log(`servidor se escucha con exito el puerto${PORT}`);
});

import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json()); //middleware para poder receber a req em JSON
app.use(routes);

app.listen(3333, () => {
  console.log("HTTP server running!");
});

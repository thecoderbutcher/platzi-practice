import express from "express";
import RouterApi from "./src/shared/infrastructure/routes.js";

const app = express();
const port = 3300;
app.use(express.json());
RouterApi(app)

app.listen(port, () => {
  console.log("Escuchando en el puerto " + port);
})
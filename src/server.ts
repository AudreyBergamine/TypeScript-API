import express from "express";
import departmentsRouter from "./Routes/Rotas";
import bodyParser from "body-parser";

const app = express();
app.use(departmentsRouter);

// Configurar o body-parser para analisar solicitações com 'x-www-form-urlencoded'
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3333, () => {console.log("Conectado")})



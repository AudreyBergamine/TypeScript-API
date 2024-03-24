import express from "express";
import departmentsRouter from "./Routes/Rotas";
import bodyParser from "body-parser";

const app = express();

// Configurar o body-parser para analisar solicitações com 'x-www-form-urlencoded'
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// o use departments deve ir após o bodyparse
app.use(departmentsRouter);

app.listen(3333, () => {console.log("Conectado")})



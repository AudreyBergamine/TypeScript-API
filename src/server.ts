import express from "express";
import departmentsRouter from "./Routes/Rotas";
import bodyParser from "body-parser";

const app = express();

// Configurando o bodyParser para analisar solicitações com 'x-www-form-urlencoded'
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// O use departments deve ir após o bodyParse
app.use(departmentsRouter);

app.listen(3333, () => {console.log("Server is Running in port 3333: Conectado")})

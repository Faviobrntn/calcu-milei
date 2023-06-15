// import express from "express";
import { Application } from "express";
import express = require("express");
import "reflect-metadata";
import { AppDataSource } from "./data-source";

/**
 * BASE DE DATOS
 */
AppDataSource.initialize()
  .then(() => {
    console.log(
      "Here you can setup and run express / fastify / any other framework."
    );
  })
  .catch((error) => console.log(error));

/**
 * SERVIDOR
 */
// const app: express.Application = express();
const app: Application = express();

app.use(express.json());
// app.use(express.urlencoded({extended: false}));

// RUTAS
const rutas = require("./routes/index.routes");
app.use(rutas);

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log("Servidor corriendo en http://localhost:" + app.get("port"));
});

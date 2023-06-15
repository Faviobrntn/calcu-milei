import { Router } from "express";
import express = require("express");
import { usuariosController } from "../controllers/usuarios.controller";

const router: Router = express.Router();

// router.get('/tabla', usuariosController.tabla);
router.get("/", usuariosController.getAll);
router.get("/:id", usuariosController.get);
router.post("/", usuariosController.nuevo);
router.put("/:id", usuariosController.editar);
router.delete("/:id", usuariosController.eliminar);

export default router;
module.exports = router;

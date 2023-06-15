import { Router } from "express";
import { ejemplosController } from "../controllers/ejemplo.controller";

const router: Router = Router();

router.get("/listado", ejemplosController.listado);
router.get("/", ejemplosController.getAll);
router.get("/:id", ejemplosController.get);
router.post("/", ejemplosController.nuevo);
// router.put('/:id', ejemplosController.editar);
router.delete("/:id", ejemplosController.eliminar);

export default router;

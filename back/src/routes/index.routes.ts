import { Router } from "express";
import express = require("express");
const router: Router = express.Router();

router.use("/api/usuarios", require("./usuarios.routes"));
// router.use('/api/', require('./auth.routes'));
// router.use('', require('./auth.routes'));

export default router;
module.exports = router;

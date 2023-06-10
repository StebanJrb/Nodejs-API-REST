import { Router, request } from "express";
import { methods as labController } from "../controllers/lab.controller";

const router=Router();
//CONSULTA GENERIACA DE TODA LA BASE DE DATOS
router.get("/", labController.getLabs);
//CONSULTA ESPECIFICA PARA USUARIO LOGIN
router.get("/1/",labController.getLab);
//AGREGA USUARIOS A LA BASE DE DATOS
router.post("/",labController.addPrac);

export default router;
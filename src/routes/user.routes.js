import { Router, request, response } from "express";
import { methods as UserController } from "../controllers/user.controller";

const router=Router();
//CONSULTA GENERIACA DE TODA LA BASE DE DATOS
router.get("/", UserController.getUsers);
//CONSULTA ESPECIFICA PARA USUARIO LOGIN
router.get("/1/",UserController.getUser);
//AGREGA USUARIOS A LA BASE DE DATOS
router.post("/",UserController.addUsers);

export default router;
import { Router} from "express";
import {createorden} from "../controllers/rutas.controller.js"


const router = Router()

router.get('/create-order', createorden);

router.get('/succes', (req,res) => res.send('succes'));
router.get('/web', (req,res) => res.send('Dios es tu pastor y nada te faltara'));

export default router


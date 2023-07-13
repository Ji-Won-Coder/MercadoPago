import { Router} from "express";
import {createOrder, receiveWebhook} from "../controllers/rutas.controller.js";


const router = Router();

router.post("/create-order",createOrder);

router.post("/webhook",receiveWebhook);

router.get("/succes", (req,res) => res.send('Succes'));

export default router;


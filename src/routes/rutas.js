import { Router} from "express";


const router = Router()

router.get('/create-order', (req,res) => res.send('creando orden'));
router.get('/succes', (req,res) => res.send('creando orden'));
router.get('/web', (req,res) => res.send('webhook'));

export default router


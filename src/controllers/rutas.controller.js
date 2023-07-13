import mercadopago from "mercadopago";
import { HOST, MERCADOPAGO_TOKEN } from "../config.js";


export const createOrder = async (req,res) => {

    mercadopago.configure({
        access_token: MERCADOPAGO_TOKEN,
    });
     try{
        const result = await mercadopago.preferences.create({
            //crea la orden
            items:[
                {
                    title:"manga",
                    unit_price:20000,
                    currency_id:"COP",
                    quantity:1
                }
            ],//eventos; retorna respuestas
            notification_url:"https://010b-204-199-69-106.ngrok.io/webhook", 
            back_urls:{
                success:`${HOST}/success`,
                failure:`${HOST}/failure`,
                pending:`${HOST}/pending`,
            },
        });//./ngrok.exe http *puerto*
        console.log(result);

        // res.json({ message: "Payment creted" });
    res.json(result.body);

     }catch(error){
        return res.status(500).json({ message: "Something goes wrong" });
     }
};
    export const receiveWebhook = async (req,res)=>{
        const payment=req.query;

        try {
            if (payment.type === "payment"){
                const data = await mercadopago.payment.findById(payment["data.id"]);
                console.log(data);
                //guardar en bases de datos.
            }
            res.sendStatus(204)
        } catch (error) {
           return res.sendStatus(500).json({ error: error.message });
        }
    };


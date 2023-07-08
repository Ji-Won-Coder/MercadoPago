import mercadopago from "mercadopago";

export const createorden = async (req,res) => {


    mercadopago.configure({
        access_token:
        "TEST-5549987771660083-070811-69f5f82a4b16ae580a16656d2c0be32b-1418587536",
    });

    const result = await mercadopago.preferences.create({
        items:[
            {
                title:"manga",
                unit_price:20000,
                currency_id:"COP",
                quantity:1,
            }
        ]
    })
    console.log(result)

    res.send('creando orden');
};
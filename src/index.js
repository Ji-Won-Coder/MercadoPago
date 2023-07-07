import express from "express";
import rutas from './routes/rutas.js'

const app = express()
app.use(rutas);

app.listen(3000)
console.log('esta escuhando :D', 3000)

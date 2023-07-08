import express from "express";
import morgan from "morgan";
import rutas from './routes/rutas.js';
import { PORT } from './config.js';

const app = express();
app.use(morgan('dev')); //mensajes por consola de la peticion que llama
app.use(rutas);

app.listen(PORT);
console.log('esta escuhando :D', PORT);

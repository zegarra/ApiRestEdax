import express from 'express'
import { pool } from './db.js'
import usuarioRoutes from './routes/usuario.routes.js'
import indexRoutes from './routes/index.routes.js'
import {PORT} from './config.js'

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api',usuarioRoutes)

app.use((req, res, next) => 
{res.status(404).json({message:'endpoint not fond'})})

export default app;


//crear carpeta 
//npm init -y (crea el package.json)
//npm i express (crear el node modules y package-lock.json)
//crear index.js
//node index.js
//package.json >> "type": "module",
//npm i nodemon -D
//>>dev : nodemon index.js

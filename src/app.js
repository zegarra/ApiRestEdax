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
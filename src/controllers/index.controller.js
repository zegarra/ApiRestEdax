import {pool} from '../db.js'

export const ping = async(req, res) => 
{const [result] = await pool.query('SELECT 1 + 1 AS result') 
res.json(result)}

//thunder client
//npm run dev
//https://www.youtube.com/watch?v=3dSkc-DIM74
//http://localhost:300/ping
//https://railway.app/dashboard
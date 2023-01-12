import {pool} from '../db.js'

// export const getUsuario = (req, res) => res.send('obteniendo usuarios')

//obtener usuarios  GET
export const getUsuario = async (req, res) => {
    try{const [rows] = await pool.query('SELECT * FROM usuario')
    res.json(rows)}catch(error){return res.status(500).json({message:'something goas wrong'})}
    
}
//obtener usuarios GET por id
export const getUsuarios = async(req, res) => {
    try{const [rows] = await pool.query('SELECT * FROM usuario WHERE id = ?', [req.params.id])
    if (rows.length <= 0) return res.status(404).json({message: 'Usuario not found'})
    res.json(rows)}catch(error){return res.status(500).json({message:'something goas wrong'})}
}


//guardar usuarios POST
export const createUsuario = async (req, res) => {
    try{const{nombre, correo, contrasena} = (req.body)
    const [rows] = await pool.query('INSERT INTO usuario (nombre,correo,contrasena) VALUES(?,?,?)',
     [nombre, correo, contrasena])
    res.send({ id: rows.insertId, nombre,correo,contrasena})}catch(error){return res.status(500).json({message:'something goas wrong'})}
}

//Actualizar usuarios PUT
export const updateUsuario = async (req, res) => {
    try{const {id} = req.params
    const {nombre, correo, contrasena} =req.body
    const [result] = await pool.query('UPDATE usuario SET nombre = IFNULL(?, nombre), correo = IFNULL(?, correo), contrasena = IFNULL(?, contrasena) WHERE id = ?', 
    [nombre,correo,contrasena, id])
    console.log(result)
    if(result.affectedRows === 0) return res.status(404).json({message: 'Usuario not found'})
    const [rows] = await pool.query('SELECT * FROM usuario WHERE id = ?', [id])
    res.json(rows[0])}catch(error){return res.status(500).json({message:'something goas wrong'})}
}



//Eliminar Usuarios DELETE
export const deleteUsuario = async(req, res) => {
    try{const [result] = await pool.query('DELETE FROM usuario WHERE id = ?',[req.params.id])
    if(result.affectedRows <= 0) return res.status(404).json({message: 'Usuario not found'})
    console.log(result)
    res.sendStatus(204)}catch(error){return res.status(500).json({message:'something goas wrong'})}
}
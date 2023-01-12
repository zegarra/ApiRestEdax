import{Router} from 'express'
import{getUsuario, getUsuarios,createUsuario, updateUsuario,
     deleteUsuario} from '../controllers/usuario.controller.js'

const router = Router()

router.get('/conusuario',getUsuario)
router.get('/conUsuario/:id',getUsuarios)
router.post('/regUsuario',createUsuario)
router.patch('/actUsuario/:id',updateUsuario)
router.delete('/delUsuario/:id', deleteUsuario)

export default router
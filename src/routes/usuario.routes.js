import{Router} from 'express'
import{getUsuario, getUsuarios,createUsuario, updateUsuario,
     deleteUsuario} from '../controllers/usuario.controller.js'

const router = Router()

router.get('/usuario',getUsuario)
router.get('/usuario/:id',getUsuarios)
router.post('/usuario',createUsuario)
router.patch('/usuario/:id',updateUsuario)
router.delete('/usuario/:id', deleteUsuario)

export default router
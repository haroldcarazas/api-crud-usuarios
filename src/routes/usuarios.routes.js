import { Router } from 'express'
import { getUsuarioById, getUsuarios, storeUsuario } from '../controllers/usuarios.controller.js'

const router = Router()

router.get('/api/usuarios', getUsuarios)
router.get('/api/usuarios/:id', getUsuarioById)
router.post('/api/usuarios', storeUsuario)

export default router

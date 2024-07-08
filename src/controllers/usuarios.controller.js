import usuarioModel from '../models/Usuario.js'

export const getUsuarios = async (req, res) => {
  const usuarios = await usuarioModel.all()
  res.json(usuarios)
}

export const getUsuarioById = async (req, res) => {
  const { id } = req.params
  const resultado = await usuarioModel.getById(id)

  if (resultado.length === 0) return res.status(404).json({ message: 'No se encontró el usuario' })

  res.json(resultado[0])
}

export const storeUsuario = async (req, res) => {
  const { nombres, apellidos, fechaNacimiento, rolId } = req.body
  const resultado = await usuarioModel.store(nombres, apellidos, fechaNacimiento, rolId)

  if (resultado.affectedRows !== 1) return res.status(500).json({ message: 'No se pudo insertar el usuario' })

  res.status(201).json({ message: 'Usuario creado' })
}

import { pool } from '../config/db.js'

const all = async () => {
  const [usuarios] = await pool.execute('SELECT * FROM usuarios')
  return usuarios
}

const getById = async id => {
  const [usuario] = await pool.execute(
    'SELECT * FROM usuarios WHERE usuario_id = ?',
    [id]
  )
  return usuario
}

const store = async (nombres, apellidos, fechaNacimiento, rolId) => {
  const [resultado] = await pool.execute(
    'INSERT INTO usuarios(nombres, apellidos, fecha_nacimiento, rol_id) VALUES (?, ?, ?, ?)',
    [nombres, apellidos, fechaNacimiento, rolId]
  )
  return resultado
}

export default { all, getById, store }

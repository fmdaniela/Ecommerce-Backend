import Administrador from '../models/Administrador.js';

// Obtener todos los administradores
export const getAdministradores = async (req, res) => {
  try {
    const administradores = await Administrador.findAll();
    res.status(200).json(administradores);
  } catch (error) {
    console.error("Error al obtener administradores:", error);
    res.status(500).json({ message: 'Error al obtener administradores', error: error.message });
  }
};

// Obtener un administrador por id
export const getAdministradorById = async (req, res) => {
  try {
    const { id } = req.params;
    const administrador = await Administrador.findByPk(id);
    if (administrador) {
      res.status(200).json(administrador);
    } else {
      res.status(404).json({ message: 'Administrador no encontrado' });
    }
  } catch (error) {
    console.error("Error al obtener administrador por id:", error);
    res.status(500).json({ message: 'Error al obtener administrador', error: error.message });
  }
};

// Crear un nuevo administrador
export const createAdministrador = async (req, res) => {
  try {
    const nuevoAdministrador = await Administrador.create(req.body);
    res.status(201).json(nuevoAdministrador);
  } catch (error) {
    console.error("Error al crear administrador:", error);
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'Error de validación', errors: error.errors.map(e => e.message) });
    }
    res.status(500).json({ message: 'Error al crear administrador', error: error.message });
  }
};

// Actualizar un administrador existente
export const updateAdministrador = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizar = req.body;

    const administrador = await Administrador.findByPk(id);

    if (administrador) {
      const administradorActualizado = await administrador.update(datosActualizar);
      res.status(200).json(administradorActualizado);
    } else {
      res.status(404).json({ message: 'Administrador no encontrado para actualizar' });
    }
  } catch (error) {
    console.error("Error al actualizar administrador:", error);
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        message: 'Error de validación',
        errors: error.errors.map(e => e.message)
      });
    }
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

// Eliminar un administrador
export const deleteAdministrador = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await Administrador.destroy({ where: { id } });
    if (resultado > 0) {
      res.status(200).json({ message: 'Administrador eliminado exitosamente' });
    } else {
      res.status(404).json({ message: 'Administrador no encontrado para eliminar' });
    }
  } catch (error) {
    console.error("Error al eliminar administrador:", error);
    res.status(500).json({ message: 'Error al eliminar administrador', error: error.message });
  }
};

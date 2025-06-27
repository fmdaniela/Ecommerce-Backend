import Cliente from '../models/Cliente.js';
import Carrito from '../models/Carrito.js';

// Obtener todos los clientes
export const getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll({
      include: [{
        model: Carrito,
        as: 'carritos' 
      }]
    });
    res.status(200).json(clientes);
  } catch (error) {
    console.error("Error al obtener clientes:", error);
    res.status(500).json({ message: 'Error al obtener clientes', error: error.message });
  }
};

// Obtener un cliente por id
export const getClienteById = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id, {
      include: [{
        model: Carrito,
        as: 'carritos'
      }]
    });
    if (cliente) {
      res.status(200).json(cliente);
    } else {
      res.status(404).json({ message: 'Cliente no encontrado' });
    }
  } catch (error) {
    console.error("Error al obtener cliente por id:", error);
    res.status(500).json({ message: 'Error al obtener cliente', error: error.message });
  }
};

// Crear un nuevo cliente
export const createCliente = async (req, res) => {
  try {
    const nuevoCliente = await Cliente.create(req.body);
    res.status(201).json(nuevoCliente);
  } catch (error) {
    console.error("Error al crear cliente:", error);
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'Error de validación', errors: error.errors.map(e => e.message) });
    }
    res.status(500).json({ message: 'Error al crear cliente', error: error.message });
  }
};

// Actualizar un cliente existente
export const updateCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizar = req.body;

    const cliente = await Cliente.findByPk(id);

    if (cliente) {
      const clienteActualizado = await cliente.update(datosActualizar);
      res.status(200).json(clienteActualizado);
    } else {
      res.status(404).json({ message: 'Cliente no encontrado para actualizar' });
    }
  } catch (error) {
    console.error("Error al actualizar cliente:", error);
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        message: 'Error de validación',
        errors: error.errors.map(e => e.message)
      });
    }
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

// Eliminar un cliente
export const deleteCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await Cliente.destroy({ where: { id } });
    if (resultado > 0) {
      res.status(200).json({ message: 'Cliente eliminado exitosamente' });
    } else {
      res.status(404).json({ message: 'Cliente no encontrado para eliminar' });
    }
  } catch (error) {
    console.error("Error al eliminar cliente:", error);
    res.status(500).json({ message: 'Error al eliminar cliente', error: error.message });
  }
};


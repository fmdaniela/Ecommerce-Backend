import Categoria from '../models/Categoria.js';
import Producto from '../models/Producto.js';

// Obtener todas las categorías
export const getCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll({
      where: { activa: true },
      include: [{
        model: Producto,
        as: 'productos' 
      }]
    });
    res.status(200).json(categorias);
  } catch (error) {
    console.error("Error al obtener categorías:", error);
    res.status(500).json({ message: 'Error al obtener categorías', error: error.message });
  }
};

// Obtener una categoría por id
export const getCategoriaById = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id, {
      include: [{
        model: Producto,
        as: 'productos'
      }]
    });
    if (categoria) {
      res.status(200).json(categoria);
    } else {
      res.status(404).json({ message: 'Categoría no encontrada' });
    }
  } catch (error) {
    console.error("Error al obtener categoría por id:", error);
    res.status(500).json({ message: 'Error al obtener categoría', error: error.message });
  }
};

// Crear una nueva categoría
export const createCategoria = async (req, res) => {
  try {
    const nuevaCategoria = await Categoria.create(req.body);
    res.status(201).json(nuevaCategoria);
  } catch (error) {
    console.error("Error al crear categoría:", error);
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'Error de validación', errors: error.errors.map(e => e.message) });
    }
    res.status(500).json({ message: 'Error al crear categoría', error: error.message });
  }
};

// Actualizar una categoría existente
export const updateCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizar = req.body;

    const categoria = await Categoria.findByPk(id);

    if (categoria) {
      const categoriaActualizada = await categoria.update(datosActualizar);
      res.status(200).json(categoriaActualizada);
    } else {
      res.status(404).json({ message: 'Categoría no encontrada para actualizar' });
    }
  } catch (error) {
    console.error("Error al actualizar categoría:", error);
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        message: 'Error de validación',
        errors: error.errors.map(e => e.message)
      });
    }
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};

// Eliminar una categoría
export const deleteCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await Categoria.destroy({ where: { id } });
    if (resultado > 0) {
      res.status(200).json({ message: 'Categoría eliminada exitosamente' });
    } else {
      res.status(404).json({ message: 'Categoría no encontrada para eliminar' });
    }
  } catch (error) {
    console.error("Error al eliminar categoría:", error);
    res.status(500).json({ message: 'Error al eliminar categoría', error: error.message });
  }
};


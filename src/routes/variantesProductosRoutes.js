import { Router } from 'express';
import {
  getVariantesProducto,
  getVarianteProductoById,
  createVarianteProducto,
  updateVarianteProducto,
  deleteVarianteProducto
} from '../controllers/variantesPoductosController.js';

const router = Router();

router.get('/', getVariantesProducto);
router.get('/:id', getVarianteProductoById);
router.post('/', createVarianteProducto);
router.put('/:id', updateVarianteProducto);
router.delete('/:id', deleteVarianteProducto);

export default router;

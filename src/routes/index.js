import { Router } from 'express';
import clientesRoutes from './clientesRoutes.js';
import telefonosRoutes from './telefonosRoutes.js';
import direccionesRoutes from './direccionesRoutes.js';
import administradoresRoutes from './administradoresRoutes.js';
import productosRoutes from './productosRoutes.js';
import categoriasRoutes from './categoriasRoutes.js';
import ordenescomprasRoutes from './ordenescomprasRoutes.js';
import carritosRoutes from './carritosRoutes.js';
import pagosRoutes from './pagosRoutes.js';
import detallesOrdenesRoutes from './detallesOrdenesRoutes.js';
import detallesCarritosRoutes from './detallesCarritosRoutes.js';
import variantesProductosRoutes from './variantesProductosRoutes.js';
import movimientosStockRoutes from './movimientosStockRoutes.js';
import blogArticulosRoutes from './blogArticulosRoutes.js';
import lecturasBlogArticulosRoutes from './lecturasBlogArticulosRoutes.js';
import resenasRoutes from './resenasRoutes.js';


const router = Router();


router.use('/clientes', clientesRoutes);  // monta las rutas definidas en router. 
router.use('/telefonos', telefonosRoutes);
router.use('/direcciones', direccionesRoutes);
router.use('/administradores', administradoresRoutes);
router.use('/productos', productosRoutes);
router.use('/categorias', categoriasRoutes);
router.use('/ordenescompras', ordenescomprasRoutes);
router.use('/carritos', carritosRoutes);
router.use('/pagos', pagosRoutes);
router.use('/detallesOrdenes', detallesOrdenesRoutes);
router.use('/detallesCarritos', detallesCarritosRoutes);
router.use('/variantesProductos', variantesProductosRoutes);
router.use('/movimientosStock', movimientosStockRoutes);
router.use('/blogArticulos', blogArticulosRoutes);
router.use('/lecturasBlogArticulos', lecturasBlogArticulosRoutes);
router.use('/resenas', resenasRoutes);

export default router;

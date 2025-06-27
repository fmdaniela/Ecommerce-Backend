import sequelize from '../db/connection.js';
import Cliente from './Cliente.js';
import Carrito from './Direccion.js';
import OrdenCompra from './OrdenCompra.js';
import Direccion from './Direccion.js';
import Telefono from './Telefono.js';
import Categoria from './Categoria.js';
import Producto from './Producto.js';
import Administrador from './Administrador.js';
import Pago from './Pago.js';
import DetalleCarrito from './DetalleCarrito.js';
import DetalleOrden from './DetalleOrden.js';
import MovimientoStock from './MovimientoStock.js';
import VarianteProducto from './VarianteProducto.js';
import BlogArticulo from './BlogArticulo.js';
import LecturaBlogArticulo from './LecturaBlogArticulo.js';
import Resena from './Resena.js';


// Cliente 1:N Carrito
Cliente.hasMany(Carrito, { foreignKey: 'idCliente', as: 'carritos' });
Carrito.belongsTo(Cliente, { foreignKey: 'idCliente', as: 'cliente' });

// Cliente 1:N OrdenCompra
Cliente.hasMany(OrdenCompra, { foreignKey: 'idCliente' });
OrdenCompra.belongsTo(Cliente, { foreignKey: 'idCliente' });

// Direccion 1:N OrdenCompra
Direccion.hasMany(OrdenCompra, { foreignKey: 'idDireccion' });
OrdenCompra.belongsTo(Direccion, { foreignKey: 'idDireccion' });

// Carrito 1:1 OrdenCompra
Carrito.hasOne(OrdenCompra, { foreignKey: 'idCarrito' });
OrdenCompra.belongsTo(Carrito, { foreignKey: 'idCarrito', unique: true });
//Esa opción unique: true en belongsTo asegura que idCarrito no se repita (es decir, un carrito no puede estar en más de una orden).

// Cliente 1:N Direccion
Cliente.hasMany(Direccion, { foreignKey: 'idCliente' });
Direccion.belongsTo(Cliente, { foreignKey: 'idCliente' });

// Cliente 1:N Telefono 
Cliente.hasMany(Telefono, { foreignKey: 'idCliente' });
Telefono.belongsTo(Cliente, { foreignKey: 'idCliente' });

// Categoria 1:N Producto
Categoria.hasMany(Producto, { foreignKey: 'idCategoria', as: 'productos' });
Producto.belongsTo(Categoria, { foreignKey: 'idCategoria', as: 'categoria' });

// Administrador 1:N Producto
Administrador.hasMany(Producto, { foreignKey: 'idAdministrador' });
Producto.belongsTo(Administrador, { foreignKey: 'idAdministrador' });

// OrdenCompra 1:1 Pago
OrdenCompra.hasOne(Pago, { foreignKey: 'idOrdenCompra' });
Pago.belongsTo(OrdenCompra, { foreignKey: 'idOrdenCompra', unique: true });
//unique: true // asegura que no haya 2 pagos con la misma orden

// Carrito N:M Producto
//Carrito: DetalleCarrito
Carrito.hasMany(DetalleCarrito, { foreignKey: 'idCarrito' });
DetalleCarrito.belongsTo(Carrito, { foreignKey: 'idCarrito' });

//Producto: DetalleCarrito
Producto.hasMany(DetalleCarrito, { foreignKey: 'idProducto' });
DetalleCarrito.belongsTo(Producto, { foreignKey: 'idProducto' });
//No usamos belongsToMany() porque necesitmos almacenar más información que solo las FK.

// OrdenCompra N:M Producto
// OrdenCompra: DetalleOrden
OrdenCompra.hasMany(DetalleOrden, { foreignKey: 'idOrdenCompra' });
DetalleOrden.belongsTo(OrdenCompra, { foreignKey: 'idOrdenCompra' });

// Producto: DetalleOrden
Producto.hasMany(DetalleOrden, { foreignKey: 'idProducto' });
DetalleOrden.belongsTo(Producto, { foreignKey: 'idProducto' });

// VarianteProducto 1:N MovimientoStock
VarianteProducto.hasMany(MovimientoStock, { foreignKey: 'idVarianteProducto' });
MovimientoStock.belongsTo(VarianteProducto, { foreignKey: 'idVarianteProducto' });

// Administrador 1:N MovimientoStock
Administrador.hasMany(MovimientoStock, { foreignKey: 'idAdministrador' });
MovimientoStock.belongsTo(Administrador, { foreignKey: 'idAdministrador' });

// OrdenCompra 1:N MovimientoStock
OrdenCompra.hasMany(MovimientoStock, { foreignKey: 'idOrdenCompra' });
MovimientoStock.belongsTo(OrdenCompra, { foreignKey: 'idOrdenCompra' });

// Producto 1:N VarianteProducto 
Producto.hasMany(VarianteProducto, { foreignKey: 'idProducto', as: 'variantes'});
VarianteProducto.belongsTo(Producto, { foreignKey: 'idProducto', as: 'producto' });

// VarianteProducto 1:N MovimientoStock 
VarianteProducto.hasMany(MovimientoStock, { foreignKey: 'idVarianteProducto' });
MovimientoStock.belongsTo(VarianteProducto, { foreignKey: 'idVarianteProducto' });

// Administrador 1:N BlogArticulo
Administrador.hasMany(BlogArticulo, { foreignKey: 'idAdministrador' });
BlogArticulo.belongsTo(Administrador, { foreignKey: 'idAdministrador' });

// Cliente N:M BlogArticulo
// Cliente: LecturaBlogArticulo
Cliente.hasMany(LecturaBlogArticulo, { foreignKey: 'idCliente' });
LecturaBlogArticulo.belongsTo(Cliente, { foreignKey: 'idCliente' });

// BlogArticulo: LecturaBlogArticulo
BlogArticulo.hasMany(LecturaBlogArticulo, { foreignKey: 'idBlog' });
LecturaBlogArticulo.belongsTo(BlogArticulo, { foreignKey: 'idBlog' });

// Cliente 1:N Resena
Cliente.hasMany(Resena, { foreignKey: 'idCliente' });
Resena.belongsTo(Cliente, { foreignKey: 'idCliente' });

// Producto 1:N Resena
Producto.hasMany(Resena, { foreignKey: 'idProducto' });
Resena.belongsTo(Producto, { foreignKey: 'idProducto' });



export {
  sequelize,
  Cliente,
  Carrito,
  OrdenCompra,
  Direccion,  
  Telefono,
  Categoria,
  Producto,
  Administrador,
  Pago,
  DetalleCarrito,
  DetalleOrden,
  MovimientoStock,
  VarianteProducto,
  BlogArticulo,
  LecturaBlogArticulo,
  Resena,
  
  };

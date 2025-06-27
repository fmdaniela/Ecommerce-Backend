import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const OrdenCompra = sequelize.define('OrdenCompra', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  numeroOrden: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fechaOrden: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW 
  },
  subtotal: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  descuento: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  estado: {
    type: DataTypes.ENUM('pendiente', 'confirmada', 'enviada', 'entregada', 'cancelada'),
    allowNull: false
  },
  idCliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'clientes',
      key: 'id'
    }
  },
  idDireccion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'direcciones',
      key: 'id'
    }
  },
  idCarrito: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    references: {
      model: 'carritos',
      key: 'id'
    }
  }
}, {
  tableName: 'ordenesCompras',
  timestamps: false
});

export default OrdenCompra;

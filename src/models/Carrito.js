import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Carrito = sequelize.define('Carrito', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  activo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  idCliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'clientes',
      key: 'id'
    }
  }
}, {
  tableName: 'carritos',
  timestamps: true, // Sequelize agrega createdAt y updatedAt automáticamente
  createdAt: 'fechaCreacion', //personalizamos el nombre de las columnas
  updatedAt: 'fechaModificacion',
});

export default Carrito;


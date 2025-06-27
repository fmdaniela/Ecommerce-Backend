import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Telefono = sequelize.define('Telefono', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    numero: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo: {
      type: DataTypes.ENUM('movil', 'fijo', 'trabajo'),
      allowNull: false
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
    tableName: 'telefonos',
    timestamps: false
  }
);

export default Telefono;


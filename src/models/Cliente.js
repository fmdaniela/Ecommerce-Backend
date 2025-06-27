import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

const Cliente = sequelize.define('Cliente', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true // valida formato de email
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fechaRegistro: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW 
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true // arranca como activo
    }
  }, {
    tableName: 'clientes', 
    timestamps: false      
  }
);

export default Cliente;

// Técnicamente, la relación entre Cliente y Carrito sigue siendo 1:N, porque una misma clienta puede tener varios carritos en el tiempo, aunque solo uno esté activo.

// Es decir:

// ✔️ 1 clienta → varios carritos (por ejemplo: uno en marzo, otro en junio…)

// ❗ Pero sólo uno con activo: true a la vez
// Pero tu regla de negocio es:

// “Cada cliente solo puede tener un carrito activo a la vez”

// Lo controlás agregando el campo activo y haciendo validaciones en backend.
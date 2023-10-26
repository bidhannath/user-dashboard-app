// user.model.ts
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/sequelize';

const User = sequelize.define(
  'User',
  {
    uid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    emailVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    phoneNumber: {
      type: DataTypes.BIGINT,
      allowNull: true,
      unique: true,
    },
    photoURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

export { User };

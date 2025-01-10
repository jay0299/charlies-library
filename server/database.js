import dotenv from 'dotenv';
import { Sequelize, Model, DataTypes } from 'sequelize';

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
  }
);

export class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: { type: DataTypes.STRING(45), unique: true, allowNull: false },
    password: { type: DataTypes.STRING(128), allowNull: false },
    nickname: { type: DataTypes.STRING(128), allowNull: false },
  },
  { sequelize, modelName: 'user', timestamps: false }
);

import Sequelize from 'sequelize';
import { config } from '../config/index.js';
import setupModels from '../db/models';

const options = {
    dialect: 'postgres',
    logging: config.isProd ? false : true,
} 
if (config.isProd) {
    options.dialectOptions = {
        ssl: {
            rejectUnauthorized: false
        }
    }
}

export const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);
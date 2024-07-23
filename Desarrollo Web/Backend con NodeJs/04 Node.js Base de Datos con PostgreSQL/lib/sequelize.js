import {Sequelize} from 'sequelize'
import {config} from '../config/index.js';
import {setupModels} from '../db/models/index.js';

const user = encodeURIComponent(config.dbUser);
const pass = encodeURIComponent(config.dbPass); 

const URI = `postgres://${user}:${pass}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

export const sequelize = new Sequelize(URI, {
    dialect:'postgres'
})

setupModels(sequelize);
sequelize.sync()
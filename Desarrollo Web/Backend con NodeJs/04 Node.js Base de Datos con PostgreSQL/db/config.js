import {config} from '../config/index.js';

const user = encodeURIComponent(config.dbUser);
const pass = encodeURIComponent(config.dbPass); 

const URI = `postgres://${user}:${pass}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

export default {
    "development": {
        "url": URI, 
        "dialect": "postgres"
    },
    "test": {
        "url": URI, 
        "dialect": "postgres"
    },
    "production": {
        "url": URI, 
        "dialect": "postgres"
    }
}

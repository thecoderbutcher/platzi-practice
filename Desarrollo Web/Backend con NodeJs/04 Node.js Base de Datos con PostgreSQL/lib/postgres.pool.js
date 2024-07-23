import pg from 'pg';
import {config} from '../config/index.js';

const {Pool} = pg;

const user = encodeURIComponent(config.dbUser);
const pass = encodeURIComponent(config.dbPass); 

const URI = `postgres://${user}:${pass}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

export const pool = new Pool({connectionString: URI});
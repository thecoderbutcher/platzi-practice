import express from 'express';
import cors from 'cors'; 
import routerApi from './routes/index.js';

import { logErrors, errorHandler, boomErrorHandler } from './middlewares/error.handler.js';

const app = express();
const port = process.env.PORT;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('no permitido'));
        }
    }
}
app.use(cors(options));

app.get('/', (req, res) => {
    res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
    res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
    console.log('Mi port ' +  port);
});
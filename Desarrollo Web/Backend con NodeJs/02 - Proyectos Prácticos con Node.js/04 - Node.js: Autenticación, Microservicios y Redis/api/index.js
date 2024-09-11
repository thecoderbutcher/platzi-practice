import express from 'express';
import {api} from '../config.js'; 
import {router} from './components/users/network.js';

const app = express();

//Router
app.use('/api/user', router);

app.listen(api.port, () => {
    console.log(`Server running on port ${api.port}`);
})
import express from 'express';

const employeeRouter = express.Router();

employeeRouter.get('/', (req, res) => {res.send('employee route')});

employeeRouter.get('/:id', (req, res) => {res.send(`employee route ${id}`)});

employeeRouter.post('/', (req, res) => {res.send('employee route')});

export default employeeRouter;
import express from 'express';

import productsRouter from './products.router.js';
import categoriesRouter from './categories.router.js';
import orderRouter from './orders.router.js'; 
import userRouter from './users.router.js'

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', userRouter);
  router.use('/orders', orderRouter);
}

export default routerApi;

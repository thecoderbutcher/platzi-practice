import express from 'express';

const orderRouter = express.Router();

orderRouter.get('/', (req, res) => {
  res.json([]);
});

export default orderRouter;
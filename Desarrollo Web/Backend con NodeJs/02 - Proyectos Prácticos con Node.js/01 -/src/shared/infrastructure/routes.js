import express from 'express';
import { employeeRouter } from "../../employee/index.js";

const router = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  
  router.use('/employees', employeeRouter);
}

export default router;
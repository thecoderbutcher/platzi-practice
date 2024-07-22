const express =  require('express');
const ProductService = require('../services/product.service');
const router = express.Router();
const products = [];

const service = new ProductService();

router.get('/', (req, res) => {
  const product = service.find();
  res.json(product);
})

router.get('/:id', (req, res) => {
  const {id} = req.params;
  const product = service.findOne(id)
  if(!product){
    res.send({message: 'Product not found'})
  }else{
    res.json({product})
  }
})

router.post('/', (req, res) => {
  const body = req.body;
  service.create(body.name, body.price, body.image)

  res.json({
    message: 'product created',
    data: body
  });

})

router.patch('/:id', (req, res) => {
  const {id} = req.params
  const body = req.body
  service.update(id, body);
  res.json({
    message: 'update',
    data: body,
    id
  })
})

router.delete('/:id', (req, res) => {
  const {id} = req.params

  res.json({
    message: 'delete',
    index: service.delete(id),
    id
  })
})

module.exports = router;
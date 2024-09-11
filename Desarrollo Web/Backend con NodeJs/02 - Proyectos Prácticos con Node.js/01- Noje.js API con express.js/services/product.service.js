const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom')

class ProductService{

  constructor(){
    this.products = [];
    this.size = 100;
    this.generate()
  }

  generate(){
    for(let i=0; i<this.size; i++){
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.url()
      })
    }
  }

  create(data){
    const product = {
      id:faker.string.uuid(),
      ...data
    }
    this.products.push(product);
    return product;
  }

  find(){
    return this.products
  }

  findOne(id){
    return this.products.find(item => item.id === id);
  }

  update(id, changes){
    const index = this.products.findIndex(item => item.id === id)
    const product = this.products[index];
    if(index === -1) throw boom.notFound('Product not found');

    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index];
  }

  delete(id){
    const index = this.products.findIndex(item => item.id === id)
    this.products.splice(index,1)
  }
}

module.exports = ProductService;
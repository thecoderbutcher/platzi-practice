import boom from '@hapi/boom';
import {sequelize} from '../lib/sequelize.js';

export class CategoryService{
    constructor(){
        this.product = sequelize.models.Product;
    }

    async create(data){
        const product = await this.product.create(data);
        return product;
    }

    async find(){
        const products = await this.product.findAll();
        return products;
    }

    async findOne(id){
        const product = await this.product.findByPk(id);
        if(!product) throw boom.notFound('Product not found');
        return product;
    }

    async update(id, changes){
        
    }
}
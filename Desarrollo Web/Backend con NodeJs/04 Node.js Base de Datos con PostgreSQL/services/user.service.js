/* import getConnection from '../lib/postgres.js'; */
import boom from '@hapi/boom';
import {sequelize} from '../lib/sequelize.js'

class UserService {

  constructor() {
    this.User = sequelize.models.User;
  }

  async create(data) {
    const user = this.User.create(data);
    return user;
  }

  async find() {
    /* const client = await getConnection()
    const rta = await client.query('SELECT * FROM tasks') */
    const users = await this.User.findAll();
    return users;
  }

  async findOne(id) {
    const user = await this.User.findByPk(id);
    if(!user) throw boom.notFound('User not found')
    return user;
  }

  async update(id, changes) {
    const user = this.findOne(id);
    const result = await user.update(changes);
    return result;
  }

  async delete(id) {
    const user = this.findOne(id);
    user.destroy()
    return { id };
  }
}

export default UserService;
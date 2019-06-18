

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const Person = Sequelize.import('../schema/person');
// 自动创建表
Person.sync({force: false});

class PersonModel {
    /**
     * 创建人物模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createPerson(data) {
        return await Person.create({
            id:data.id,
            name: data.name, // 姓名
            age: data.age, // 年龄
            createdAt:data.createdAt,
            updatedAt:data.updatedAt,
           
        })
    }

    /**
     * 查询取人物详情数据
     * @param id  人物ID
     * @returns {Promise<Model>}
     */
    static async getPersonDetail(id) {
        return await Person.findOne({
            where: {
                id,
            },
        })
    }


     /**
     * 删除人物详情数据
     * @param id  人物ID
     * @returns {Promise<Model>}
     */
    static async deletePerson(id) {
        return await Person.destroy({
            where: {
              id: id
            },
            //truncate: true /* 这将忽 where 并用 truncate table 替代  */
          });
    }

      /**
     * 修改人物详情数据
     * @param id  人物ID
     * @returns {Promise<Model>}
     */
    static async updatePerson(data) {
        return await Person.update(

            {   id:data.id,
                name: data.name, // 姓名
                age: data.age, // 年龄
                //createdAt:data.createdAt,
                //updatedAt:data.updatedAt
            });
       
    }
}

module.exports = PersonModel


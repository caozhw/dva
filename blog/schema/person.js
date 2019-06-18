/**
├── schema
    └── article.js
*/
const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('person', {
        // ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 姓名
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name',
        },
        // 年龄
        age: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'age'
        },
        // // 创建时间
        // createdAt: {
        //     type: DataTypes.DATE,
        //     get() {
        //         return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
        //     }
        // },
        // // 更新时间
        // updatedAt: {
        //     type: DataTypes.DATE,
        //     get() {
        //         return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
        //     }  
        // }
    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true
    })

}

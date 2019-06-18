const PersonModel = require('../modules/person')

class personController {
    /**
     * 创建人物
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async create(ctx) {
        // 接收客服端
        let req = ctx.request.body;
        if (req.name // 姓名
            && req.age 
        ) {
            try {
                // 创建文章模型
                const ret = await PersonModel.createPerson(req);
                // 把刚刚新建的文章ID查询文章详情，且返回新创建的文章信息
                const data = await PersonModel.getPersonDetail(ret.id);

                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '创建人物成功',
                    data
                }

            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 200,
                    msg: '创建人物失败',
                    data: err
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: '参数不齐全',
            }
        }

    }

    /**
     * 获取人物详情
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async detail(ctx) {
        let id = ctx.params.id;

        if (id) {
            try {
                // 查询文章详情模型
                let data = await PersonModel.getPersonDetail(id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '查询成功',
                    data
                }

            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    msg: '查询失败',
                    data
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: 'ID必须传'
            }
        }
    }


     /**
     * 删除人物详情
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async delete(ctx) {
        let id = ctx.params.id;

        if (id) {
            try {
                // 查询文章详情模型
                let data = await PersonModel.deletePerson(id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '删除成功',
                    data
                }

            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    msg: '删除失败',
                    data
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: 'ID必须传'
            }
        }
    }

    /**
     * 修改人物
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async update(ctx) {
        // 接收客服端
        let req = ctx.request.body;
        if (req.name // 姓名
            && req.age 
        ) {
            try {
                // 创建文章模型
                const ret = await PersonModel.updatePerson(req);
                // 把刚刚新建的文章ID查询文章详情，且返回新创建的文章信息
                const data = await PersonModel.getPersonDetail(ret.id);

                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '修改人物成功',
                    data
                }

            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 200,
                    msg: '修改人物失败',
                    data: err
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: '参数不齐全',
            }
        }

    }



}

module.exports = personController

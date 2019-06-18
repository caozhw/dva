// const router = require('koa-router')()

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })

// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

// module.exports = router
// 


const Router = require('koa-router')
const PersonController = require('../controllers/person')

const router = new Router({
    prefix: '/api/v1'
})

/**
 * 人物接口
 */
// 创建人物接口（路由）
router.post('/person', PersonController.create);
// 获取人物详情接口（路由）
router.get('/person/:id', PersonController.detail);

// 删除人物详情接口（路由）
router.get('/person/delete/:id', PersonController.delete);

// 删除人物详情接口（路由）
router.get('/person/update', PersonController.update);

module.exports = router


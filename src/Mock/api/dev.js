var Mock = require('mockjs')
import res from '../data/api/routes.json'

Mock.mock('http://localhost/DynamicRoutes', 'get', res);
// 启动模拟数据拦截
Mock.setup({
    timeout: '200-600'
});
// console.log(Mock);
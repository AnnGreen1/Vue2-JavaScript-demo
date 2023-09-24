var Mock = require('mockjs')
import resultDynamicRoutes from '@/Mock/data/api/routes.json'
import resultRsponseResult from '@/Mock/data/api/ResponseResult.json'

Mock.mock('http://localhost/DynamicRoutes', 'get', resultDynamicRoutes);

Mock.mock('http://localhost/RsponseResult', 'post', resultRsponseResult);

Mock.mock('http://localhost/RequestRsponse', 'post', (request) => {
    console.log(request);
    console.log(JSON.parse(request.body));
    return resultRsponseResult
});

// 启动模拟数据拦截
Mock.setup({
    timeout: '200-600'
});
// console.log(Mock);
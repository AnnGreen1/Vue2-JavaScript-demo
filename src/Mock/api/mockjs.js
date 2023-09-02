var Mock = require('mockjs')

Mock.mock('http://localhost:3000/api/user', 'get', {
    code: 200,
    data: {
        id: '@id',
        name: '@name',
        age: '@integer(20, 50)',
    },
});

// 启动模拟数据拦截
Mock.setup({
    timeout: '200-600'
});
// console.log(Mock);
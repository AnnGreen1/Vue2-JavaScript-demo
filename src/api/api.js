import request from "@/utils/request";

let BASE_URL = 'https://api.uomg.com'
// 随机土味情话
export const randqinghua = data => {
    data = data || {};
    return request({
        url: `${BASE_URL}/api/rand.qinghua`,
        method: "post",
        data
    })
};

export const env_development_randqinghua = data => {
    data = data || {};
    return request({
        url: process.env.VUE_APP_BASE_URL + '/api/rand.qinghua',
        method: "post",
        data
    })
};

/**
 * ...
 * ...
 */
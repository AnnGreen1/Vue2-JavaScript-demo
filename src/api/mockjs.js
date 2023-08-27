import request from "@/utils/request";

// let BASE_URL = 'https://api.uomg.com'

export const mockjsDemo = data => {
    data = data || {};
    return request({
        url: `http://localhost:3000/api/user`,
        method: "get",
        data
    })
};
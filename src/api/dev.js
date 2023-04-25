import request from "@/utils/request";

/**
 * @description: 一个普通的请求，不过会延迟10s响应（至少要花费十秒时间）
 */
export const sleeptens = () => {
    return request({
        url: `http://localhost/allphpcode/test/sleep.php`,
        method: "post",
        timeout:50000
    })
};
const BASEURL = "https://www.easy-mock.com/mock/5f2e0849f8b3981de71e1188/vue-koa--webapp/"
const LOCALURL = "http://localhost:3000/"
const URL = {
    getShoppingMallInfo:BASEURL+'index',
    getGoodsInfo:BASEURL+'getGoodsInfo',
    registerUser:LOCALURL+'user/register',   //用户注册接口
    login:LOCALURL+'user/login',   //用户注册接口
}

module.exports = URL
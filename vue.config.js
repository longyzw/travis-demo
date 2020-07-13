// 判断当前环境
const envType = process.env.NODE_ENV
module.exports = {
    publicPath: envType === 'production' ? '/travis-demo' : '/'
}
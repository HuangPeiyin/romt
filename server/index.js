// node后端服务器
const bodyParser = require('body-parser')
const express = require('express')
const userApi = require('./api/userApi')
const drugApi = require('./api/drugApi')
const bookApi = require('./api/bookApi')
const sickApi = require('./api/sickApi')
const treatApi = require('./api/treatApi')
const healthApi = require('./api/healthApi')

let app = express()
// 采用设置所有均可访问的方法解决跨域问题
app.all("*", function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if(req.method.toLowerCase() == 'options'){
        res.send(200)
    }else{
        next();
    }
})
app.use(bodyParser.json()) // 以json格式返回出去
app.use(bodyParser.urlencoded({
    extended: false
}))

// 后端api路由
app.use('/api/user', userApi)
app.use('/api/drug', drugApi)
app.use('/api/book', bookApi)
app.use('/api/sick', sickApi)
app.use('/api/treat', treatApi)
app.use('/api/health', healthApi)

//启动监听
app.listen(8000, () => {
    console.log('success!! port:8000');
})
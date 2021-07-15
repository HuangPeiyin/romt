const DBHelper = require('../DBHelper')
const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const $sql = require('../sqlMap')
// 连接数据库
const conn = mysql.createConnection(DBHelper.mysql)
conn.connect()
const jsonWrite = function(res, ret){
    if (typeof ret == 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        })
    }else{
        res.json(
            ret
        )
    }
}

// 用户注册， /addUser是定义的接口
router.post('/addUser', (req, res) => {
    let sqlStr = $sql.user.add
    let params = req.body
    console.log('添加', params);
    conn.query(sqlStr, [params.u_name, params.u_password, params.u_sex, params.u_picture, params.u_birth, params.u_phone, params.u_email], (err, result) => {
        if(err){
            res.json(err)
        }
        if(result){
            jsonWrite(res, result)
        }
    })
})

// 用户修改信息
router.post('/updateUser',(req, res)=>{
    let sqlStr = $sql.user.update
    let params = req.body
    console.log('修改', params);
    conn.query(sqlStr, [params.u_name, params.u_password, params.u_sex, params.u_picture, params.u_birth, params.u_phone, params.u_email,params.u_id], (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

// 查找用户ID
router.post('/selectIDUser',(req, res)=>{
    let sqlStr = $sql.user.selectID
    let params = req.body
    console.log(params);
    conn.query(sqlStr, [params.u_id], (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

// 查找用户Password
router.post('/selectPwUser',(req, res)=>{
    let sqlStr = $sql.user.selectPassword
    let params = req.body
    console.log(params);
    conn.query(sqlStr, [params.u_phone, params.u_password], (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

router.get('/selectAllUser',(req, res)=>{
    let sqlStr = $sql.user.selectAll
    conn.query(sqlStr, (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

module.exports = router
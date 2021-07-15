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

// 添加个人健康信息
router.post('/addHealth', (req, res) => {
    let sqlStr = $sql.health.add
    let params = req.body
    console.log('添加', params);
    conn.query(sqlStr, [
        params.u_id,
        params.h_weight,
        params.h_height,
        params.h_temperature,
        params.h_blood_pressure,
        params.h_blood_glucose,
        params.h_blood_fat,
        params.h_heart_rate,
        params.h_sleep,
        params.identity,
    ], (err, result) => {
        if(err){
            res.json(err)
        }
        if(result){
            jsonWrite(res, result)
        }
    })
})

// 修改信息
router.post('/updateHealth',(req, res)=>{
    let sqlStr = $sql.health.update
    let params = req.body
    console.log('修改', params);
    conn.query(sqlStr, [
        params.h_weight, 
        params.h_height, 
        params.h_temperature, 
        params.h_blood_pressure, 
        params.h_blood_glucose, 
        params.h_blood_fat,
        params.h_heart_rate,
        params.h_sleep,
        params.u_id,
        params.identity,
    ], (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

// 删除信息
router.post('/deleteHealth',(req, res)=>{
    let sqlStr = $sql.health.delete
    let params = req.body
    console.log(params);
    conn.query(sqlStr, [params.u_id, params.identity], (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

// 查找ID
router.post('/selectIDHealth',(req, res)=>{
    let sqlStr = $sql.health.selectID
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

router.get('/selectAllHealth',(req, res)=>{
    let sqlStr = $sql.health.selectAll
    conn.query(sqlStr, (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

module.exports = router
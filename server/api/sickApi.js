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

// 添加疾病信息
router.post('/addSick',(req, res)=>{
    let sqlStr = $sql.sickness.add
    let params = req.body
    conn.query(sqlStr, [params.sick_name, params.sick_type, params.sick_symptom], (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

// 更新疾病信息
router.post('/updateSick',(req, res)=>{
    let sqlStr = $sql.sickness.update
    let params = req.body
    conn.query(sqlStr, [params.sick_name, params.sick_type, params.sick_symptom, params.sick_id], (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

// 删除特定疾病
router.post('/deleteSick',(req, res)=>{
    let sqlStr = $sql.sickness.delete
    let params = req.body
    conn.query(sqlStr, [params.sick_id], (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

// 查看所有药品
router.get('/selectAllSick',(req, res)=>{
    let sqlStr = $sql.sickness.selectAll
    conn.query(sqlStr, (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

// 查找某个类型的疾病
router.get('/selectTypeSick',(req, res)=>{
    let sqlStr = $sql.sickness.selectType
    let params = req.body
    conn.query(sqlStr, [params.sick_type], (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

module.exports = router
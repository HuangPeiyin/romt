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

// 添加药品的治疗等级
router.post('/addTreat',(req, res)=>{
    let sqlStr = $sql.treat.add
    let params = req.body
    conn.query(sqlStr, [params.sick_id, params.drug_id, params.treat_level], (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

// 更新治疗信息
router.post('/updateTreat',(req, res)=>{
    let sqlStr = $sql.treat.update
    let params = req.body
    conn.query(sqlStr, [params.sick_id, params.drug_id, params.treat_level, params.treat_id], (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

// 删除治疗信息
router.post('/deleteTreat',(req, res)=>{
    let sqlStr = $sql.treat.delete
    let params = req.body
    conn.query(sqlStr, [params.treat_id], (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

// 查看所有治疗信息
router.get('/selectAllTreat',(req, res)=>{
    let sqlStr = $sql.treat.selectAll
    conn.query(sqlStr, (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

module.exports = router
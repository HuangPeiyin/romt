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

// 添加药品信息
router.post('/addDrug',(req, res)=>{
    let sqlStr = $sql.drug.add
    let params = req.body
    conn.query(sqlStr, [params.drug_name, params.drug_picture, params.drug_type, params.drug_effect, params.drug_dose], (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

// 更新药品信息
router.post('/updateDrug',(req, res)=>{
    let sqlStr = $sql.drug.update
    let params = req.body
    conn.query(sqlStr, [params.drug_name, params.drug_picture, params.drug_type, params.drug_effect, params.drug_dose, params.drug_id], (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

// 删除药品
router.post('/deleteDrug',(req, res)=>{
    let sqlStr = $sql.drug.delete
    let params = req.body
    conn.query(sqlStr, [params.drug_id], (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

// 查看所有药品
router.get('/selectAllDrug',(req, res)=>{
    let sqlStr = $sql.drug.selectAll
    conn.query(sqlStr, (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

// 查找某个类型的药品
router.get('/selectDrug',(req, res)=>{
    let sqlStr = $sql.drug.selectType
    let params = req.body
    conn.query(sqlStr, [params.drug_type], (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

module.exports = router
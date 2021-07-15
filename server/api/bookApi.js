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

// 添加书籍
router.post('/addBook',(req, res)=>{
    let sqlStr = $sql.book.add
    let params = req.body
    conn.query(sqlStr, [params.book_name, params.book_author, params.book_press, params.book_place, params.book_ISBN, params.book_publication_time, params.book_picture], (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

// 更新书籍信息
router.post('/updateBook',(req, res)=>{
    let sqlStr = $sql.book.update
    let params = req.body
    conn.query(sqlStr, [params.book_name, params.book_author, params.book_press, params.book_place, params.book_ISBN, params.book_publication_time, params.book_picture, params.book_id], (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

// 删除书籍信息
router.post('/deleteBook',(req, res)=>{
    let sqlStr = $sql.book.delete
    let params = req.body
    conn.query(sqlStr, [params.book_id], (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

// 查看所有书籍
router.get('/selectAllBook',(req, res)=>{
    let sqlStr = $sql.book.selectAll
    conn.query(sqlStr, (err, result) => {
        if(err){
            res.json(err)
        }else{
            jsonWrite(res, result)
        }
    })
})

module.exports = router
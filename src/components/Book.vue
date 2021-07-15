<template>
    <el-table :data="tableData" >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="书籍编号">
              <span>{{props.row.book_id}}</span>
            </el-form-item>
            <el-form-item label="书名">
              <span>{{props.row.book_name}}</span>
            </el-form-item>
            <el-form-item label="作者">
              <span>{{props.row.book_author}}</span>
            </el-form-item>
            <el-form-item label="出版社">
              <span>{{props.row.book_press}}</span>
            </el-form-item>
            <el-form-item label="出版地">
              <span>{{props.row.book_place}}</span>
            </el-form-item>
            <el-form-item label="ISBN">
              <span>{{props.row.book_ISBN}}</span>
            </el-form-item>
            <el-form-item label="出版时间">
              <span>{{props.row.book_publication_time}}</span>
            </el-form-item>
            <el-form-item label="介绍">
              <span>{{props.row.book_presentation}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="书籍ID" prop="book_id"></el-table-column>
      <el-table-column label="书名" prop="book_name"></el-table-column>
      <el-table-column label="简介" prop="book_presentation" :show-overflow-tooltip="true"></el-table-column>
    </el-table>
</template>
<script>
export default {
    data(){
      return{
        tableData: [],
        type:[],
      }
    },
    mounted(){
      this.fetchdata()
    },
    methods:{
      fetchdata(){
        this.$axios.get('http://localhost:8000/api/book/selectAllBook').then(res => {
          this.tableData = res.data
        })
      },
    }
}
</script>
<style>
  .el-table{
    widows: 80%;
    border: 1px dotted black;
    border-radius: 20px;
    margin: 10px;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: auto;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 80%;
  }
</style>
<template>
    <el-table :data="tableData" >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="疾病ID">
              <span>{{props.row.sick_id}}</span>
            </el-form-item>
            <el-form-item label="名称">
              <span>{{props.row.sick_name}}</span>
            </el-form-item>
            <el-form-item label="别名">
              <span>{{props.row.sick_another_name}}</span>
            </el-form-item>
            <el-form-item label="类型">
              <span>{{props.row.sick_type}}</span>
            </el-form-item>
            <el-form-item label="症状">
              <span>{{props.row.sick_symptom}}</span>
            </el-form-item>
            <el-form-item label="科室">
              <span>{{props.row.sick_department}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="疾病ID" prop="sick_id"></el-table-column>
      <el-table-column label="疾病名称" prop="sick_name"></el-table-column>
      <el-table-column label="疾病类型" prop="sick_type" :filters="type" :filter-method="filterType"></el-table-column>
      <el-table-column label="疾病科室" prop="sick_department" :filters="department" :filter-method="filterDepartment"></el-table-column>
    </el-table>
</template>
<script>
export default {
    data(){
      return{
        tableData: [],
        type:[{text: '其他', value: null}],
        department: [],
      }
    },
    mounted(){
      this.fetchdata()
    },
    methods:{
      fetchdata(){
        this.$axios.get('http://localhost:8000/api/sick/selectAllSick').then(res => {
          this.tableData = res.data
          res.data.forEach(element => {
            this.type.push({text: element['sick_type'], value: element['sick_type']})
            if(this.isInArray(this.type, element['sick_type'])){
              this.type.pop()
            }
          });
          res.data.forEach(element => {
            this.department.push({text: element['sick_department'], value: element['sick_department']})
            if(this.isInArray(this.department, element['sick_department'])){
              this.department.pop()
            }
          });
        })
      },
      isInArray(arr, value){
        for(var i = 0; i< arr.length-1; i++){
          if(value === arr[i]['value']){
            return true
          }
        }
      },
      filterType(value, row){
        return row.sick_type === value;
      },
      filterDepartment(value, row){
          return row.sick_department === value;
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
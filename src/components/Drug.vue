<template>
    <el-table :data="tableData" >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="药品编号">
              <span>{{props.row.drug_id}}</span>
            </el-form-item>
            <el-form-item label="药品名称">
              <span>{{props.row.drug_name}}</span>
            </el-form-item>
            <el-form-item label="药剂类型">
              <span>{{props.row.drug_type}}</span>
            </el-form-item>
            <el-form-item label="功效主治">
              <span>{{props.row.drug_effect}}</span>
            </el-form-item>
            <el-form-item label="药品剂量">
              <span>{{props.row.drug_dose}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="药品ID" prop="drug_id"></el-table-column>
      <el-table-column label="药品名称" prop="drug_name"></el-table-column>
      <el-table-column label="药品类型" prop="drug_type" :filters="type" :filter-method="filterType"></el-table-column>
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
        this.$axios.get('http://localhost:8000/api/drug/selectAllDrug').then(res => {
          this.tableData = res.data
          res.data.forEach(element => {
            let values = new Array()
            values = {text: element['drug_type'], value: element['drug_type']}
            this.type.push(values)
            if(this.isInArray(this.type, element['drug_type'])){
              this.type.pop()
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
        return row.drug_type === value;
      }
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
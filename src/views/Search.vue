<template>
    <el-main id="search">
      <el-tag type="success" id="drug" class="cell" @click="toDrug">查药品</el-tag>
      <el-tag type="info" id="dise" class="cell" @click="toSick"> 查疾病 </el-tag>
      <el-tag id="book" class="cell" @click="toBook"> 查书籍 </el-tag>
    </el-main>
</template>
<script>
export default {
  methods: {
    toDrug(){
        this.$router.push({name: 'Drug'})
    },
    toSick(){
      this.$router.push({name: 'Sick'})
    },
    toBook(){
      this.$router.push({name: 'Book'})
    }
  },
};
</script>
<style scoped>
.cell {
  width: 120px;
  height: 80px;
  border-radius: 2em;
  border: 1px solid purple;
  margin-top: 10px;
  margin-right: 100px;
  padding-top: 26px;
  font-size: 18px;
  box-shadow: 20px -10px 10px rgb(136, 135, 135);
}
a {
  text-decoration: none;
  color: #58b34f;
}
a.router-link-exact-active {
  color: #b049ca;
}
/* button{
    border: 0px ;
} */
</style>
<template>
  <el-main class="main">
    <h1 style="margin-top: 0px;">社会资讯</h1>
      <span :display="show">{{msg}}</span>
      <ul v-for="(data, index) in list" :key="index">
        <el-divider style="color: red;"></el-divider>
        <li>
          <h4><a :href="data.href" >{{data.title}}</a></h4>
          <p>{{data.content}}</p>
        </li>
      </ul>
  </el-main>
</template>
<script>
export default {
  data() {
    return {
      msg: '',
      show: false,
      list: [],
    };
  },
  mounted(){
    this.informations()
  },
  methods:{
    informations(){
      this.$axios.get('/static').then(res => {
        let htmlDome = $(res.data)
        let ul = htmlDome.find(".mainL ul")
        let lis = ul.find('li')
          for(let i = 0; i < lis.length; i++){
            let t = $(lis[i]).find('a')['0'].innerText
            let h = $(lis[i]).find('a')['0'].href
            let c = $(lis[i]).find('p')['0'].innerText
            let data = {title: t, href: h, content: c}
            this.list.push(data)
          }
        this.isShow()
      }).catch(() => {
        this.isShow()
      })
    },
    isShow(){
      if(this.list.length == 0){
        this.msg = '网络不佳，请重新刷新...'
        this.show = true
      }
    }
  },
  watch:{
    show(){
      if(this.list.length == 0){
        this.msg = '网络不佳，请重新刷新...'
        this.show = true
      }else if(this.list.length != 0){
        this.msg = ''
        this.show = false
      }
    }
  }
};
</script>
<style scoped>
  .el-divider{
    background-color: azure;
  }
  a{
    text-decoration: none;
    color: rgb(22, 111, 212);
  }
  li{
    display: inline-block;
  }
</style>

<template style="background-color:#d4ced6">
  <el-container id="app">
    <el-header style="height:50px;padding-top:10px;">
      <div class="iconTag" style="float: left;">
        <h2 class="platform">依医系统</h2>
      </div>
      <div class="userTag">
        <span>用户ID：{{userID}}</span>
        <el-divider direction="vertical" class="spanview"></el-divider>
        <span>{{userName}}</span>
        <el-divider direction="vertical" class="spanview"></el-divider>
        <router-link to="/Login" class="el-icon-chat-line-round">退出</router-link>
      </div>
    </el-header>
    <el-container>
      <el-aside id="nav" style="width: 180px">
        <el-menu background-color="#d4ced6">
          <el-menu-item>
            <router-link :to="{path: '/Home', query:{id: userID, name: userName}}" slot="title">首页</router-link>
          </el-menu-item>
          <el-menu-item>
            <router-link :to="{path: '/Search', query:{id: userID, name: userName}}">账本查询</router-link>
          </el-menu-item>
          <el-menu-item>
            <router-link :to="{path: '/Steward', query:{id: userID, name: userName}}">身体管家</router-link>
          </el-menu-item>
          <el-menu-item>
            <router-link :to="{path:'/About', query:{id: userID, name: userName}}" >我的信息</router-link>
          </el-menu-item>
        </el-menu>
        <el-image :src="require('./assets/logo1-1.png')"></el-image>
      </el-aside>
      <router-view />
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "app",
  data(){
    return{
      userID: this.$route.query.id,
      userName: this.$route.query.name
    }
  },
  beforeCreate: function () {
    document.querySelector("body").setAttribute('style','background:#d4ced6')
  },
  beforeDestroy: function (){
    document.querySelector("body").removeAttribute('style')
  }
};
</script>
<style scoped>
#body{
  background-color: burlywood;
  height: 100%;
}
#app > #main{
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f9e8fa;
  height: 100%;
}
.el-image{
  margin-top: 50px;
}
.platform{
  float: left;
  margin-left: 10px;
  margin-top: 0;
  color: #8824a7;
}
.userTag{
  float: right;
  font-size: 0.8em;
}
#nav a{
  font-size: 18px;
}
a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
}
a.router-link-exact-active {
  color: #c829d6;
}
.el-divider{
  background-color: rgb(198, 100, 228);
}
</style>

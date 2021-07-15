<template>
  <div id="login">
    <span class="spanview"><router-link to="/Login">登录</router-link></span>
    <el-divider direction="vertical" class="spanview"></el-divider>
    <span class="spanview"><router-link to="/Register">注册</router-link></span>
    <el-divider></el-divider>
    <el-form label-width="80px">
      <el-form-item label="账号">
        <el-input
          type="text"
          v-model="phone"
          placeholder="输入手机号码"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="password"
          placeholder="输入密码"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="selectID">登录</el-button>
        <el-button >取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
        phone: "",
        password: "",
    };
  },
  methods: {
    selectID() {
      let phone = this.phone.toString();
      let password = this.password.toString();
      if (phone.length != 0 && password.length != 0) {
        this.$axios
          .post("http://localhost:8000/api/user/selectPwUser", {
            u_phone: phone,
            u_password: password,
          })
          .then((res) => {
            if (res.data["0"]["u_id"] != phone && res.data["0"]["u_name"] != password) {
              this.$message({
                message: "登录成功！",
                type: "success",
              });
              this.$router.push({
                path: "/App",
                query: {
                  id: res.data["0"]["u_id"],
                  name: res.data["0"]["u_name"],
                }
              });
            }
          })
          .catch((err) => {
            this.$message.error("账户或密码输入错误！");
            console.log(err);
          });
      } else {
        this.$message.error("请输入账号或密码！");
      }
    },
  }
}
</script>
<style scoped>
.el-form-item {
  width: 300px;
  margin: auto;
  margin-bottom: 22px;
}
a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
}
a.router-link-exact-active {
  color: #b049ca;
}
.spanview {
  position: relative;
  top: 10px;
}
</style>
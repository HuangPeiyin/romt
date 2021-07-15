<template>
  <div id="register">
    <span class="spanview"><router-link to="/Login">登录</router-link></span>
    <el-divider direction="vertical" class="spanview"></el-divider>
    <span class="spanview"><router-link to="/Register">注册</router-link></span>
    <el-divider></el-divider>
    <el-form label-width="80px" :rules="rules" :model="ruleForm" ref="ruleForm">
      <!-- <el-form-item label="头像">
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item> -->
      <el-form-item label="昵称" prop="name">
        <el-input type="text" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="ruleForm.sex">
          <el-radio label="男">男</el-radio>
          <el-radio label="女">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="生日">
        <el-date-picker
          v-model="ruleForm.birth"
          type="date"
          placeholder="选择日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input type="text" v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input type="email" v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addUser('ruleForm')">注册</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        imageUrl: "",
        picture: "",
        name: "",
        id: "",
        password: "",
        sex: "",
        birth: "",
        phone: "",
        email: "",
      },
      rules: {
        name: [{ required: true, message: "请输入昵称", trigger: "blur" }],
        password: [
          { required: true, message: "请设置密码", trigger: "blur" },
          {
            type: "string",
            min: 9,
            message: "密码长度必须大于等于9",
            trigger: "change",
          },
        ],
        phone: [
          { required: true, message: "输入手机号码", trigger: "blur" },
          {
            type: "string",
            len: 11,
            message: "手机号码长度不对",
            trigger: "change",
          },
        ],
        email: [
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },
  methods: {
    addUser(formM) {
      this.$refs[formM].validate((valid) => {
        if (valid) {
          this.$axios.post(
              "http://localhost:8000/api/user/addUser",
              {
                u_name: this.ruleForm.name,
                u_password: this.ruleForm.password,
                u_sex: this.ruleForm.sex,
                u_picture: this.ruleForm.picture,
                u_birth: this.ruleForm.birth,
                u_phone: this.ruleForm.phone,
                u_email: this.ruleForm.email,
              }).then((res) => {
                if(res.data.affectedRows == 1){
                  this.$message({
                    message: "注册成功！",
                    type: "success",
                  });
                  this.$router.push({name: 'Login'})
                }else{
                  this.$message.error("注册失败！");
                }
              }).catch((err) => {
                this.$message.error("注册失败！");
                console.log(err);
              });
          }else{
            this.$message.error("信息输入不合法！");
          }
        });
    },
  },
};
</script>
<style scoped>
.avatar-uploader .el-upload {
  border: 2px solid #b049ca;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 20px;
  color: #8c939d;
  width: 70px;
  height: 70px;
  line-height: 70px;
  text-align: center;
}
.avatar {
  width: 70px;
  height: 70px;
  display: block;
}
p {
  font-size: 1px;
  margin: 0px;
  color: red;
}
.el-form {
  margin-top: 30px;
}
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
<template>
  <section id="content">
    <div class="login_box">
      <input type="text" class="username" placeholder="用户名">
      <input type="text" class="phoneNumber" placeholder="手机号">
      <input type="text" class="email" placeholder="邮箱">
      <input type="text" class="password" placeholder="密码">
      <input type="text" class="repassword" placeholder="确认密码">
      <button class="login_btn">注册</button>
    </div>
    <div class="to_register_bar">
      <router-link to="login" class="to_register">已有账号</router-link>
      <a href class="find_password">找回密码</a>
    </div>
  </section>
</template>

<script>
export default {
  name:'Register'
};
</script>

<style lang="css" scoped>
.login_box {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}
.login_box input {
  box-sizing: border-box;
  /* width: 100%; */

  height: 55px;
  margin: 5px 15px;
  text-indent: 20px;
  border: none;
  border-bottom: 1px solid rgb(230, 230, 230);
}
.login_box .login_btn {
  box-sizing: border-box;
  width: 60%;
  height: 40px;
  color: #fff;
  font-size: 20px;
  font-family: "楷体";
  background-color: #e54847;
  border-radius: 5px;
  border: none;
  margin: 20px auto;
}
.to_register_bar {
  display: flex;
  margin: 0px 10px;
  font-size: 12px;
  justify-content: space-between;
}
.to_register_bar a {
  text-decoration: none;
  color: #e54847;
}
</style>
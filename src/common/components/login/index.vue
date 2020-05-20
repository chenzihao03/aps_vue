<template>
  <el-container>
    <div class="wrapper" :class="successClass">
      <div class="container">
        <div class="timg" :class="successClass">
          <h1 class="h1">欢迎</h1>
          <br>
          <div class="times" :class="successClass">{{nowDate}}</div>
        </div>

        <form class="form" v-if="formShow">
          <input type="text" placeholder="用户名" v-model="user" @keydown="addByEnterKey"/>
          <input type="password" placeholder="密码" v-model="password" @keydown="addByEnterKey"/>
          <el-button @click="checkLogin">登录</el-button>
        </form>
      </div>

      <ul class="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        successClass: "",
        nowDate: "",
        formShow: true,
        user: '',
        password: ''
      }
    },
    methods: {
      addByEnterKey(ev) {
        ev.keyCode === 13 && this.checkLogin()
      },
      checkLogin() {
        let that = this;
        that.successClass = "form-success";
        that.formShow = false;
        this.$ajax.get('checkLogin', {params: {logId: that.user, password: that.password}}).then((response) => {
          if (response.data.length > 0) {
            that.$store.commit('SET_TOKEN', true);
            that.$store.commit('GET_USER', that.user);
            that.$router.push('home');
          } else {
            that.$notify.error({
              title: '登陆失败',
              message: '登录用户[' + that.user + ']不存在或密码错误!'
            });
            that.successClass = "";
            that.formShow = true;
          }
        }).catch((response) => {
          that.$notify.error({
            title: '登陆失败',
            message: '连接超时，请检查后台服务！'
          });
          that.successClass = "";
          that.formShow = true;
        })
      },
    },
    beforeCreate() {
      let that = this; // 声明一个变量指向Vue实例this，保证作用域一致
      this.timer = setInterval(() => {
        var hours = new Date().getHours(),
          minutes = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes();
        that.nowDate = hours + ":" + minutes; // 修改数据date
      }, 1000);
    },
    beforeDestroy() {
      if (this.timer) {
        clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
      }
    }
  }
</script>

<style scoped>
  * {
    font-family: 'Microsoft YaHei', Microsoft YaHei;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .el-button {
    height: 45px;
    color: #000;
  }

  .timg {
    box-sizing: border-box;
    width: 282px;
    padding: 60px 5px;
    margin: 10% auto 10%;
    background: hsla(0, 0%, 100%, .25);
    text-align: center;
    position: relative;
    z-index: 900;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center center;
    -webkit-mask-size: 282px 292px;
    -webkit-mask-image: url(../../../assets/img/timg.png);
  }

  .timg.form-success {
    background: hsla(0, 0%, 100%, 0);
  }

  .times {
    font: 300 70px/70px Open Sans, arial, sans-serif;
    margin: 12px 0 20px;
    cursor: pointer;
    color: white;
  }

  .times.form-success {
    background: hsla(0, 0%, 100%, 0);
    display: none;
  }

  .wrapper {
    background-color: #2d3a4b;
    background-size: 100% 100%;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .wrapper.form-success .container h1 {
    -webkit-transform: translateY(85px);
    -ms-transform: translateY(85px);
    transform: translateY(85px);
    font-size: 70px;
  }

  .container {
    max-width: 600px;
    margin: 10% auto;
    height: 400px;
    text-align: center;
  }

  .container h1 {
    font-size: 40px;
    color: white;
    -webkit-transition-duration: 1s;
    transition-duration: 1s;
    font-weight: 200;
  }

  form {
    padding: 20px 0;
    position: relative;
    z-index: 2;
  }

  form input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
    border: 1px solid rgba(255, 255, 255, 0.4);
    background-color: rgba(255, 255, 255, 0.2);
    width: 300px;
    padding: 10px 15px;
    margin: 0 auto 10px auto;
    display: block;
    text-align: center;
    font-size: 18px;
    -webkit-transition-duration: 0.25s;
    transition-duration: 0.25s;
    font-weight: 300;
    border-radius: 30px;
  }

  form input:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }

  form input::-webkit-input-placeholder {
    color: white;
  }

  form input:focus {
    background-color: white;
    width: 300px;
    color: #53e3a6;
  }

  form button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
    background-color: white;
    border: 0;
    padding: 10px 15px;
    color: black;
    border-radius: 30px;
    width: 300px;
    cursor: pointer;
    font-size: 18px;
    -webkit-transition-duration: 0.25s;
    transition-duration: 0.25s;
  }

  form button:after {
    content: '   »';
    opacity: 0;
    top: 0;
    transition: 2s;
  }

  form button:hover {
    padding-right: 25px;
  }

  form button:hover:after {
    opacity: 1;
    right: 0;
  }

  .bg-bubbles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .bg-bubbles li {
    position: absolute;
    list-style: none;
    display: block;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.15);
    bottom: -160px;
    -webkit-animation: square 25s infinite;
    animation: square 25s infinite;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
  }

  .bg-bubbles li:nth-child(1) {
    left: 10%;
  }

  .bg-bubbles li:nth-child(2) {
    left: 20%;
    width: 80px;
    height: 80px;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-duration: 17s;
    animation-duration: 17s;
  }

  .bg-bubbles li:nth-child(3) {
    left: 25%;
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
  }

  .bg-bubbles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    -webkit-animation-duration: 22s;
    animation-duration: 22s;
    background-color: rgba(255, 255, 255, 0.25);
  }

  .bg-bubbles li:nth-child(5) {
    left: 70%;
  }

  .bg-bubbles li:nth-child(6) {
    left: 80%;
    width: 120px;
    height: 120px;
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
    background-color: rgba(255, 255, 255, 0.2);
  }

  .bg-bubbles li:nth-child(7) {
    left: 32%;
    width: 160px;
    height: 160px;
    -webkit-animation-delay: 7s;
    animation-delay: 7s;
  }

  .bg-bubbles li:nth-child(8) {
    left: 55%;
    width: 20px;
    height: 20px;
    -webkit-animation-delay: 15s;
    animation-delay: 15s;
    -webkit-animation-duration: 40s;
    animation-duration: 40s;
  }

  .bg-bubbles li:nth-child(9) {
    left: 25%;
    width: 10px;
    height: 10px;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-duration: 40s;
    animation-duration: 40s;
    background-color: rgba(255, 255, 255, 0.3);
  }

  .bg-bubbles li:nth-child(10) {
    left: 90%;
    width: 160px;
    height: 160px;
    -webkit-animation-delay: 11s;
    animation-delay: 11s;
  }

  @-webkit-keyframes square {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-700px) rotate(600deg);
      transform: translateY(-700px) rotate(600deg);
    }
  }

  @keyframes square {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-700px) rotate(600deg);
      transform: translateY(-700px) rotate(600deg);
    }
  }
</style>

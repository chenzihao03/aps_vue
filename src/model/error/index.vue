<template>
  <div class="container">
    <img src="../../assets/img/404.jpg" class="bg">
    <form class="form">
      <button type="button" @click="goIndex">返回首页</button>
    </form>
  </div>
</template>
<script>
  export default {
    methods: {
      goIndex() {
        this.$router.push('/login');
      }
    }
  }
</script>
<style scoped>
  img {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .container {
    max-width: 90%;
    margin: 0 auto;
    padding: 80px 0px;
  }

  .bg {
    display: block;
    max-width: 100%;
    margin: 0px auto;
  }

  form {
    text-align: center;
  }

  form button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
    background: #5298ff;
    border: 1px solid #5298ff;
    padding: 10px 15px;
    color: #FFF;
    border-radius: 3px;
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
</style>

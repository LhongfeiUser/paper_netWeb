<template>
  <div class="header">
    <nav class="navbar navbar-light bg-white">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/images/logo.png" width="200" height="30" alt="">
      </router-link>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" exact active-class="nav-link active">
            <span>首页</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/vipManage">
            <span>论文查重</span>
          </router-link>
        </li>
        <li class="nav-item">
          <span>论文查重流程</span>
        </li>
        <li class="nav-item">
          <router-link to="/skill">
            <span>论文查重技巧</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/faq">
            <span>常见问题</span>
          </router-link>
        </li>
        <li class="nav-item">
          <span>学术资讯</span>
        </li>
      </ul>
      <a href="/login">登录</a>
    </nav>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        current:1
      }
    },
    methods:{
    }
  }
</script>

<style scoped>
  .header{
    margin-bottom:10px;
  }
  .navbar{
    padding:1.5rem 1rem;
  }
  .nav.nav-pills {
    cursor: pointer;
  }
  .nav-item{
    margin:auto 2vw;
  }
  .nav-pills .nav-link.active, .nav-pills .show > .nav-link{
    background: orangered!important;
  }
</style>

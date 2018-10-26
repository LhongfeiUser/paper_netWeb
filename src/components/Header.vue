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
          <router-link to="/getreport" active-class="nav-link active">
            <span>下载报告</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/ptype/1" active-class="nav-link active">
            <span>论文查重技巧</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/ptype/2" active-class="nav-link active">
            <span>常见问题</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/ptype/3" active-class="nav-link active">
            <span>学术咨询</span>
          </router-link>
        </li>
      </ul>
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
</style>

<template>
  <div class="header">
      <nav class="navbar navbar-light bg-white">
        <router-link class="navbar-brand" to="/">
          <img src="../assets/images/logo.png" width="200" height="30" alt="">
        </router-link>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link to="/home" exact active-class="nav-link active">
              <span>首页</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/vipManage/upload" active-class="nav-link active">
              <span>论文查重</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/process" active-class="nav-link active">
              <span>论文查重流程</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/skill" active-class="nav-link active">
              <span>论文查重技巧</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/faq" active-class="nav-link active">
              <span>常见问题</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/academic" active-class="nav-link active">
              <span>学术资讯</span>
            </router-link>
          </li>
        </ul>
      </nav>
   <!-- <el-menu
      router
      :default-active='$route.path'
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#fff"
      text-color="#000"
      active-text-color="#f49f00">
      <el-menu-item index="/">
        <img src="../assets/images/logo.png" width="200" height="30" alt="">
      </el-menu-item>
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/vipManage/upload">论文查重</el-menu-item>
      <el-menu-item index="/">论文查重流程</el-menu-item>
      <el-menu-item index="/skill">论文查重技巧</el-menu-item>
      <el-menu-item index="/faq">常见问题</el-menu-item>
      <el-menu-item index="/academic">学术资讯</el-menu-item>
      <el-menu-item index="/login">登录</el-menu-item>
    </el-menu>-->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        current: 1,
        zz:'1'
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  .header {
    margin-bottom: 10px;
  }

  .navbar {
    padding: 1.5rem 1rem;
  }

  .nav.nav-pills {
    cursor: pointer;
  }
  .nav-link{
    padding:.2rem 1.5rem;
  }
  .nav-item {
    margin: auto 2vw;
    a{
      color:#000;
      font-size:16px;
    }
    a:hover{
      color:#ffc107;
    }
  }

  .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    background: #fff !important;
    color:#ffc107;
    border:1px solid #ffc107;
  }
</style>

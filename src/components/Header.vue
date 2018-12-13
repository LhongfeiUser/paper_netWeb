<template>
  <div class="header">
      <nav class="navbar navbar-light">
        <router-link class="navbar-brand" to="/">
          <!--<img src="../assets/images/logo.png" width="200" height="30" alt="">-->
          <img src="http://pmo78af5a.pic41.websiteonline.cn/upload/logo2.png" width="140">
          <img src="http://pmo78af5a.pic41.websiteonline.cn/upload/1231.png" width="165">
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
         <!-- <li class="nav-item">
            <router-link to="/process" active-class="nav-link active">
              <span>论文查重流程</span>
            </router-link>
          </li>-->
          <li class="nav-item">
            <router-link to="/skill" active-class="nav-link active">
              <span>论文查重技巧</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{path:'/faq', query:{list_id:2}}" active-class="nav-link active">
              <span>常见问题</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/academic" active-class="nav-link active">
              <span>学术资讯</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" active-class="nav-link active">
              <span>登录</span>
            </router-link>
          </li>
        </ul>
      </nav>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  .header {
    margin-bottom: 10px;
    background-color:#2b85e4;
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
      /*color:#000;*/
      color:#fff;
      font-size:16px;
    }
    a:hover{
      /*color:#ffc107;*/
    }
  }

  .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    background-color:inherit;
    color:#ffc107;
    border:1px solid #ffc107;
  }
</style>

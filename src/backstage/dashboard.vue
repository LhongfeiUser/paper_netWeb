<template>
  <div>
    <el-container class="_container" style="border: 1px solid #eee;">
      <el-aside class="aside_container" width="200px">
        <el-menu router
                 :show-timeout="200"
                 :default-active="$route.path"
                 mode="vertical"
                 background-color="#304156"
                 text-color="#bfcbd9"
                 active-text-color="#409EFF">
          <el-submenu index="1">
            <template slot="title">
              <i class="iconfont icon-navicon-yhgl"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/backstage"><i class="iconfont icon-gerenzhongxin"></i>个人中心</el-menu-item>
            <el-menu-item index="/backstage/userList"><i class="iconfont icon-user-list"></i>用户列表</el-menu-item>
            <el-menu-item index="/backstage/sharedSetting"><i class="el-icon-news" style="margin-right:5px!important;"></i>我的分成</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="iconfont icon-shujuguanli"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item index="/backstage/statistic"><i class="iconfont icon-icon-test"></i>数据统计</el-menu-item>
            <el-menu-item index="/backstage/statement"><i class="iconfont icon-shouzhimingxi"></i>收支明细</el-menu-item>
            <el-menu-item index="/backstage/orderDetail"><i class="iconfont icon-order"></i>订单列表</el-menu-item>
          </el-submenu>
          <el-menu-item index="/backstage/withdrawDeposit"><i class="iconfont icon-tixian"></i>申请提现</el-menu-item>
          <el-menu-item index="/backstage/generalizeLink"><i class="iconfont icon-share"></i>推广链接</el-menu-item>
          <el-menu-item index="/backstage/course"><i class="iconfont icon-jiaocheng"></i>操作教程</el-menu-item>
          <el-menu-item index="/backstage/uploadArticle"><i class="iconfont icon-share"></i>上传报告</el-menu-item>
          <el-menu-item index="/backstage/downArticle"><i class="iconfont icon-jiaocheng"></i>下载文档</el-menu-item>
        </el-menu>
      </el-aside>
      <el-aside width="200px"></el-aside>
      <el-container class="main_container">
        <el-header class="header_container">
         <h3>代理商管理后台</h3>
          <el-dropdown style="cursor: pointer;font-size:18px">
           <span>admin <i class="el-icon-arrow-down" style="margin-right: 15px"></i></span>
           <el-dropdown-menu slot="dropdown">
             <el-dropdown-item @click.native="goHome">首页</el-dropdown-item>
             <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
           </el-dropdown-menu>
         </el-dropdown>
        </el-header>
        <div style="padding:0 40px 20px 40px;">
          <transition name="fade" mode="out-in">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import cookies from 'js-cookie';
  export default {
    data() {
      return {
      }
    },
    methods:{
      goHome(){
        this.$router.push('/home')
      },
      logout(){
        sessionStorage.clear('isgin');
        cookies.remove('isRemember');
        cookies.remove('agent_id',);
        this.$router.push('/login')
      }
    }
  };
</script>

<style scoped lang="scss">
  ._container{
    position: relative;
  }
  ._container:after{
    content: "";
    display: table;
    clear: both;
  }
  .aside_container{
    position: fixed;
    top:0;
    left:0;
    z-index: 9;
    min-height:100vh;
    background-color:#304156;
    i{
      font-size: 18px;
      margin-right:10px!important;
    }
  }
  .main_container{
    position: relative;
    background-color: #fff;
    .header_container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      text-align: left;
      font-size: 18px;
      padding: 30px;
      position: relative;
      border: 1px solid #ebeef5;
      color: #303133;
      -webkit-transition: .3s;
      transition: .3s;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      overflow: hidden;
      margin-bottom:20px;
    }
  }
  .el-dropdown-menu__item{
    white-space: nowrap;
  }
  .el-submenu .el-menu-item{
    background-color: #1f2d3d !important;
  }
  .el-submenu .el-menu-item:hover{
    background-color: #001528 !important;
  }
  .el-header {
    color: #333;
  }
  .el-aside {
    color: #333;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>

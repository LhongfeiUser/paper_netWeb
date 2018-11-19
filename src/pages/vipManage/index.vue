<template>
  <div class="vipManage">
    <Header></Header>
    <main style="display: flex;justify-content: flex-start;align-items: flex-start">
      <div class="aside">
        <!--<ul class="nav flex-column">
          <li :class="current==='1'?'nav-item item_active':'nav-item'">
            <router-link to="info?current=1&time=new Date()">
              <span :class="current==='1'?'nav-link active':'nav-link'" @click="getInfo">会员信息</span>
            </router-link>
          </li>
          <li class="nav-item item_active">
            <router-link to="upload">
              <span class="nav-link active" @click="upload">论文查重</span>
            </router-link>
          </li>
          <li :class="current==='3'?'nav-item item_active':'nav-item'">
            <router-link to="order?current=3">
              <span :class="current==='3'?'nav-link active':'nav-link'" @click="getorderList">订单列表</span>
            </router-link>
          </li>
        </ul>-->
        <img src="../../assets/images/aside_logo.png">
        <div style="margin:20px 0 20px 20px;font-size:16px;color:#000;">
          <h3>知网小分解系统 文献库</h3>
        </div>
        <ul>
          <li>中国学术期刊网络出版总库</li>
          <li>中国博士学位论文全文数据库/中国优秀硕士学位论文全文数据库</li>
          <li>中国重要会议论文全文数据库</li>
          <li>中国重要报纸全文数据库</li>
          <li>中国专利全文数据库</li>
          <li>互联网资源</li>
          <li>英文数据库(涵盖期刊、博硕、会议的英文数据以及德国Springer、英国Taylor&Francis 期刊数据库等)</li>
          <li>港澳台学术文献库</li>
          <li>优先出版文献库</li>
          <li>互联网文档资源</li>
          <li>图书资源</li>
          <li>个人比对库</li>
        </ul>
      </div>
      <div class="vipManage_right">
        <router-view></router-view>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'

  export default {
    data() {
      return {
        current: '1'
      }
    },
    components: {Header, Footer},
    methods: {
      getInfo() {
       this.current='1'
      },
      upload() {
        this.current = '2'
      },
      getorderList() {
        this.current = '3'
      }
    }
  }
</script>

<style scoped lang="scss">
  .vipManage {
    .vipManage_right, .aside {
      margin: 0 10px 10px 20px;
      padding: 30px 0;
      position: relative;
      border: 1px solid #ebeef5;
      background-color: #fff;
      color: #888;
      -webkit-transition: .3s;
      transition: .3s;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      border-radius: 4px;
      overflow: hidden;
    }
    .vipManage_right {
      width: 85vw;
      padding: 30px 40px;
    }
    .aside {
      /*width: 200px;
      text-align: center;
      font-size: 16px;
      padding-bottom: 200px;
      .nav-item {
        margin: 10px auto;
      }
      .item_active {
        border-right: 5px solid red;
        margin: auto 10px;
        margin-right: 0;
      }
      .active {
        background-color: orangered;
        color: #fff;
        margin: auto 25px;
      }*/
      width:20vw;
      background-color: #fff;
      margin:0 20px 40px;
      ul{
        padding:0 20px;
        li{
          margin:10px auto;
          text-align: justify;
        }
      }
    }
  }
</style>

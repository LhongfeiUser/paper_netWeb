<template>
  <div class="vipManage">
    <main style="display: flex;justify-content: flex-start;align-items: flex-start">
      <div class="aside">
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
  .vipManage {
    .vipManage_right, .aside {
      margin: 0 10px 10px 20px;
      padding: 30px 0;
      position: relative;
      border: 1px solid #ebeef5;
      background-color: #fff;
      /*background-image: linear-gradient(20deg, #614E9F 30%, #2C63AD 70%);*/
      color: #888;
      -webkit-transition: .3s;
      transition: .3s;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      border-radius: 4px;
      overflow: hidden;
    }
    .vipManage_right {
      width: 85%;
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
      width:15%;
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

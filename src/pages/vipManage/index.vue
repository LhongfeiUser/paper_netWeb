<template>
  <div class="vipManage">
    <main style="display: flex;justify-content: flex-start;align-items: flex-start;width:1260px;margin:auto;">
      <div v-show="typeIndex===1" class="aside">
        <img src="../../assets/images/aside_wf.png">
        <div style="margin:20px 0 20px 20px;font-size:16px;color:#000;">
          <h3>万方检测系统 文献库</h3>
        </div>
        <ul>
          <li>中文科技期刊论文全文数据库</li>
          <li>博士/硕士学位论文全文数据库</li>
          <li>外文特色文献数据全库</li>
          <li>中文主要报纸全文数据库</li>
          <li>中国主要会议论文特色数据库</li>
          <li>高校论文联合比对库</li>
          <li>中国专利特色数据库</li>
          <li>维普优先出版论文全文数据库</li>
          <li>互联网数据资源/互联网文档资源</li>
          <li>港澳台文献资源</li>
          <li>图书资源</li>
          <li>古籍文献资源</li>
          <li>IPUB原创作品</li>
        </ul>
      </div>
      <div v-show="typeIndex===2" class="aside">
        <img src="../../assets/images/aside_cx.png">
        <div style="margin:20px 0 20px 20px;font-size:16px;color:#000;">
          <h3>超星检测系统 文献库</h3>
        </div>
        <ul>
          <li>中文科技期刊论文全文数据库</li>
          <li>博士/硕士学位论文全文数据库</li>
          <li>外文特色文献数据全库</li>
          <li>中文主要报纸全文数据库</li>
          <li>中国主要会议论文特色数据库</li>
          <li>高校论文联合比对库</li>
          <li>中国专利特色数据库</li>
          <li>维普优先出版论文全文数据库</li>
          <li>互联网数据资源/互联网文档资源</li>
          <li>港澳台文献资源</li>
          <li>图书资源</li>
          <li>古籍文献资源</li>
          <li>IPUB原创作品</li>
        </ul>
      </div>
      <div v-show="typeIndex===3" class="aside">
        <img src="../../assets/images/aside_wp1.png">
        <div style="margin:20px 0 20px 20px;font-size:16px;color:#000;">
          <h3>维普检测系统 文献库</h3>
        </div>
        <ul>
          <li>中文科技期刊论文全文数据库</li>
          <li>博士/硕士学位论文全文数据库</li>
          <li>外文特色文献数据全库</li>
          <li>中文主要报纸全文数据库</li>
          <li>中国主要会议论文特色数据库</li>
          <li>高校论文联合比对库</li>
          <li>中国专利特色数据库</li>
          <li>维普优先出版论文全文数据库</li>
          <li>互联网数据资源/互联网文档资源</li>
          <li>港澳台文献资源</li>
          <li>图书资源</li>
          <li>古籍文献资源</li>
          <li>IPUB原创作品</li>
        </ul>
      </div>
      <div v-show="typeIndex===4" class="aside">
        <img src="../../assets/images/aside_logo.png">
        <div style="margin:20px 0 20px 20px;font-size:16px;color:#000;">
          <h3>知网检测系统 文献库</h3>
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
        <router-view @childIndex="indexParameters"></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        typeIndex:1,
      }
    },
    methods: {
      indexParameters(index){
        this.typeIndex=index+1;
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
      width:15%;
      background-color: #fff;
      margin:0 20px 40px;
      img{
        display: block;
        margin:auto;
      }
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

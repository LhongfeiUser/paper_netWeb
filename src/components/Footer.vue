<template>
  <div class="footer">
    <div class="footer_left">
      <img src="http://pmo78af5a.pic41.websiteonline.cn/upload/logo1_lp79.png" width="200">
      <span><b>湘ICP备17138594号-1</b></span>
      <span>Copyright © 2016-2017 Lifesonic All Right Reserved</span>
      <span>诚信论文版权所有</span>
    </div>
    <ul class="footer_right">
      <li>联系我们：210-8064819</li>
      <li>QQ 号 码 :3395087314</li>
      <li>企业邮箱：wenxianjiance@126.com</li>
      <li>公司地址：湖南长沙市岳麓区岳麓街道麓山南路001号27栋103</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="scss">
  .footer{
    padding: 40px 80px 60px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    font-size: 16px;
    color:#5a5a5a;
    border-top:1px solid #dcdee2;
    font-family: 微软雅黑;
    .footer_left{
      margin-right:70px;
      display: flex;
      flex-direction: column;
      line-height: 40px;
      span{
        margin-left:10px;
      }
    }
    .footer_right{
      line-height: 40px;
    }
  }
</style>

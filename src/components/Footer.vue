<template>
  <div class="footer">
    <div class="container">
      <ul class="row">
        <li class="col-md-4">
          <div> <img src="../assets/images/footerLogo_02.png"></div>
          <span>湖南省出版物发行协会</span>
          <span>科研诚信建设工作委员会</span>
          <div style="display: flex;flex-direction: column;line-height: 20px;">
            <span>长沙升华数字技术有限公司</span>
            <span style="font-size:14px;">Changsha Sheng Hua Digital Technology Co.Ltd</span>
          </div>
        </li>
        <li class="col-md-4">
          <span>联系人：胡忠菊董事长 18975869797 / 贾婷经理 18975864411（同微信号码）</span>
          <span>公司座机：0731-82221754</span>
          <span>wenxianjiance@126.com</span>
          <span>联系地址：湖南省长沙市岳麓街道麓山南路中南大学本部</span>
        </li>
        <li class="col-md-4" style="display:flex;flex-direction: row">
          <div style="margin-right:20px; margin-left:10px;"><img src="../assets/images/footerQr_01.png"></div>
          <div><img src="../assets/images/footerQr_02.png"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="less">
.footer{
  height:35vh;
  padding-top:20px;
  border-top:1px solid #ccc;
  /*background-color:#fff;*/

  .row{
    display: flex;
    align-items: flex-end;
  }
  .col-md-4{
    display: flex;
    flex-direction: column;
    line-height:30px;

  }
}
</style>

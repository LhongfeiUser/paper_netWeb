<template>
  <div class="footer">
    <div class="footer_content">
      <div class="footer_left">
        <img src="../assets/images/footer_logo.png" alt="">
        <div>
          <img src="../assets/images/footer_Qr.png" alt="">
          <span>微信服务号</span>
        </div>
      </div>
      <div class="footer_right">
        <ul>
          <li>
            <span class="footer-title footer_icon_1"><i></i>服务机构</span>
            <span>湖南省出版物发行业协会科研诚信建设工作委员会</span>
            <span>中南大学科技创新与社会发展研究中心</span>
            <span>湖南逸夫图情教育科技有限公司</span>
            <span class="footer-title footer_icon_2"><i></i>荣誉资质</span>
          </li>
          <li>
            <span class="footer-title footer_icon_3"><i></i>联系地址</span>
            <span>湖南省地址：长沙市岳麓区中南大学科技园（研发）总部</span>
            <span>北京市地址：海淀区清华大学新林院</span>
            <span>湖北省地址：武汉市洪山区光谷华夏理工学院校内</span>
            <span>山西省地址：临汾市贡院街山西师范大学校内</span>
            <span>河北省地址：保定市七一东路保定学院校内</span>
          </li>
          <li>
            <span class="footer-title footer_icon_4"><i></i>咨询方式</span>
            <span>咨询电话：0731-82221754</span>
            <span>贾老师：18975864411 </span>
            <span>孙博士：18519336930</span>
          </li>
        </ul>
        <div class="line"></div>
        <span class="footer_version"><a href="http://www.beian.miit.gov.cn">Copyright©2019-2020 Lifesonic All Right Reserved 逸夫论文版权所有 湘ICP备17138594号-1</a></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="scss">
  .footer {
    background-color: #323232;
    border-top: 4px solid #e1b05d;
    padding: 70px 0 35px;
    font-family: "Microsoft Yahei";
    .footer_content {
      width: 1260px;
      margin: auto;
      display: flex;
      justify-content: flex-start;
      color:#a4a4a4;
      ul {
        display: flex;
        li {
          display: flex;
          flex-direction: column;
          margin:0 40px;
          line-height: 20px;
        }
      }
      .footer_left {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin-right:20px;
        div{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          img{
            margin:20px 0 10px;
            width:120px;
            height:120px;
          }
        }
      }
      .footer_right{
        ul{
          position: relative;
          font-size:13px;
          .footer-title{
            font-size:16px;
            display: flex;
            align-items: center;
            margin-bottom:20px;
            i{
              display: inline-block;
              margin-right:7px;
              width:20px;
              height:20px;
            }
          }
          .footer_icon_2{
            margin-top:25px;
          }
          .footer_icon_1 i{
            background:url('../assets/images/organization.png')no-repeat;
          }
          .footer_icon_2 i{
            background:url('../assets/images/honor.png')no-repeat;
          }
          .footer_icon_3 i{
            background:url('../assets/images/address.png')no-repeat;
          }
          .footer_icon_4 i{
            background:url('../assets/images/phone.png')no-repeat;
          }
        }
        .line{
          width:93%;
          margin:0 auto;
          border:1px solid #474747;
        }
        .footer_version{
          display: inline-block;
          width:100%;
          margin-top:20px;
          text-align: center;
          font-size:12px;
        }
      }
    }
  }
</style>

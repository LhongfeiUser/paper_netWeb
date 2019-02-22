<template>
  <div class="home">
    <Header></Header>
    <div class="banner">
      <el-carousel trigger="click" arrow="never" height="520px">
        <el-carousel-item v-if="slide_pic" v-for="item in slide_pic" :key="item">
          <img :src="item" width="120%" height="100%" style="margin-left:-10%;">
        </el-carousel-item>
      </el-carousel>
      <div class="advertising">
        <div class="advertising_bg">
          <i class="trumpet_img"></i>
          <marquee behavior="scroll" scrollamount="3" scrolldelay="2" direction="up" bgcolor="#fafafa">
            <span>本平台所有检测系统均直接调用官方的检测引擎和数据库，通过本平台检测结果与官方一致，得出的检测报告均可在各官方查验真伪。请同学们放心使用。。。</span>
          </marquee>
        </div>
      </div>
    </div>
    <main>
      <div style="background:#fafafa">
        <div class="flow">
          <div class="title">
            <h3>论 文 查 重 流 程</h3>
            <span>PAPER DETECTION</span>
          </div>
          <ul>
            <li>
              <img src="../../assets/images/duplicate_icon_01.png">
              <span>选择查重系统</span>
            </li>
            <li>
              <img src="../../assets/images/duplicate_icon_02.png">
              <span>上传论文</span>
            </li>
            <li>
              <img src="../../assets/images/duplicate_icon_03.png">
              <span>担保交易付款</span>
            </li>
            <li>
              <img src="../../assets/images/duplicate_icon_04.png">
              <span>下载论文检测报告</span>
            </li>
            <li>
              <img src="../../assets/images/duplicate_icon_05.png">
              <span>确认评价</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="system">
        <div class="title">
          <h3>合 作 单 位 检 测 系 统</h3>
          <span>COOPERATIVE UNIT DETECTION SYSTEM</span>
        </div>
        <ul class="system_nav">
          <li @click="optionsVersion(1)">知网检测系统</li>
          <li @click="optionsVersion(2)">万方数据检测系统</li>
          <li @click="optionsVersion(3)">超星大雅检测系统</li>
          <li @click="optionsVersion(4)">维普数据检测系统</li>
        </ul>
        <div class="system_contentBox">
          <transition name="fade" mode="in-out">
            <ul v-show="version_num===1"  class="system_content">
              <li v-for="i in 4" :key="i">
                <img class="version_img" src="../../assets/images/version_icon_01.png" alt="">
                <img class="leftHead_img" src="../../assets/images/ver_4.jpg">
                <div class="system_detail">
                  <h3><strong>7{{i}}.00</strong>元/1篇</h3>
                  <span><strong>适用范围：</strong>人事职称评审、人才引进成果检测</span>
                  <span><strong>说明：</strong>评审职称前成果必查</span>
                  <span>已成交：529510件</span>
                  <button class="btn btn-warning btn-lg">立即检测</button>
                </div>
              </li>
            </ul>
          </transition>
          <transition name="fade" mode="in-out">
            <ul v-show="version_num===2"  class="system_content">
              <li v-for="i in 3" :key="i">
                <img class="version_img" src="../../assets/images/version_icon_01.png" alt="">
                <img class="leftHead_img" src="../../assets/images/ver_4.jpg">
                <div class="system_detail">
                  <h3><strong>7{{i}}.00</strong>元/1篇</h3>
                  <span><strong>适用范围：</strong>人事职称评审、人才引进成果检测</span>
                  <span><strong>说明：</strong>评审职称前成果必查</span>
                  <span>已成交：529510件</span>
                  <button class="btn btn-warning btn-lg">立即检测</button>
                </div>
              </li>
            </ul>
          </transition>
          <transition name="fade" mode="in-out">
            <ul v-show="version_num===3"  class="system_content">
              <li v-for="i in 2" :key="i">
                <img class="version_img" src="../../assets/images/version_icon_01.png" alt="">
                <img class="leftHead_img" src="../../assets/images/ver_4.jpg">
                <div class="system_detail">
                  <h3><strong>7{{i}}.00</strong>元/1篇</h3>
                  <span><strong>适用范围：</strong>人事职称评审、人才引进成果检测</span>
                  <span><strong>说明：</strong>评审职称前成果必查</span>
                  <span>已成交：529510件</span>
                  <button class="btn btn-warning btn-lg">立即检测</button>
                </div>
              </li>
            </ul>
          </transition>
          <transition name="fade" mode="in-out">
            <ul v-show="version_num===4"  class="system_content">
              <li v-for="i in 1" :key="i">
                <img class="version_img" src="../../assets/images/version_icon_01.png" alt="">
                <img class="leftHead_img" src="../../assets/images/ver_4.jpg">
                <div class="system_detail">
                  <h3><strong>7{{i}}.00</strong>元/1篇</h3>
                  <span><strong>适用范围：</strong>人事职称评审、人才引进成果检测</span>
                  <span><strong>说明：</strong>评审职称前成果必查</span>
                  <span>已成交：529510件</span>
                  <button class="btn btn-warning btn-lg">立即检测</button>
                </div>
              </li>
            </ul>
          </transition>
        </div>
      </div>

      <div class="advantage">
        <div class="advantage_content">
          <div class="title">
            <h3>部 分 合 作 院 校</h3>
            <span>CORE ADVANTAGE</span>
          </div>
          <div style="width:1260px;margin:auto;">
            <el-carousel trigger="click" arrow="never" height="520px">
              <el-carousel-item v-for="(itemImg,index) in scImgobj"  :key="index">
               <ul class="partner">
                 <li v-for="item in itemImg">
                   <img :src="item" width="100%">
                 </li>
               </ul>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
      <end_article></end_article>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
  import Footer from '@/components/Footer'
  import Header from '@/components/Header'
  import selection_model from './models/selection_model'
  import end_article from './models/end_article'

  import {getSlide_pic} from '../../api/get_homeData'

  export default {
    components: {Header, selection_model, end_article, Footer},
    data() {
      return {
        loadingImg: ['https://img.zcool.cn/community/01ec5a5996ac89a8012156033739b5.gif'],
        slide_pic: [],
        version_num: 1,
        system_module: [
          {
            module_img: 'http://pmo78af5a.pic41.websiteonline.cn/upload/ver_4.jpg',
            detecting_system: '知网检测系统',
            range: '高校硕士、博士、在职研究生论文查重检测',
            products: '独有《学术论文联合对比库》，支持官网验证，硕博定稿前必查',
            S_versions: ['硕博VIP5.1', '本科PMLC', '期刊', '人事版', '科研版', '图书专著版'],
            price: ['280', '222', '331', '433', '111', '323'],
          },
          {
            module_img: 'http://www.lunwenjc.com/Uploads/Content/2017-08-18/59965b22bb567.png',
            detecting_system: 'Turnitin国际版论文查重系统',
            range: '适用于美洲、澳洲、香港、韩国等国家留学生或发表投稿使用。',
            products: 'Turnitin国际版领先全球的防范剽窃与提供丰富反馈的技术',
            S_versions: ['大学论文', '学位论文', '会议论文', '期刊论文', '毕业论文', '硕博论文'],
            price: ['1.00', '2.00', '3.00', '4.00', '5.00', '6.00'],
          },
          {
            module_img: 'http://pmo78af5a.pic41.websiteonline.cn/upload/ver_1.jpg',
            detecting_system: '万方数据检测系统',
            range: '全科可查，查重产品优势为医学学科',
            products: '中国科学技术部下属企业研发而成，全程自动检测，性价比高',
            S_versions: [],
            price: ['2.00'],
          },
          {
            module_img: 'http://pmo78af5a.pic41.websiteonline.cn/upload/2222.png',
            detecting_system: '超星大雅检测系统',
            range: '有图书专著，对比资源全',
            products: '有图书专著对比资源全，价格相对较低，全程自助检测',
            S_versions: [],
            price: ['2.00'],
          },
          {
            module_img: 'http://pmo78af5a.pic41.websiteonline.cn/upload/ver_3.jpg',
            detecting_system: '维普数据检测系统',
            range: '可测中英文，查重范围广',
            products: '有图书专著对比资源全，价格相对较低，全程自助检测',
            S_versions: [],
            price: ['2.00'],
          },
        ],
        sc: [
          'http://pmo78af5a.pic41.websiteonline.cn/upload/4_pm8w.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/4_pm8w.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/15_ffuc.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/14_92wx.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/11_1g5h.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/10_zm7d.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/10_zm7d.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/12_9moo.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/9_zbn4.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/8_066t.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/7_dvh4.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/6_sn0x.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/5_hzcr.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/3_bohd.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/xl26.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/2_52i8.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/1_ejjs.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/4_pm8w.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/15_ffuc.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/14_92wx.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/11_1g5h.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/10_zm7d.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/12_9moo.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/9_zbn4.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/8_066t.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/7_dvh4.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/6_sn0x.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/5_hzcr.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/3_bohd.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/xl26.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/2_52i8.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/1_ejjs.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/4_pm8w.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/15_ffuc.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/14_92wx.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/11_1g5h.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/10_zm7d.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/12_9moo.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/9_zbn4.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/8_066t.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/7_dvh4.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/6_sn0x.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/5_hzcr.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/3_bohd.png',
          'http://pmo78af5a.pic41.websiteonline.cn/upload/xl26.png',
        ],
        scImgobj:{},
      }
    },
    created() {
      this.getInitData();
      this.getSchoolImg();
    },
    methods: {
      getInitData() {
        let pic_data = {
          username: '',
          password: '',
          token: 'meichenghuilian20181108'
        };
        getSlide_pic(pic_data).then(res => {
          if (res) {
            res.forEach((item, index) => {
              let reg = /D:\\(WWW)\\(lunwen)\\(public)\\/;
              let pic = item.pic.replace(reg, 'http://www.yifulunwen.com');
              this.slide_pic.push(pic);
            })
          }
        });
      },
      optionsVersion(num) {
        this.version_num = num;
      },
      getSchoolImg(){
        let page=Math.ceil(this.sc.length/15);
        for(let i=1;i<=page;i++){
          this.scImgobj[i]=this.sc.slice((i-1)*15,i*15);
          console.log(this.scImgobj);
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  .home {
    font-family: Microsoft YaHei;
    color: #666;
    position: relative;
    min-width: 1260px;
  }
  .header {
    position: absolute !important;
    z-index: 99;
    width: 1260px;
    left: 50%;
    margin-left: -630px;
    background-color: inherit !important;
  }
  /deep/ .el-carousel {
    .el-carousel__indicators {
      bottom: 30px;
      .el-carousel__button {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #e0af5c;
      }
      button:focus {
        outline: none;
      }
    }
  }
  .advertising {
    height: 60px;
    background-color: #fafafa;
    border-bottom: 1px double #000;
    .advertising_bg {
      position: relative;
      width: 1260px;
      height: 100%;
      margin-left: -630px;
      left: 50%;
      .trumpet_img {
        position: absolute;
        top: 17px;
        left: 0;
        display: block;
        width: 20px;
        height: 20px;
        z-index: 33;
        background: url("../../assets/images/trumpet.png");
        background-size: 100% 100%;
      }
      marquee {
        position: absolute;
        color: #666666;
        font-size: 15px;
        top: 15px;
        height: 30px;
        span {
          display: inline-block;
          margin-left: 30px;
        }
      }
    }

  }

  main {
    background-color: #fff;
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 65px 0 50px;
      h3 {
        display: inline-block;
        font-size: 25px;
        margin-bottom: 10px;
      }
      span {
        color: rgb(204, 204, 204);
        font-size: 14px;
      }
    }
    .flow {
      width: 1260px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-bottom: 95px;
        li {
          display: flex;
          width: 18%;
          height: 215px;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          border: 1px solid #e7e7e7;
          padding: 60px 55px 45px;
          box-shadow: 5px 5px 5px #dedede;
          img {
            width: 50px;
            height: 56px;
          }
          span {
            display: inline-block;
            margin-top: 25px;
            font-size: 19px;
          }
        }
      }
    }
    .system {
      width: 1260px;
      margin: auto;
      .system_nav {
        display: flex;
        justify-content: center;
        li {
          margin: auto 56px;
          font-size: 18px;
          cursor: pointer;
        }
      }
      .system_contentBox{
        min-height:765px;
        .system_content {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          li {
            position: relative;
            display: flex;
            align-items: flex-start;
            width: 48%;
            margin-top: 50px;
            border: 1px solid #e7e7e7;
            padding: 45px 0 40px 60px;
            background: #fafafa;
            box-shadow: -5px 5px 10px #dedede;
            cursor: pointer;
            img.version_img {
              position: absolute;
              right: 0;
              top: 0;
            }
            img.leftHead_img {
              margin-right: 50px;
              margin-top: 30px;
              width: 115px;
              height: 115px;
              border: 2px solid #000;
              border-radius: 50%;
              overflow: hidden;
            }
            .system_detail {
              display: flex;
              align-items: flex-start;
              flex-direction: column;
              strong {
                color: #000;
                font-weight: bold;
              }
              h3 {
                margin-bottom: 25px;
                font-size: 25px;
                strong {
                  color: #e29f2b;
                }
              }
              span:nth-child(4) {
                margin: 45px 0 25px;
              }
              .btn {
                background: #e29f2b;
                color: #000;
              }
            }
          }
          li:hover{
            box-shadow: -10px 15px 40px #666;
          }
        }
      }

      .system_module:last-child {
        margin-bottom: 40px;
      }
      .fade-enter-active{
        transition: all 1.5s;
      }
      .fade-leave-active {
        transition: all .7s;
      }
      .fade-enter, .fade-leave-to {
        transform: translateX(100px);
        opacity: 0;
      }
    }
    .advantage {
      padding: 0 80px 60px;
      .advantage_content {
        /*.achievement {
          margin-bottom: 20px;
          ul {
            display: flex;
            justify-content: center;
            align-items: center;
            li {
              width: 180px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin: 40px 60px 60px;
              span {
                font-size: 18px;
                color: rgb(102, 102, 102);
              }
              img {
                width: 90px;
                height: auto;
              }
            }
          }
          ul.achievement_top {
            li {
              span {
                color: #217FFB;
                font-size: 18px;
                strong {
                  font-size: 35px;
                  font-weight: bold;
                }
              }
              span:last-child {
                color: rgb(102, 102, 102);
              }
            }
          }
          ul.achievement_bottom {
            li {
              line-height: 30px;
              img {
                margin-bottom: 20px;
              }
            }
          }
        }*/
        .partner {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          li {
            width: 17%;
            height: auto;
            margin: 20px auto
          }
        }
      }
    }
  }

  @media screen and (min-width: 1440px) {
    #banner {
      .carousel-item {
        img {
          margin-left: 0 !important;
        }
      }
    }
  }
</style>

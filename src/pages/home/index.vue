<template>
  <div class="home">
    <Header></Header>
    <div class="block">
      <el-carousel trigger="click" height="520px">
        <el-carousel-item v-if="slide_pic" v-for="item in slide_pic" :key="item">
          <img :src="item" width="100%">
        </el-carousel-item>
      </el-carousel>
    </div>
    <marquee behavior="scroll" bgcolor="#fff">
      <span>本平台所有检测系统均直接调用官方的检测引擎和数据库，通过本平台检测结果与官方一致，得出的检测报告均可在各官方查验真伪。请同学们放心使用...</span>
    </marquee>
    <main>
      <div class="flow">
        <div class="title">
          <h3>论文查重流程</h3>
          <span>PAPER DETECTION</span>
        </div>
        <ul>
          <li>
            <div>
              <img src="http://pmo78af5a.pic41.websiteonline.cn/upload/2_492p.png">
              <span>选择查重系统</span>
            </div>
            <span class="arrows"></span>
          </li>
          <li>
            <div>
              <img src="http://pmo78af5a.pic41.websiteonline.cn/upload/3_p47s.png">
              <span>上传论文</span>
            </div>
            <span class="arrows"></span>
          </li>
          <li>
            <div>
              <img src="http://pmo78af5a.pic41.websiteonline.cn/upload/4_7dth.png">
              <span>担保交易付款</span>
            </div>
            <span class="arrows"></span>
          </li>
          <li>
            <div>
              <img src="http://pmo78af5a.pic41.websiteonline.cn/upload/5_dqyy.png">
              <span>下载论文检测报告</span>
            </div>
            <span class="arrows"></span>
          </li>
          <li>
            <div>
              <img src="http://pmo78af5a.pic41.websiteonline.cn/upload/6_1kfe.png">
              <span>确认评价</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="system">
        <div class="title">
          <h3>合作单位检测系统</h3>
          <span>COOPERATIVE UNIT DETECTION SYSTEM</span>
        </div>
        <div v-for="item in system_module">
          <selection_model :selectionData="item"></selection_model>
        </div>
      </div>

      <div class="advantage">
        <!--<div class="title">
          <h3>论文网优势</h3>
          <span>CORE ADVANTAGE</span>
        </div>-->
        <div class="advantage_content">
          <!--<div class="achievement">
            <ul class="achievement_top">
              <li>
                <span><strong>8</strong> 年</span>
                <span>深耕查重行业</span>
              </li>
              <li>
                <span><strong>800</strong> 所</span>
                <span>合作高等院校</span>
              </li>
              <li>
                <span><strong>400</strong> 万</span>
                <span>帮助通过学生</span>
              </li>
            </ul>
            <ul class="achievement_bottom">
              <li>
                <img src="http://pmo78af5a.pic41.websiteonline.cn/upload/d0ka.png">
                <span>安全认证</span>
                <span>保证论文安全不外泄</span>
              </li>
              <li>
                <img src="http://pmo78af5a.pic41.websiteonline.cn/upload/y29c.png">
                <span>授权最多</span>
                <span>获得多家认证机构授权</span>
              </li>
              <li>
                <img src="http://pmo78af5a.pic41.websiteonline.cn/upload/2xk0.png">
                <span>最具权威</span>
                <span>行业内最具权威查重</span>
              </li>
            </ul>
          </div>-->
          <ul class="partner">
            <li v-for="item in sc" :key="item">
              <img :src="item" width="100%">
            </li>
          </ul>
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
        loadingImg:['https://img.zcool.cn/community/01ec5a5996ac89a8012156033739b5.gif'],
        slide_pic: [],
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
          'http://pmo78af5a.pic41.websiteonline.cn/upload/1_ejjs.png'
        ],
      }
    },
    created() {
      this.getInitData();
    },
    methods: {
      getInitData() {
        let pic_data = {
          username: '',
          password: '',
          token: 'meichenghuilian20181108'
        };
        getSlide_pic(pic_data).then(res => {
          if(res){
            res.forEach((item, index) => {
              let reg = /D:\\(WWW)\\(lunwen)\\(public)\\/;
              let pic = item.pic.replace(reg,'http://admin.yifulunwen.com');
              this.slide_pic.push(pic);
            })
          }
        });
      }
    },
  }
</script>

<style scoped lang="scss">
  .home {
    font-family: Microsoft YaHei;
    color: rgb(0, 0, 0);
    position: relative;
  }

  .header {
    position: absolute !important;
    z-index: 99;
    width: 100%;
    background-color: inherit !important;
  }

  #banner {
    .carousel-indicators li {
      width: 15px;
      height: 15px;
      border-radius: 50%;
    }
    .carousel-item {
      height: 520px !important;
      img {
        height: 100%;
      }
    }
  }

  main {
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 55px 0 40px;
      h3 {
        display: inline-block;
        color: rgb(0, 0, 0);
        font-size: 25px;
        margin-bottom: 10px;
      }
      span {
        color: rgb(204, 204, 204);
        font-size: 14px;
        font-family: Times New Roman;
        font-weight: bold;
      }
    }
    .flow {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      padding: 0 80px 60px;
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          div {
            display: flex;
            flex-direction: column;
            align-items: center;
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
          span.arrows {
            background: url("http://pmo78af5a.pic41.websiteonline.cn/upload/7.png") no-repeat;
            background-size: 100% 100%;
            width: 20px;
            height: 20px;
            display: inline-block;
            margin-left: 60px;
          }
        }
      }
    }
    .system {
      margin-top: 10px;
      background-color: #fff;
      padding: 0 80px 60px;
      .system_module {
        height: 175px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        font-size: 14px;
        background-image: linear-gradient(20deg, #614E9F 15%, #2C63AD 85%);
        border-radius: 8px;
        padding: 0 30px;
        margin-bottom: 60px;
        img {
          width: 140px;
          height: 150px;
          border-radius: 8px;
        }
        .module_content {
          margin-right: 50px;
          width: 600px;
          line-height: 30px;
          strong {
            font-weight: 500;
          }
          h4 {
            margin-bottom: 10px;
            font-weight: 600;
          }
          .S_versions_box {
            span {
              display: inline-block;
              margin: 0 5px;
              padding: 0 5px;
              cursor: pointer;
            }
            .S_versions_content {
              border: 1px solid #fff;
            }
          }
        }
        .detect {
          li {
            min-width: 128px;
            display: flex;
            flex-direction: column;
            align-items: center;
            span {
              strong {
                font-size: 28px;
                font-weight: 600;
              }
            }
            .btn {
              margin-top: 20px;
              background-color: inherit;
              border: 1px solid #fff;
              color: #fff;
              width: 100% !important;
            }
            .btn:hover {
              background-color: rgba(255, 87, 0, 1);
              border-color: rgba(255, 87, 0, 1);
            }
          }
        }
      }
      .system_module:last-child {
        margin-bottom: 40px;
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

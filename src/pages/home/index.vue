<template>
  <div class="home">
    <header>
      <nav>
        <div class="logo">
          <img src="http://pmo78af5a.pic41.websiteonline.cn/upload/logo2.png" width="140">
          <img src="http://pmo78af5a.pic41.websiteonline.cn/upload/1231.png" width="165">
        </div>
        <ul>
          <li>
            <router-link to="/home">
              <span>首页</span>
            </router-link>
          </li>
          <li>
            <router-link to="/vipManage/upload">
              <span>论文查重</span>
            </router-link>
          </li>
          <li>
            <router-link to="/skill">
              <span>论文查重技巧</span>
            </router-link>
          </li>
          <li>
            <router-link to="/faq">
              <span>常见问题</span>
            </router-link>
          </li>
          <li>
            <router-link to="/academic">
              <span>学术咨询</span>
            </router-link>
          </li>
        </ul>
      </nav>
      <div id="banner" class="carousel slide" data-ride="carousel">
        <!-- 指示符 -->
        <ul class="carousel-indicators">
          <li data-target="#banner" data-slide-to="0" class="active"></li>
          <li data-target="#banner" data-slide-to="1"></li>
          <li data-target="#banner" data-slide-to="2"></li>
        </ul>
        <!-- 轮播图片 -->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="http://pmo78af5a.pic41.websiteonline.cn/upload/345_skjr.png" width="atuo" height="520"
                 style="margin-left:-25%;">
          </div>
          <div class="carousel-item">
            <img src="http://pmo78af5a.pic41.websiteonline.cn/upload/234_ykrp.png" width="atuo" height="520"
                 style="margin-left:-25%;">
          </div>
          <div class="carousel-item">
            <img src="http://pmo78af5a.pic41.websiteonline.cn/upload/22_g24d.png" width="atuo" height="520"
                 style="margin-left:-25%;">
          </div>
        </div>
      </div>
    </header>
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
        <div class="system_module">
          <img src="http://pmo78af5a.pic41.websiteonline.cn/upload/ver_4.jpg" alt="">
          <div class="module_content">
            <h4>知网检测系统</h4>
            <div>
              <strong>使用范围：</strong>
              高校硕士、博士、在职研究生论文查重检测
            </div>
            <div>
              <strong>产品说明：</strong>
              独有《学术论文联合对比库》，支持官网验证，硕博定稿前必查
            </div>
            <div class="S_versions_box">
              <strong>版本选择：</strong>
              <span :class="current===index?'S_versions_content':''" @click="current=index"
                    v-for="(item,index) in S_versions" :key="item">{{item}}</span>
            </div>
          </div>
          <ul class="detect">
            <transition name="slide-fade" mode="out-in">
              <li v-if="current===index" v-for="(i,index) in 6" :key="i">
                <span>
                  <strong>28{{index}}.00</strong>元/篇
                </span>
                <button class="btn">立即检测</button>
              </li>
            </transition>
          </ul>
        </div>
        <div class="system_module" v-for="(item,index) in system_module">
          <img :src="item.module_img">
          <div class="module_content">
            <h4>{{item.detecting_system}}</h4>
            <div>
              <strong>使用范围：</strong>
              {{item.range}}
            </div>
            <div>
              <strong>产品说明：</strong>
              {{item.products}}
            </div>
          </div>
          <ul class="detect">
            <li>
              <span>
                <strong>{{item.price}}</strong>元/千字符
              </span>
              <button class="btn">立即检测</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="advantage">
        <div class="title">
          <h3>论文网优势</h3>
          <span>CORE ADVANTAGE</span>
        </div>
        <div class="advantage_content">
          <div class="achievement">
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
          </div>
          <ul class="partner">
            <li v-for="item in sc" :key="item">
              <img :src="item" width="100%">
            </li>
          </ul>
        </div>
      </div>
      <div class="article">
        <ul class="tabs">
          <li :class="isTabs===0?'tabs_active':''" @click="isTabs=0">论文查重技巧</li>
          <li :class="isTabs===1?'tabs_active':''" @click="isTabs=1">常见问题</li>
          <li :class="isTabs===2?'tabs_active':''" @click="isTabs=2">学术资讯</li>
        </ul>
        <ul class="tabs_content">
          <li v-show="isTabs===0">
           <div class="article_box" v-for="(item,index) in 3" :key="item" @click="goArticleDetail(index,'skill')">
             <div class="article_title">
                 <h4>图片拼接、设计漏洞，又一位学术大佬论文造</h4>
                 <span>2018-11-21</span>
               </div>
             <span class="article_content">
              近日，某旧书网被毕业生举报，有不法商家在售卖高校博士学位论文。登录该网站进行关键字搜索，会弹出4000多条贩售信息，其中的论文来自全国诸多高校，不乏知名学府。
            </span>
           </div>
          </li>
          <li v-show="isTabs===1">
            <div class="article_box" v-for="(item,index) in 3" :key="item" @click="goArticleDetail(index,'faq')">
              <div class="article_title">
                <h4>图片拼接、设计漏洞，又一位学术大佬论文造</h4>
                <span>2018-11-22</span>
              </div>
              <span class="article_content">
              近日，某旧书网被毕业生举报，有不法商家在售卖高校博士学位论文。登录该网站进行关键字搜索，会弹出4000多条贩售信息，其中的论文来自全国诸多高校，不乏知名学府。
            </span>
            </div>
          </li>
          <li v-show="isTabs===2">
            <div class="article_box" v-for="(item,index) in 3" :key="item" @click="goArticleDetail(index,'academic')">
              <div class="article_title">
                <h4>图片拼接、设计漏洞，又一位学术大佬论文造</h4>
                <span>2018-11-23</span>
              </div>
              <span class="article_content">
              近日，某旧书网被毕业生举报，有不法商家在售卖高校博士学位论文。登录该网站进行关键字搜索，会弹出4000多条贩售信息，其中的论文来自全国诸多高校，不乏知名学府。
            </span>
            </div>
          </li>
        </ul>
        <marquee behavior="scroll" bgcolor="#fff" >
          <span>本平台所有检测系统均直接调用官方的检测引擎和数据库，通过本平台检测结果与官方一致，得出的检测报告均可在各官方查验真伪。请同学们放心使用...</span>
        </marquee>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
  import Footer from '@/components/Footer'

  export default {
    components: {Footer},
    data() {
      return {
        current: 0,
        S_versions: ['硕博VIP5.1', '本科PMLC', '期刊', '人事版', '科研版', '图书专著版'],
        system_module: [
          {
            module_img: 'http://pmo78af5a.pic41.websiteonline.cn/upload/ver_1.jpg',
            detecting_system: '万方数据检测系统',
            range: '全科可查，查重产品优势为医学学科',
            products: '中国科学技术部下属企业研发而成，全程自动检测，性价比高',
            price: '2.00',
          },
          {
            module_img: 'http://pmo78af5a.pic41.websiteonline.cn/upload/2222.png',
            detecting_system: '超星大雅检测系统',
            range: '有图书专著，对比资源全',
            products: '有图书专著对比资源全，价格相对较低，全程自助检测',
            price: '2.00',
          },
          {
            module_img: 'http://pmo78af5a.pic41.websiteonline.cn/upload/ver_3.jpg',
            detecting_system: '维普数据检测系统',
            range: '可测中英文，查重范围广',
            products: '有图书专著对比资源全，价格相对较低，全程自助检测',
            price: '2.40',
          }
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
        isTabs:0,
      }
    },
    methods:{
      goArticleDetail(id,name){
        this.$router.push(`/${name}/detail/${id}`)
      }
    }
  }
</script>

<style scoped lang="scss">
  .home {
    font-family: Microsoft YaHei;
    color: rgb(0, 0, 0);
  }

  header {
    position: relative;
    nav {
      position: absolute;
      top: 0;
      z-index: 2;
      padding: 15px 20px 0;
      width: 100%;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo {
        img {
          height: 50px;
          vertical-align: center;
        }
      }
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        li {
          margin: 20px;
          span {
            color: #fff;
          }
          a:hover {
            color: #fff;
          }
        }
      }
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
          margin-right: 200px;
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
        ul.detect {
          li {
            display: flex;
            flex-direction: column;
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
        .achievement {
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
        }
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
    .article{
      background-color: #fff;
      padding: 60px 80px 60px;
      ul.tabs{
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom:3px solid #1754A5;
        li{
          width:33.33%;
          line-height: 55px;
          font-size:18px;
          text-align: center;
          cursor:pointer;
        }
        .tabs_active{
          background-color: #1754a5;
          color:#fff;
        }
      }
      ul.tabs_content{
        li{
          margin-top:35px;
          color:#5A5A5A;
          .article_box{
            margin:40px 15px;
            cursor: pointer;
            .article_title{
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-size:18px;
              margin-bottom:10px;
              span{
                font-family: SimSun;
                font-size: 14px;
                color: #acacac;
              }
            }
            .article_content{
              width:60%;
              font-size:12px;
              /*overflow: hidden;*/
              /*text-overflow: ellipsis;*/
              /*display: -webkit-box;*/
              /*-webkit-line-clamp: 1;*/
              /*-webkit-box-orient: vertical;*/
            }
          }
        }
      }
    }
  }

  /*动画效果*/

  .slide-fade-enter-active,.slide-fade-leave-active {
    transition: all .5s;
  }
  .slide-fade-enter{
    transform: translateY(-60px);
    opacity: 0;
  }
  .slide-fade-leave-to{
    transform: translateY(60px);
    opacity: 0;
  }

</style>

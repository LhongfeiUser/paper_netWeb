<template>
  <div class="home">
    <div class="banner">
      <el-carousel trigger="click" arrow="never" height="520px">
        <el-carousel-item v-if="slide_pic" v-for="item in slide_pic" :key="item">
          <img :src="item" width="100%" height="100%">
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
            <li class="paper_bg_1">
              <img src="../../assets/images/duplicate_icon_01.png">
              <span>选择查重系统</span>
            </li>
            <li class="paper_bg_2">
              <img src="../../assets/images/duplicate_icon_02.png">
              <span>上传论文</span>
            </li>
            <li class="paper_bg_3">
              <img src="../../assets/images/duplicate_icon_03.png">
              <span>担保交易付款</span>
            </li>
            <li class="paper_bg_4">
              <img src="../../assets/images/duplicate_icon_04.png">
              <span>下载论文检测报告</span>
            </li>
            <li class="paper_bg_5">
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
            <ul v-show="version_num===1" class="system_content">
              <li v-for="(item,index) in classifyA" :key="index">
                <img class="version_img" :src='item.label_url'  alt="">
                <img class="leftHead_img" :src="item.pic">
                <div class="system_detail">
                  <h3><strong>{{item.price}}</strong>元/1篇</h3>
                  <span><strong>适用范围：</strong>{{item.apply}}</span>
                  <span><strong>说明：</strong>{{item.desc}}</span>
                  <span>已成交：529510件</span>
                  <button type="button" class="btn btn-warning btn-lg" @click="goUpload(item.cate,item.id)">立即检测</button>
                </div>
              </li>
            </ul>
          </transition>
          <transition name="fade" mode="in-out">
            <ul v-show="version_num===2" class="system_content">
              <li v-for="(item,index) in classifyB" :key="index">
                <img class="version_img" :src='item.label_url'  alt="">
                <img class="leftHead_img" :src="item.pic">
                <div class="system_detail">
                  <h3><strong>{{item.price}}</strong>元/1篇</h3>
                  <span><strong>适用范围：</strong>{{item.apply}}</span>
                  <span><strong>说明：</strong>{{item.desc}}</span>
                  <span>已成交：529510件</span>
                  <button type="button" class="btn btn-warning btn-lg" @click="goUpload(item.cate,item.id)">立即检测</button>
                </div>
              </li>
            </ul>
          </transition>
          <transition name="fade" mode="in-out">
            <ul v-show="version_num===3" class="system_content">
              <li v-for="(item,index) in classifyC" :key="index">
                <img class="version_img" :src='item.label_url'  alt="">
                <img class="leftHead_img" :src="item.pic">
                <div class="system_detail">
                  <h3><strong>{{item.price}}</strong>元/1篇</h3>
                  <span><strong>适用范围：</strong>{{item.apply}}</span>
                  <span><strong>说明：</strong>{{item.desc}}</span>
                  <span>已成交：529510件</span>
                  <button type="button" class="btn btn-warning btn-lg" @click="goUpload(item.cate,item.id)">立即检测</button>
                </div>
              </li>
            </ul>
          </transition>
          <transition name="fade" mode="in-out">
            <ul v-show="version_num===4" class="system_content">
              <li v-for="(item,index) in classifyD" :key="index">
                <img class="version_img" :src='item.label_url'  alt="">
                <img class="leftHead_img" :src="item.pic">
                <div class="system_detail">
                  <h3><strong>{{item.price}}</strong>元/1篇</h3>
                  <span><strong>适用范围：</strong>{{item.apply}}</span>
                  <span><strong>说明：</strong>{{item.desc}}</span>
                  <span>已成交：529510件</span>
                  <button type="button" class="btn btn-warning btn-lg" @click="goUpload(item.cate,item.id)">立即检测</button>
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
          <div style="width:1260px;margin:auto;position: relative;margin-left:-630px;left:50%;">
            <el-carousel trigger="click" arrow="never" height="520px">
              <el-carousel-item v-for="(itemImg,index) in scImgobj" :key="index">
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
    <div style="position: fixed;right:20px;bottom:120px;z-index: 999;display: flex;flex-direction: column;align-items: center">
      <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=3506464470&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:3506464470:52" alt="点击这里给我发消息" title="点击这里给我发消息"/></a>
      <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2108064819&site=qq&menu=yes"><img border="0"  src="http://wpa.qq.com/pa?p=2:2108064819:41" alt="点击这里给我发消息" title="点击这里给我发消息"/></a>
    </div>
  </div>
</template>
<script>
  import Footer from '@/components/Footer'
  import Header from '@/components/Header'
  import end_article from './models/end_article'
  import {getSlide_pic, getInterfaces,get_Partners} from '../../api/get_homeData'
  export default {
    components: {Header, end_article, Footer},
    data() {
      return {
        slide_pic: [],
        version_num: 1,
        sc: [],
        scImgobj: {},
        classifyA:[],
        classifyB:[],
        classifyC:[],
        classifyD:[],
        url_pic:process.env.BASE_URL,
      }
    },
    created() {
      this.getInitData();
    },
    props: {
      category: Array,
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
        getInterfaces(pic_data).then(res => {
          res.forEach((item)=>{
            item.pic='http://www.yifulunwen.com'+item.pic;
            item.label_url='http://www.yifulunwen.com'+item.label_url;
          });
          if (res) {
            for(let i=0;i<res.length;i++){
              if(res[i].cate==='1'){
                this.classifyA.push(res[i]);
              }
              if(res[i].cate==='2'){
                this.classifyB.push(res[i]);
              }
              if(res[i].cate==='3'){
                this.classifyC.push(res[i]);
              }
              if(res[i].cate==='4'){
                this.classifyD.push(res[i])
              }
            }
          }
        });
        get_Partners(pic_data).then(res=>{
          if(res){
            res.forEach((item)=>{
              this.sc.push('http://www.yifulunwen.com'+item.pic);
            });
            let page = Math.ceil(this.sc.length / 15);
            for (let i = 1; i <= page; i++) {
              this.scImgobj[i-1]= this.sc.slice((i - 1) * 15, i * 15);
            }
          }
        })
      },
      optionsVersion(num) {
        this.version_num = num;
      },
      goUpload(cate,id){
        this.$router.push({path:'/vipManage/upload',query:{cate:cate,id:id}})
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

  .header_bg {
    width: 100%;
    height: 100px;
    background-color: #131516;
    position: absolute;
    z-index: 111;
    opacity: .9;
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
          padding: 60px 50px 45px;
          box-shadow: 5px 5px 5px #dedede;
          span {
            display: inline-block;
            margin-top: 25px;
            font-size: 14px;
          }
        }
        .paper_bg_1 {
          background: url("../../assets/images/a1.png") no-repeat;
          background-position: -7px;
        }
        .paper_bg_2 {
          background: url("../../assets/images/a2.png") no-repeat;
          background-position: -7px;
        }
        .paper_bg_3 {
          background: url("../../assets/images/a3.png") no-repeat;
          background-position: -7px;
        }
        .paper_bg_4 {
          background: url("../../assets/images/a4.png") no-repeat;
          background-position: -7px;
        }
        .paper_bg_5 {
          background: url("../../assets/images/a5.png") no-repeat;
          background-position: -7px;
        }
      }
    }
    .system {
      width: 1260px;
      margin: auto;
      padding-bottom: 105px;
      .system_nav {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
        li {
          margin: auto 56px;
          font-size: 18px;
          cursor: pointer;
        }
      }
      .system_contentBox {
        min-height: 765px;
        .system_content {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          li {
            position: relative;
            display: flex;
            align-items: flex-start;
            width: 49%;
            height: 382px;
            margin-top: 20px;
            border: 1px solid #e7e7e7;
            padding: 45px 0 40px 60px;
            background: #fafafa;
            box-shadow: -5px 5px 10px #dedede;
            cursor: pointer;
            img.version_img {
              position: absolute;
              right: 0;
              top: 0;
              width: 75px;
              height: 75px;
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
              width: 370px;
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
                position: absolute;
                bottom: 110px;
              }
              .btn {
                position: absolute;
                bottom: 40px;
                background: #e29f2b;
                color: #000;
              }
            }
          }
          li:hover {
            box-shadow: -10px 15px 40px #666;
          }
        }
      }

      .system_module:last-child {
        margin-bottom: 40px;
      }
      .fade-enter-active {
        transition: all 1.5s;
      }
      .fade-leave-active {
        transition: all .7s;
      }
      .fade-enter, .fade-leave-to {
        transform: translateX(260px);
        opacity: 0;
      }
    }
    .advantage {
      padding: 0 80px;
      background-color: #fafafa;
      .advantage_content {
        .partner {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          li {
            width: 18%;
            height: auto;
            margin: 10px auto
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

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
          <marquee behavior="scroll" scrollamount="2" scrolldelay="2" direction="up" bgcolor="#fafafa">
            <span>本平台所有检测系统均直接调用官方的检测引擎和数据库，通过本平台检测结果与官方一致，得出的检测报告均可在各官方查验真伪。请同学们放心使用</span>
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
            <div v-show="version_num===1">
              <el-carousel trigger="click" :autoplay="false" arrow="never" height="782px">
                <el-carousel-item v-for="(item,index) in zw" :key="index">
                  <ul class="system_content">
                    <li v-for="(itemData,_index) in item">
                      <img class="version_img" :src='itemData.label_url'  alt="">
                      <img class="leftHead_img" :src="itemData.pic">
                      <div class="system_detail">
                        <h3><strong>{{itemData.price}}</strong>元/篇</h3>
                        <span><strong>适用范围：</strong>{{itemData.apply}}</span>
                        <span><strong>说明：</strong>{{itemData.desc}}</span>
                        <span>已成交：{{dealArr1[_index]}}件</span>
                        <button type="button" class="btn btn-warning btn-lg" @click="goUpload(itemData,_index)">立即检测</button>
                      </div>
                    </li>
                  </ul>
                </el-carousel-item>
              </el-carousel>
            </div>
          </transition>
          <transition name="fade" mode="in-out">
            <div v-show="version_num===2">
              <el-carousel trigger="click" :autoplay="false" arrow="never" height="782px">
                <el-carousel-item v-for="(item,index) in wf" :key="index">
                  <ul class="system_content">
                    <li v-for="(itemData,_index) in item">
                      <img class="version_img" :src='itemData.label_url'  alt="">
                      <img class="leftHead_img" :src="itemData.pic">
                      <div class="system_detail">
                        <h3><strong>{{itemData.price}}</strong>元/千字符</h3>
                        <span><strong>适用范围：</strong>{{itemData.apply}}</span>
                        <span><strong>说明：</strong>{{itemData.desc}}</span>
                        <span>已成交：{{dealArr2[_index]}}件</span>
                        <button type="button" class="btn btn-warning btn-lg" @click="goUpload(itemData,_index)">立即检测</button>
                      </div>
                    </li>
                  </ul>
                </el-carousel-item>
              </el-carousel>
            </div>
          </transition>
          <transition name="fade" mode="in-out">
            <div v-show="version_num===3">
              <el-carousel trigger="click" :autoplay="false" arrow="never" height="782px">
                <el-carousel-item v-for="(item,index) in cx" :key="index">
                  <ul class="system_content">
                    <li v-for="(itemData,_index) in item">
                      <img class="version_img" :src='itemData.label_url'  alt="">
                      <img class="leftHead_img" :src="itemData.pic">
                      <div class="system_detail">
                        <h3><strong>{{itemData.price}}</strong>元/千字符</h3>
                        <span><strong>适用范围：</strong>{{itemData.apply}}</span>
                        <span><strong>说明：</strong>{{itemData.desc}}</span>
                        <span>已成交：{{dealArr3[_index]}}件</span>
                        <button type="button" class="btn btn-warning btn-lg" @click="goUpload(itemData,_index)">立即检测</button>
                      </div>
                    </li>
                  </ul>
                </el-carousel-item>
              </el-carousel>
            </div>
          </transition>
          <transition name="fade" mode="in-out">
            <div v-show="version_num===4">
              <el-carousel trigger="click" :autoplay="false" arrow="never" height="782px">
                <el-carousel-item v-for="(item,index) in wp" :key="index">
                  <ul class="system_content">
                    <li v-for="(itemData,_index) in item">
                      <img class="version_img" :src='itemData.label_url'  alt="">
                      <img class="leftHead_img" :src="itemData.pic">
                      <div class="system_detail">
                        <h3><strong>{{itemData.price}}</strong>元/千字符</h3>
                        <span><strong>适用范围：</strong>{{itemData.apply}}</span>
                        <span><strong>说明：</strong>{{itemData.desc}}</span>
                        <span>已成交：{{dealArr4[_index]}}件</span>
                        <button type="button" class="btn btn-warning btn-lg" @click="goUpload(itemData,_index)">立即检测</button>
                      </div>
                    </li>
                  </ul>
                </el-carousel-item>
              </el-carousel>
            </div>
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
    <div id="floatTools" class="rides-cs">
      <div class="floatL">
        <a style="display: block" id="aFloatTools_Show" class="btnOpen" title="查看在线客服" @click="kefu_open" href="javascript:void(0);">
          展开</a>
        <a style="display: none" id="aFloatTools_Hide" class="btnCtn" title="关闭在线客服" @click="kefu_close" href="javascript:void(0);">
          收缩</a> </div>
      <div id="divFloatToolsView" class="floatR" style="display: none">
        <div class="cn">
          <h3 class="titZx">销售客服</h3>
          <ul>
            <li><span>昭君</span>
              <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2954356724&site=qq&menu=yes">
                <img border="0" src="http://wpa.qq.com/pa?p=2:2954356724:41" alt="点击这里给我发消息" title="点击这里给我发消息"/>
              </a>
            </li>
            <li><span>满天星</span>
              <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=3003415856&site=qq&menu=yes">
                <img border="0" src="http://wpa.qq.com/pa?p=2:3003415856:41" alt="点击这里给我发消息" title="点击这里给我发消息"/>
              </a>
            </li>
            <li><span>芒果</span>
              <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1905359604&site=qq&menu=yes">
                <img border="0" src="http://wpa.qq.com/pa?p=2:1905359604:41" alt="点击这里给我发消息" title="点击这里给我发消息"/>
              </a>
            </li>
            <li><span>张彩</span>
              <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2649034547&site=qq&menu=yes">
                <img border="0" src="http://wpa.qq.com/pa?p=2:2649034547:41" alt="点击这里给我发消息" title="点击这里给我发消息"/>
              </a>
            </li>
            <li><span>海珠</span>
              <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=368947306&site=qq&menu=yes">
                <img border="0" src="http://wpa.qq.com/pa?p=2:368947306:41" alt="点击这里给我发消息" title="点击这里给我发消息"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
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
        scImgobj: [],
        classify_wf:[],
        classify_cx:[],
        classify_wp:[],
        classify_zw:[],
        zw:[],
        wf:[],
        cx:[],
        wp:[],
        dealArr1:['539611','520314','328517','429610','524530','459560','432118','726413'],
        dealArr2:['539631','231312','65464','156454','875416','154656','5641654','15634'],
        dealArr3:['95655','165456','95454','14554','65545','789545','52411','15454'],
        dealArr4:['216554','89765','64566','98566','524530','459560','432118','788654'],
      }
    },
    created() {
      this.getInitData();
    },
    props: {
      category: Array,
    },
    methods: {
      async getInitData() {
        let pic_data = {
          username: '',
          password: '',
          token: 'meichenghuilian20181108'
        };
        getSlide_pic(pic_data).then(res => {
          if (res) {
            res.forEach((item, index) => {
              let reg = /D:\\(WWW)\\(lunwen)\\(public)\\/;
              let pic = item.pic.replace(reg, 'https://www.yifulunwen.com');
              this.slide_pic.push(pic);
            })
          }
        });
        getInterfaces(pic_data).then(res => {
          res.forEach((item)=>{
            item.pic='https://www.yifulunwen.com'+item.pic;
            item.label_url='https://www.yifulunwen.com'+item.label_url;
          });
          if (res) {
            for(let i=0;i<res.length;i++){
              if(res[i].cate==='1'){
                this.classify_wf.push(res[i]);
              }
              if(res[i].cate==='2'){
                this.classify_cx.push(res[i]);
              }
              if(res[i].cate==='3'){
                this.classify_wp.push(res[i]);
              }
              if(res[i].cate==='4'){
                this.classify_zw.push(res[i])
              }
            }
          }
          this.carouselClassify(this.zw,this.classify_zw,4);
          this.carouselClassify(this.wp,this.classify_wp,4);
          this.carouselClassify(this.wf,this.classify_wf,4);
          this.carouselClassify(this.cx,this.classify_cx,4);
        });
        await get_Partners(pic_data).then(res=>{
          if(res){
            res.forEach((item)=>{
              this.sc.push('http://www.yifulunwen.com'+item.pic);
            });
            this.carouselClassify(this.scImgobj,this.sc,15);
          }
        })
      },
      optionsVersion(num) {
        this.version_num = num;
      },
      goUpload(item,_index){
        this.$router.push({path:'/vipManage/upload',query:{system_index:_index,fcss_cateId:item.cate}});
        sessionStorage.setItem('systemItem',JSON.stringify(item));
      },
      carouselClassify(overallArr,dataArr,numbers){
        let page = Math.ceil(dataArr.length / numbers);
        for (let i = 1; i <= page; i++) {
          overallArr.push(dataArr.slice((i - 1) * numbers, i * numbers));
        }
      },
      //客服
      kefu_open(){
        $('#divFloatToolsView').animate({width: 'show',height:'show', opacity: 'show'},
          function(){ $('#divFloatToolsView').show();});
        $('#aFloatTools_Show').attr('style','display:none');$('#aFloatTools_Hide').attr('style','display:block');
      },
      kefu_close(){
        $('#divFloatToolsView').animate({width: 'hide',height:'hide', opacity: 'hide'},function(){ $('#divFloatToolsView').hide(); });$('#aFloatTools_Show').attr('style','display:block');$('#aFloatTools_Hide').attr('style','display:none');
      },
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
    border-bottom: 1px double #e5e5e5;
    .advertising_bg {
      position: relative;
      width: 1260px;
      height: 100%;
      margin-left: -630px;
      left: 56%;
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
      padding-bottom: 70px;
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
          justify-content: flex-start;
          padding-left: 3%;
          flex-wrap: wrap;
          li {
            position: relative;
            display: flex;
            align-items: flex-start;
            width: 45%;
            margin-left: 1%;
            margin-right: 1%;
            height: 325px;
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
              margin-right: 30px;
              margin-top: 30px;
              width: 90px;
              height: 90px;
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
                font-size:16px;
              }
              span{
                color:#7e7e7e;
                font-size:15px;
              }
              h3 {
                margin-bottom: 25px;
                font-size: 25px;
                strong {
                  color: #e29f2b;
                  font-size: 26px;
                  display: inline-block;
                  margin-right: 5px;
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
            //box-shadow: -10px 15px 40px #666;
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
            height: 108px;
            margin: 10px auto;
            img{
              height:100%;
            }
          }
        }
      }
    }
  }

  /*在线客服代码*/
  .rides-cs { background:rgba(51,51,51,0.9); position: fixed; bottom: 130px; right: 1px; _position: absolute; z-index: 999; filter:progid:DXImageTransform.Microsoft.gradient(enabled='true',startColorstr='#E5333333', endColorstr='#E5333333');}
  .rides-cs a { color: #00A0E9;}
  .rides-cs a:hover { color: #ff8100; text-decoration: none;}
  .rides-cs .floatL { width: 36px; float:left; position: relative; z-index:1;}
  .rides-cs .floatL a { font-size:0; text-indent: -999em; display: block;}
  .rides-cs .floatR { width: 130px; float: left; padding: 5px; overflow:hidden;}
  .rides-cs .floatR .cn { background: #F7F7F7; }
  .rides-cs .cn h3 { font-size: 14px; color: #333; font-weight:600; line-height: 24px; padding: 5px}
  .rides-cs .cn ul { padding: 0 0 0 8px;}
  .rides-cs .cn ul li { line-height: 38px; height:38px; border-bottom: solid 1px #E6E4E4; overflow: hidden;
    display: flex;justify-content:space-between;align-items: center}
  .rides-cs .cn ul li span { color: #777;}
  .rides-cs .cn ul li img { vertical-align: middle;width:55px;}
  .rides-cs .btnOpen, .rides-cs .btnCtn {  position: relative; z-index:9; top:0; left: 0;  background-image: url('../../assets/images/shopnc.png'); background-repeat: no-repeat; display:block; width: 32px; height: 155px; padding: 8px;}
  .rides-cs .btnOpen { background-position: -410px 0;}
  .rides-cs .btnCtn { background-position: -450px 0;}
  .rides-cs ul li.top { border-bottom: solid #ACE5F9 1px;}
  .rides-cs ul li.bot { border-bottom: none;}

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

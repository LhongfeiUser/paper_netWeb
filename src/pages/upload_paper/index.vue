<template>
  <div class="upload_paper">
    <div class="system_option">
      <h3>检测系统选择</h3>
      <div class="option_content">
        <ul>
          <li>知网系统</li>
          <li><a href="javascript:void(0)">知网小分解系统</a></li>
          <li><a href="javascript:void(0)">知网大分解系统</a></li>
          <li><a href="javascript:void(0)">知网本科PMLC系统</a></li>
          <li><a href="javascript:void(0)">知网硕博VIP系统</a></li>
        </ul>
        <ul>
          <li>修改系统</li>
          <li><a href="javascript:void(0)">CheckPass检测系统</a></li>
          <li><a href="javascript:void(0)">PaperPass检测系统</a></li>
          <li><a href="javascript:void(0)">维普论文检测系统</a></li>
          <li><a href="javascript:void(0)">Gocheck论文检测系统</a></li>
        </ul>
      </div>
    </div>
    <div class="article_upload">
      <ul id="myTab" class="nav nav-tabs">
        <li class="active"><a href="#single" data-toggle="tab">单篇上传</a></li>
        <li><a href="#More_than" data-toggle="tab">多篇上传</a></li>
        <li><a href="#download" data-toggle="tab">下载报告</a></li>
      </ul>
      <div id="myTabContent" class="tab-content">
        <div class="tab-pane fade in active" id="single">
          <form class="form-horizontal" role="form">
            <div class="form-group">
              <label class="control-label">论文题目</label>
              <div class="col-sm-5">
                <input class="form-control" type="text" maxlength="200" placeholder="论文题目不超过200字（*必填）" v-model="single_name">
              </div>
            </div>
            <div class="form-group">
              <label class="control-label">文章作者</label>
              <div class="col-sm-5">
                <input class="form-control" type="text" maxlength="15" placeholder="作者名字不能超过15个字（*必填）">
              </div>
            </div>
            <div class="form-group">
              <label class=" control-label">待检论文</label>
              <div class="col-sm-4">
                <input class="form-control" v-model="single_content" type="text" placeholder="仅支持word文档.doc和.docx格式">
              </div>
              <div class="">
                <input type="file" ref="paperUpload" accept=".doc,.docx" style="display: none;" @change="getArticle">
                <button type="button" class="btn btn-outline-warning" @click="single_upload">上传</button>
              </div>
            </div>
          </form>
          <div class="apply">
            <span class="apply_way">支付方式</span>
            <div class="apply_content">
              <div class="apply_zfb" @click="apply_zfb">
                <img src="../../assets/images/zhifubao.png">
                <span>支付宝支付</span>
              </div>
              <div class="apply_wx" @click="apply_wx">
                <img src="../../assets/images/wx.png">
                <span>微信支付</span>
              </div>
              <div style="display: none;" ref="showApply">666666666</div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="More_than">
          <div class="naming_rule">
            <span class="naming_rule_title">命名规则</span>
            <div class="naming_rule_detail">
              <span>上传的检测文献文件名请按以下格式命名，有助于系统提取作者姓名。</span> <br>
              <span class="rule">格式规则：序号_作者姓名_文件标题.doc</span>
              <p>
                例如：1_小明_信息管理系统的的设计.doc <br>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2_小红_人口增长与可持续发展.doc
              </p>
            </div>
          </div>
          <div class="under_detection">
            <div class="form-group">
              <label class="control-label">待检论文</label>
              <div style="margin-right:20px;">
                <input class="form-control" v-show="isShow"  disabled="disabled" type="text" placeholder="仅支持word文档.doc和docx格式">
                <div class="upload_success" v-for="(item,index) in filesList"  v-show="!isShow">
                  <input class="form-control" type="text" :value="item.name"> <i class="iconfont icon-shanchu1" @click="upload_delete(index)"></i>
                </div>
                <input ref="more_paperUpload" style="display: none;" type="file" multiple="multiple" @change="getMoreArticle">
              </div>
            </div>
            <button type="button" class="btn btn-outline-warning" @click="more_upload">上传</button>
          </div>
          <div class="apply">
            <span class="apply_way">支付方式</span>
            <div class="apply_content">
              <div class="more_apply_zfb" data-toggle="modal" data-target="#myModal" @click="more_apply_zfb">
                <img src="../../assets/images/zhifubao.png">
                <span>支付宝支付</span>
              </div>
              <div class="more_apply_wx" data-toggle="modal" data-target="#myModal" @click="more_apply_wx">
                <img src="../../assets/images/wx.png">
                <span>微信支付</span>
              </div>
              <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-body">
                      <img src="../../assets/images/footerQr_01.png">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="download"  @click="isOrder=false">
          <div class="form-group ">
            <label class="control-label">订单编号</label>
            <input type="text" class="form-control col-sm-4" placeholder="点击橙色字，查看在哪里找到订单号">
            <button type="button" class="btn btn-outline-warning">查询结果</button>
          </div>
          <span>什么是 <a href="javascript:void (0)" @click.stop="userClick(0)">【支付宝】</a> <a href="javascript:void(0)" @click.stop="userClick(1)">【微信】</a>订单编号？</span>
          <div v-show="isOrder" style="width:200px;"  @click.stop="isOrder=true">
            <img :src="currentNum===0?orderImg.zfb:orderImg.wx">
          </div>
          <div class="line"></div>
          <div class="notice">
            <h3>下载报告须知：</h3>
            <ul>
              <li>1、刷新结果：点击【查询结果】按钮刷新，请勿刷新页面</li>
              <li>2、报告等待时间：不同查重系统的检测时间不同，请耐心等待。</li>
              <li>3、知网系统下载：论文提交成功后40分钟-1个小时左右出结果，23:00后提交的论文请次日早上9:00后来下载报告，提交后请耐心等待，提交后不予退款。</li>
              <li>4、订单编号格式为：T+20位数字组合格式，输入不要留空格，请勿输入错误格式和错误订单编号。</li>
              <li>
                5、查看订单编号有以下3种渠道
              </li>
              <li>①微信支付-查看账单-商户单号。</li>
              <li>②支付宝-朋友-服务提醒（含支付助手）-商户订单号</li>
              <li>③必过论文公众号-订单状态提醒-订单编号</li>
              <li>
                6、所有的报告都需要解压查看，请用最新的解压软件解压
              </li>
              <li>
                7、大部分报告为网页形式，如果无法阅读报告，是因为您浏览器版本过低，或版本不兼容。
              </li>
              <li>
                8、请用最新的浏览器打开阅读（推荐：谷歌浏览器、QQ浏览器、IE9以上浏览器）
              </li>
              <li>
                9、报告下载：整个检测过程系统完全自助检测 ，封闭式运行，无人工干预，每一位用户都有自己独立的订单编号进行检测论文，服务器提供7天论文下载，超过7天则被删除，删除以后将无法恢复，确保您的论文不会被泄露和盗窃。请尽快下载报告到电脑永久保存。
              </li>
              <li>
                10、定稿如何选系统：不同的检测系统，使用不同论文对比库，所以检测结果极少有相同的。您学校用什么系统来审核论文，选择和学校同样的检测系统，检测结果和学校是一样的，不同的检测系统的检测结果是不一样的！
              </li>
              <li>
                11、检测内容的标准：有些学校只测正文，有些测正文和参考文献，有些甚至连声明、致谢都测。学校测的内容一旦有差异，结果就有少许差异。但是如果你提交检测的论文和提交给学校一样，没有任何改动，那么结果是一样的。
              </li>
              <li>
                12、正品检测报告：系统直通检测官网，是从官方下载的报告，支持所有报告验真，若有假冒，全额退款。如有任何的疑问可联系客服解决。
              </li>
              <li>
                13、0相似度是否正常：如检测结果为0，说明官网检测结果也是0，并非未检测，并非不准。只能说明你的论文在该检测系统的比对库里中没有重复的，即使你去官网检测也是这个结果。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow:true,
        single_name:'',
        single_content:'',
        filesList:[],
        isOrder:false,
        orderImg:{
          zfb:require('../../assets/images/head.png'),
          wx:require('../../assets/images/login_bg.png')
        },
        currentNum:''
      }
    },
    created() {
    },
    mounted() {
      $('#myTab a:first').tab('show')
    },
    methods: {
      // 单篇上传
      single_upload() {
        this.$refs.paperUpload.click();
      },
      getArticle(e){
        let file = e.target.files[0];
        console.log(file);
        this.single_name=file.name.split('.')[0];
        this.single_content=file.name
      },
      apply_zfb() {
        this.$refs.showApply.style.display = 'block'
      },
      apply_wx() {
        this.$refs.showApply.style.display = 'block'
      },


      // 多篇上传
      more_upload(){
        this.$refs.more_paperUpload.click();
      },
      getMoreArticle(e){
        let files = e.target.files;
        // console.log(files)
        this.filesList=files;
        this.isShow = false;
      },
      upload_delete(index){
      },
      more_apply_zfb() {
        this.$refs.more_showApply.style.display = 'block'
      },
      more_apply_wx() {
        this.$refs.more_showApply.style.display = 'block'
      },

      //下载报告
      userClick(num){
        this.currentNum=num;
        this.isOrder=true;
      }
    }
  }
</script>

<style lang="less">
  .upload_paper {
    .system_option {
      h3 {
        color: #555555;
        border-bottom: 1px dashed #d2d2d2;
        padding-bottom: 10px;
      }
      .option_content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        ul {
          display: flex;
          justify-content: flex-start;
          margin: 20px 0 0;
          li {
            margin-left: 40px;
            a {
              color: #888;
              padding-bottom: 5px;
            }
            a:hover {
              color: orangered;
            }
            a:focus {
              border-bottom: 2px solid orangered;
            }
          }
          li:nth-child(1) {
            color: #d2d2d2;
            padding-right: 10px;
          }
        }
      }
    }
    .article_upload {
      border: 1px solid #efefef;
      background-color: #efefef;
      margin-top: 20px;
      input::-webkit-input-placeholder {
        color: #aab2bd;
        font-size: 14px;
        text-align: left;
      }
      button:focus{
        box-shadow: none;
      }
      .nav-tabs {
        border: none;
        background-color: #fefefe;
        padding: 20px;
        .active {
          color: #f49f00;
        }
        li {
          margin: auto 20px;
          a:hover {
            color: #f49f00;
          }
        }
      }
      .tab-content {
        margin-top: 40px;
        padding:0 40px;
        #single {
          .form-horizontal {
            input{
              font-size:16px;
            }
            .form-group {
              display: flex;
              align-items: center;
              .control-label {
                color: #828282;
                text-align: right;
              }
              .form-control {
                color: #888;
                font-size: 16px;
              }
              .form-control:focus {
                box-shadow: none;
              }
            }
          }
          .apply {
            display: flex;
            color: #888;
            .apply_way {
              padding-left: 0;
            }
            .apply_content {
              display: flex;
              .apply_zfb, .apply_wx {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                img {
                  width: 60px;
                  height: 60px;
                  margin-bottom: 20px;
                  vertical-align: center;
                }
              }
              .apply_zfb {
                margin: auto 50px;
              }
            }
          }
        }
        #More_than{
          .naming_rule,.under_detection,.apply{
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
          }
          .naming_rule{
            .naming_rule_title{
              color:#888;
              margin-right:40px;
            }
            .naming_rule_detail{
              margin-top:10px;
              color:#555;
              font-size:16px;
              span{
                display: inline-block;
                margin:10px auto;
              }
              .rule{
                color:red;
              }
              :last-child{
                color: #888;
              }
            }
          }
          .under_detection{
            display: flex;
            flex-direction: column;
            margin:40px auto;
            button{
              margin-left:100px;
            }
            .form-group{
              display: flex;
              align-items: center;
              .upload_success{
                position: relative;
                i{
                  position: absolute;
                  top:0;
                  right:0;
                  font-size:24px;
                  color:#555;
                  cursor: pointer;
                }
              }
              .form-control{
                margin:10px auto;
                padding-right:25px;
                color:#888;
                font-size:16px;
              }
              .form-control:focus{
                box-shadow: none;
              }
              .control-label{
                margin-right:40px;
                color:#888;
              }
            }
          }
          .apply_content{
            display: flex;
          }
          .apply{
            .apply_way{
              color:#888;
            }
            .more_apply_zfb,.more_apply_wx{
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-left:40px;
              color:#888;
              cursor: pointer;
              img{
                width:60px;
                height:60px;
                vertical-align: center;
                margin-bottom:10px;
              }
            }
          }
        }
        #download{
          color: #888;
          .form-group{
            display: flex;
            align-items: center;
            .form-control{
              margin: auto 20px;
            }
            .form-control:focus{
              box-shadow: none;
            }
          }
          span{
            font-size:14px;
            display: inline-block;
            margin:10px 0 20px 80px;
            a{
              color:#ffc107;
            }
          }
          .line{
            width:100%;
            height:5px;
            margin:40px auto;
            background-color: #fff;
            border-radius:10px;
          }
          .notice{
            margin-top:20px;
            h3{
              margin: 10px auto;
              font-size:18px;
              color:#000;
            }
            ul{
              padding:0 20px;
              li{
                margin:15px auto;
                font-size:16px;
                color:orangered;
              }
            }
          }
        }
      }
    }
  }
</style>

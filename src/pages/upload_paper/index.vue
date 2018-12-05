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
        <div class="tab-pane fade in active" id="single" @click="single_isApply_show=false">
          <form class="form-horizontal" role="form">
            <div class="form-group">
              <label class="control-label">论文题目</label>
              <div class="col-sm-5">
                <input class="form-control" type="text" maxlength="200" placeholder="论文题目不超过200字（*必填）"
                       v-model="single_name">
              </div>
            </div>
            <div class="form-group">
              <label class="control-label">文章作者</label>
              <div class="col-sm-5">
                <input class="form-control" type="text" maxlength="15" placeholder="作者名字不能超过15个字（*必填）">
              </div>
            </div>
            <div class="form-group">
              <label class="control-label">手机号码</label>
              <div class="col-sm-5">
                <input class="form-control" type="text" v-model="single_phoneCode" maxlength="11"
                       placeholder="请您输入正确手机号">
              </div>
            </div>
            <div class="form-group">
              <label class=" control-label">手机验证</label>
              <div class="col-sm-3">
                <input class="form-control" type="text" v-model="s_authCode" @burl.prevent="" placeholder="请输入收到的验证码">
              </div>
              <div class="">
                <button type="button" class="btn btn-outline-warning" v-show="single_authCode"
                        @click="single_getAuthCode">获取验证码
                </button>
                <button type="button" class="btn" v-show="!single_authCode" style="cursor:not-allowed;color:#888">
                  {{single_time}}重新发送
                </button>
              </div>
            </div>
            <div class="form-group">
              <label class=" control-label">学生证件</label>
              <div class="col-sm-4">
                <input class="form-control" v-model="single_studentImgName" type="text" placeholder="请上传学生证">
              </div>
              <div class="">
                <input type="file" ref="single_studentIdUpload" accept="image/gif,image/jpeg,image/jpg,image/png"
                       style="display: none;" @change="single_getStudentID">
                <button type="button" class="btn btn-outline-warning" @click="single_studentID">上传</button>
              </div>
            </div>
            <div class="form-group">
              <label class=" control-label">待检论文</label>
              <div class="col-sm-4">
                <input class="form-control" disabled v-model="single_content" type="text"
                       placeholder="仅支持word文档.doc和.docx格式">
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
              <div class="apply_zfb" @click.stop="single_apply(0)">
                <img :src="single_isApply_show===false?applyImg.zfb:(currentNum===0?applyImg.zfb_01:applyImg.zfb)">
                <span>支付宝支付</span>
              </div>
              <div class="apply_wx" @click.stop="single_apply(1)">
                <img :src="single_isApply_show===false?applyImg.wx:(currentNum===1?applyImg.wx_01:applyImg.wx)">
                <span>微信支付</span>
              </div>
            </div>
          </div>
          <div class="StagePayment" v-show="single_isApply_show" @click.stop="single_isApply_show=true">
            <img :src="currentNum===0?orderImg.zfb:orderImg.wx">
            <div class="need_payment">
              <span>需支付金额</span>
              <span>￥188</span>
            </div>
            <div class="payment_right">
              <div :class="currentNum===0?'zfb_bg':'wx_bg'">
                <img src="../../assets/images/scanCode.png">
                <span>扫码支付</span>
              </div>
              <div>
                <img src="../../assets/images/falult.png">
                <span>故障订单处理</span>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="More_than" @click="more_isApply_show=false">
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
          <form class="form-horizontal">
            <div class="form-group">
              <label class=" control-label">学生证件</label>
              <div class="col-sm-4">
                <input class="form-control" type="text" placeholder="请上传学生证" v-model="more_studentImgName">
              </div>
              <div class="">
                <input type="file" ref="more_studentIdUpload" accept="image/gif,image/jpeg,image/jpg,image/png"
                       style="display: none;" @change="more_getStudentID">
                <button type="button" class="btn btn-outline-warning" @click="more_studentID">上传</button>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label">手机号码</label>
              <div class="col-sm-5">
                <input class="form-control" type="text" v-model="more_phoneCode" maxlength="11"
                       placeholder="请您输入正确的手机号">
              </div>
            </div>
            <div class="form-group">
              <label class=" control-label">手机验证</label>
              <div class="col-sm-3">
                <input class="form-control" type="text" v-model="m_authCode" @burl.prevent="" placeholder="请输入收到的验证码">
              </div>
              <div class="">
                <button type="button" class="btn btn-outline-warning" v-show="more_authCode" @click="more_getAuthCode">
                  获取验证码
                </button>
                <button type="button" class="btn" v-show="!more_authCode" style="cursor:not-allowed;color:#888">
                  {{more_time}}重新发送
                </button>
              </div>
            </div>
          </form>
          <div class="under_detection">
            <div class="form-group">
              <label class="control-label">待检论文</label>
              <div style="padding-left:15px;">
                <input class="form-control" v-show="isShow" disabled="disabled" type="text"
                       placeholder="仅支持word文档.doc和docx格式">
                <div class="upload_success" v-for="(item,index) in filesList" v-show="!isShow">
                  <input class="form-control" type="text" :value="item.name"> <i class="iconfont icon-shanchu1"
                                                                                 @click="upload_delete(index)"></i>
                </div>
                <input ref="more_paperUpload" style="display: none;" type="file" accept=".doc,.docx" multiple="multiple"
                       @change="getMoreArticle">
              </div>
            </div>
            <button type="button" class="btn btn-outline-warning" @click="more_upload">上传论文</button>
          </div>
          <div class="apply">
            <span class="apply_way">支付方式</span>
            <div class="apply_content">
              <div class="more_apply_zfb" data-toggle="modal" @click.stop="more_apply(0)">
                <img :src="more_isApply_show===false?applyImg.zfb:(currentNum===0?applyImg.zfb_01:applyImg.zfb)">
                <span>支付宝支付</span>
              </div>
              <div class="more_apply_wx" data-toggle="modal" @click.stop="more_apply(1)">
                <img :src="more_isApply_show===false?applyImg.wx:(currentNum===1?applyImg.wx_01:applyImg.wx)">
                <span>微信支付</span>
              </div>
            </div>
          </div>
          <div class="StagePayment" v-show="more_isApply_show" @click.stop="more_isApply_show=true">
            <img :src="currentNum===0?orderImg.zfb:orderImg.wx">
            <div class="need_payment">
              <span>需支付金额</span>
              <span>￥188</span>
            </div>
            <div class="payment_right">
              <div :class="currentNum===0?'zfb_bg':'wx_bg'">
                <img src="../../assets/images/scanCode.png">
                <span>扫码支付</span>
              </div>
              <div>
                <img src="../../assets/images/falult.png">
                <span>故障订单处理</span>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="download" @click="isOrder=false">
          <div class="form-group">
            <label class="control-label">订单编号</label>
            <input type="text" class="form-control col-sm-4" v-model="orderCode" placeholder="点击橙色字，查看在哪里找到订单号">
            <button type="button" class="btn btn-outline-warning" @click="searchResult">查询结果</button>
          </div>
          <span>什么是 <a href="javascript:void (0)" @click.stop="userClick(0)">【支付宝】</a> <a href="javascript:void(0)"
                                                                                          @click.stop="userClick(1)">【微信】</a>订单编号？</span>
          <div v-show="isOrder" style="width:200px;" @click.stop="isOrder=true">
            <img :src="currentNum===0?orderImg.zfb:orderImg.wx">
          </div>
        </div>
        <div class="line"></div>
        <div class="rightFooter">
          <h3 class="rtfooter_til ">论文检测报告须知</h3>
          <ul>
            <li><span class="label bg-info">多订单号取报告</span> 如是合并订单检测，填写其中任何一个订单号即可下载。</li>
            <li><span class="label bg-success">如何修改论文？</span> 可根据报告标红去修改，如报告中含修改秘籍，可以参考。</li>
            <li><span class="label bg-warning">要严格OR要准确 </span> 严格＝准确，这是对报告结果的认识误区，严格并不一定准确，很多同学喜欢严格，而不问准确性。</li>
            <li><span class="label bg-danger">0相似度正常吗？</span>如检测结果为0，说明官网检测结果也是0，并非未检测，并非不准。只能说明你的论文在该检测系统的比对库里中没有重复的，即使你去官网检测也是这个结果。
            </li>
            <li><span class="label bg-primary">定稿如何选系统</span>不同的检测系统，使用不同论文对比库，所以检测结果极少有相同的。您学校用什么系统来审核论文，选择和学校同样的检测系统，检测结果和学校是一样的，不同的检测系统的检测结果是不一样的！
            </li>
            <li><span class="label bg-info">检测内容的标准</span>有些学校只测正文，有些测正文和参考文献，有些甚至连声明、致谢都测。学校测的内容一旦有差异，结果就有少许差异。但是如果你提交检测的论文和提交给学校一样，没有任何改动，那么结果是一样的。
            </li>
            <li><span class="label bg-success">正品检测报告！</span>请不要以"准"或"不准"等词语中差评，因为我们的系统直通检测官网，是从官方下载的报告，如有任何的疑问可联系店家解决。
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {uploadArticle, getAuth} from "@/api/upload_paper";

  export default {
    data() {
      return {
        isShow: true,
        single_studentImgName: '',
        single_phoneCode: '',
        single_name: '',
        single_content: '',
        s_authCode: '',
        single_isApply_show: false,
        isAuthCode: false,
        more_isApply_show: false,
        more_studentImgName: '',
        more_phoneCode: '',
        m_authCode: '',
        filesList: [],
        isOrder: false,
        applyImg: {
          zfb: require('../../assets/images/zhifubao.png'),
          zfb_01: require('../../assets/images/zfb_01.png'),
          wx: require('../../assets/images/wx.png'),
          wx_01: require('../../assets/images/wx_01.png'),
        },
        orderImg: {
          zfb: require('../../assets/images/footerQr_01.png'),
          wx: require('../../assets/images/footerQr_02.png')
        },
        currentNum: '',
        single_authCode: true,
        more_authCode: true,
        single_time: 0,
        more_time: 0,
        orderCode: null,
      }
    },

    created() {
    },
    mounted() {
      $('#myTab a:first').tab('show')
    },

    methods: {
      // 单篇上传
      single_studentID() { //学生证上传
        this.$refs.single_studentIdUpload.click();
      },
      single_getStudentID(e) { //获取学生证
        let file = e.target.files[0],
          type = file.name.substring(file.name.lastIndexOf('.')),
          AllImgExt = ".jpg|.jpeg|.gif|.png|",
          upLoadSize = 1024 * 1024;
        if (file.name.lastIndexOf('.') === -1) {
          this.$message.warning('路径不正确');
          return false
        }
        if (AllImgExt.indexOf(type + "|") === -1) {
          this.$message.error(type + '格式不支持');
          return false
        }
        if (file.size > upLoadSize) {
          this.$message.error('图片过大，请重新上传');
          return false;
        }
        this.single_studentImgName = file.name;
        let formdata = new FormData();
        formdata.append('file', file);
        uploadArticle(formdata).then(res => {
          console.log(res);
        })
      },

      single_upload() { //单篇文章上传
        if (1) {//this.isAuthCode
          this.$refs.paperUpload.click();
        } else {
          this.$message.error('请填写正确手机验证码');
        }
      },

      getArticle(e) { //获取上传文章
        let file = e.target.files[0];
        let type = file.name.substring(file.name.lastIndexOf('.')),
          ArrType = '.doc|.docx|',
          uploadSize = 10 * 1024 * 1024;
        if (ArrType.indexOf(type + '|') === -1) {
          this.$message.error(type + '文件格式不正确请重新上传');
          return false
        }
        if (file.size > uploadSize) {
          this.$message.error(file.name + '文件超过限制文件大小');
          return false
        }
        console.log(file);
        this.single_name = file.name.split('.')[0];
        this.single_content = file.name;
        let formdata = new FormData();
        formdata.append('file', file);
        uploadArticle(formdata).then(res => {
          if (res) {
            this.$message.success('上传成功');
          }
        })
      },

      single_apply(num) { //支付
        if (this.single_content !== '') {
          this.currentNum = num;
          this.single_isApply_show = true;
        } else {
          this.$message.error('请先上传论文');
        }
      },

      single_getAuthCode() { //获取手机验证
        if (/^1(3|4|5|6|8)\d{9}$/.test(this.single_phoneCode)) {
          this.single_authCode = false;
          this.single_time = 30;
          let single_timetimer = setInterval(() => {
            this.single_time--;
            if (this.single_time <= 0) {
              this.single_authCode = true;
              clearInterval(single_timetimer);
            }
          }, 1000);
          getAuth({phone_num: this.single_phoneCode}).then(res => {
            console.log(res.auth);
          })
        } else {
          this.$message.error('手机号码有误，请重新输入')
        }
      },

      // 多篇上传
      more_studentID() {
        this.$refs.more_studentIdUpload.click();
      },

      more_getStudentID(e) {
        let file = e.target.files[0],
          type = file.name.substring(file.name.lastIndexOf('.')),
          AllImgExt = ".jpg|.jpeg|.gif|.png|",
          upLoadSize = 1024 * 1024;
        if (file.name.lastIndexOf('.') === -1) {
          this.$message.warning('路径不正确');
          return false
        }
        if (AllImgExt.indexOf(type + "|") === -1) {
          this.$message.error(type + '格式不支持');
          return false
        }
        if (file.size > upLoadSize) {
          this.$message.error('图片过大，请重新上传');
          return false;
        }
        this.more_studentImgName = file.name
      },

      more_getAuthCode() {
        if (/^1(3|4|5|6|8)\d{9}$/.test(this.more_phoneCode)) {
          this.more_authCode = false;
          this.more_time = 30;
          let single_timetimer = setInterval(() => {
            this.more_time--;
            if (this.more_time <= 0) {
              this.more_authCode = true;
              clearInterval(single_timetimer);
            }
          }, 1000);
        } else {
          this.$message.error('手机号码有误，请重新输入')
        }
      },

      more_upload() {
        this.$refs.more_paperUpload.click();
      },

      getMoreArticle(e) {
        let files = e.target.files;
        let formdata = new FormData();
        for (let n of files) {
          let type = n.name.substring(n.name.lastIndexOf('.')),
            ArrType = '.doc|.docx|',
            uploadSize = 10 * 1024 * 1024;
          if (ArrType.indexOf(type + '|') === -1) {
            this.$message.error(type + '文件格式不正确请重新上传');
            return false
          }
          if (n.size > uploadSize) {
            this.$message.error(n.name + '文件超过限制文件大小');
            return false
          }
          this.filesList.push(n);
          formdata.append('file', n);
        }
        if (this.filesList.length > 0) {
          this.isShow = false;
          uploadArticle(formdata).then(res => {
            if(res){
              this.$message.success('上传成功');
              this.$refs.more_paperUpload.value=null;
            }
          })
        }
      },

      upload_delete(dx) {
        if (isNaN(dx) || dx > this.filesList.length) {
          return false;
        }
        for (let i = 0, n = 0; i < this.filesList.length; i++) {
          if (this.filesList[i] !== this.filesList[dx]) {
            this.filesList[n++] = this.filesList[i]
          }
        }
        this.filesList.length -= 1;
        if (this.filesList.length === 0) {
          this.isShow = true;
        }
        this.filesList = this.filesList.slice();
        console.log(this.filesList);
      },

      more_apply(num) {
        if (!this.isShow) {
          this.currentNum = num;
          this.more_isApply_show = true;
        } else {
          this.$message.error('请上传论文');
        }
      },
      //下载报告
      userClick(num) {
        this.currentNum = num;
        this.isOrder = true;
      },
      searchResult() {
        if (this.orderCode === null) {
          this.$message.error('订单号不能为空');
          return false
        }
        this.$alert(' <a href="http://pic28.photophoto.cn/20130818/0020033143720852_b.jpg" download="w3logo">下载保存</a>', 'HTML 片段', {
          dangerouslyUseHTMLString: true
        });
      }
    },
  }
</script>

<style scoped lang="scss">
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
      #myTab {
        li {
          font-size: 16px;
        }
      }
      input::-webkit-input-placeholder {
        color: #aab2bd;
        font-size: 14px;
        text-align: left;
      }
      button:focus {
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
        padding: 0 40px 20px;
        .StagePayment {
          width: 500px;
          height: 200px;
          margin: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #ffffff;
          img {
            width: 150px;
            height: 150px;
            margin-left: 30px;
          }
          .need_payment {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            margin-right: 80px;
            span:nth-child(2) {
              color: #f49f00;
              font-size: 24px;
              font-weight: 500;
            }
          }
          .payment_right {
            justify-content: flex-end;
            div {
              width: 100px;
              height: 100px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              img {
                width: 46px;
                height: 46px;
                vertical-align: center;
                margin: 0;
              }
            }
            .zfb_bg {
              background-color: #1aa1e6;
            }
            .wx_bg {
              background-color: #55ad23;
            }
            div:nth-child(1) {
              color: #fff;
            }
            div:nth-child(2) {
              background-color: #d5d5d5;
            }
          }
        }
        #single {
          .form-horizontal {
            input {
              font-size: 16px;
            }
            .form-group {
              display: flex;
              align-items: center;
              .control-label {
                color: #828282;
                text-align: right;
              }
              .form-control {
                color: #aab2bd;
                font-size: 14px;
                text-align: left;
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
        #More_than {
          .naming_rule, .under_detection, .apply {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
          }
          .naming_rule {
            .naming_rule_title {
              color: #888;
              margin-right: 40px;
            }
            .naming_rule_detail {
              margin-top: 10px;
              color: #555;
              font-size: 16px;
              span {
                display: inline-block;
                margin: 10px auto;
              }
              .rule {
                color: red;
              }
              :last-child {
                color: #888;
              }
            }
          }
          .form-horizontal {
            margin-top: 20px;
            input {
              font-size: 16px;
            }
            .form-group {
              display: flex;
              align-items: center;
              .control-label {
                color: #828282;
                text-align: right;
                margin-right: 20px;
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
          .under_detection {
            display: flex;
            flex-direction: column;
            margin-bottom: 40px;
            button {
              margin-left: 100px;
            }
            .form-group {
              display: flex;
              align-items: center;
              .upload_success {
                position: relative;
                input {
                  color: #aab2bd;
                  font-size: 14px;
                  text-align: left;
                }
                i {
                  position: absolute;
                  top: 0;
                  right: 0;
                  font-size: 24px;
                  color: #555;
                  cursor: pointer;
                }
              }
              .form-control {
                margin: 10px auto;
                padding-right: 25px;
                color: #888;
                font-size: 16px;
              }
              .form-control:focus {
                box-shadow: none;
              }
              .control-label {
                margin-right: 20px;
                color: #888;
              }
            }
          }
          .apply_content {
            display: flex;
          }
          .apply {
            .apply_way {
              color: #888;
            }
            .more_apply_zfb, .more_apply_wx {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-left: 40px;
              color: #888;
              cursor: pointer;
              img {
                width: 60px;
                height: 60px;
                vertical-align: center;
                margin-bottom: 10px;
              }
            }
          }
        }
        #download {
          color: #888;
          .form-group {
            display: flex;
            align-items: center;
            .form-control {
              margin: auto 20px;
            }
            .form-control:focus {
              box-shadow: none;
            }
          }
          span {
            font-size: 14px;
            display: inline-block;
            margin: 10px 0 20px 80px;
            a {
              color: #ffc107;
            }
          }
        }
        .line {
          width: 100%;
          height: 5px;
          margin: 40px auto;
          background-color: #fff;
          border-radius: 10px;
        }
        .rightFooter {
          width: 100%;
          background: #f8f8f8;
          padding: 28px 0 95px 0;
          .rtfooter_til {
            margin-left: 28px;
            padding-left: 35px;
            background: url(../../assets/images/inform.png) left center no-repeat;
            font-size: 18px;
            color: #666666;
            height: 20px;
            line-height: 20px;
          }
          ul {
            margin: 25px 0 0 30px;
            li {
              color: #878787;
              font-size: 15px;
              line-height: 28px;
              margin-bottom: 10px;
              padding-left: 160px;
              padding-right: 7%;
              position: relative;
              text-align: justify;
              span {
                display: inline-block;
                width: 140px;
                height: 22px;
                text-align: center;
                line-height: 22px;
                color: #fff;
                font-size: 14px;
                border-radius: 5px;
                padding: 0 13px;
                margin: 0;
                position: absolute;
                left: 0;
              }
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div class="upload_paper">
    <div class="system_option">
      <h3>检测系统选择</h3>
      <div class="option_content">
        <ul v-for="(item,index) in systemList" :key="index" :class="fcssId===index?'fhasActive':''">
          <li>{{item.title}}检测系统</li>
          <li @click="changeCate_id(itemData,itemIndex,index)" v-for="(itemData,itemIndex) in item.data">
            <a href="javascript:void(0)" :class="cssId===itemIndex?'hasActive':''">{{itemData.title}}</a>
          </li>
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
          <Upload_single :_orderPrice="_orderPrice" :cate_id="cate_id"></Upload_single>
        </div>
        <div class="tab-pane fade" id="More_than">
          <Upload_more :_orderPrice="_orderPrice" :cate_id="cate_id"></Upload_more>
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
          <el-dialog
            title="论文查重报告"
            :visible.sync="dialogVisible"
            width="30%">
            <a :href="reportUrl" download="报告" style="color:#0000ff">下载报告</a>
          </el-dialog>
        </div>
        <div class="line"></div>
        <Notice></Notice>
      </div>
    </div>
  </div>
</template>

<script>
  import Notice from './upload_model/report_notice'
  import Upload_single from './upload_model/upload_single'
  import Upload_more from './upload_model/upload_more'
  import Apply_model from './upload_model/apply_model'
  import {systemClassify, reportResult} from '@/api/upload_paper'

  export default {
    components: {Notice, Apply_model, Upload_single, Upload_more},
    data() {
      return {
        orderImg: {
          zfb: require('../../assets/images/footerQr_01.png'),
          wx: require('../../assets/images/footerQr_02.png')
        },
        isOrder: false,
        currentNum: '',
        orderCode: null,
        cate_id: 1,
        systemList: [],
        _orderPrice: null,
        cssId: 0,
        fcssId: 0,
        dialogVisible: false,
        reportUrl: '',
      }
    },
    created() {
      let generalizeUrl = window.location.href;
      sessionStorage.setItem('generalizeUrl', generalizeUrl);
      this.cssId = Number(this.$route.query.system_index) || 0;
      this.fcssId = this.$route.query.fcss_cateId-1 || 0;
      let c = this.fcssId;
      this.$emit('childIndex',c);
      let home_data = JSON.parse(sessionStorage.getItem('systemItem'));
      if (home_data) {
        this.cate_id = home_data.cate;
        this._orderPrice = home_data.price;
      }
      this.getClassify();
    },
    mounted() {
      $('#myTab a:first').tab('show');
    },
    methods: {
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
        this.dialogVisible = true;
        let formdata = new FormData();
        formdata.append('token', 'meichenghuilian20181108');
        formdata.append('trade_no', this.orderCode);
        reportResult(formdata).then(res => {
          if (res) {
            this.reportUrl = `https://www.yifulunwen.com/${res.url}`;
          } else {
            this.$message.error(res.msg)
          }
        });
      },
      getClassify() {
        systemClassify().then(res => {
          if (res) {
            this.systemList = res.result;
          }
        })
      },
      changeCate_id(item, itemIndex, findex) {
        this.cssId = itemIndex;
        this.fcssId = findex;
        this.cate_id = item.cate;
        this._orderPrice = item.price;
        this.$emit('childIndex',findex);
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
          margin: 15px 0 0;
          li {
            margin-left: 40px;
            a {
              color: #888;
              padding-bottom: 5px;
            }
            a:hover {
              color: orangered;
            }
          }
          li:nth-child(1) {
            color: #d2d2d2;
            padding-right: 10px;
          }
        }
        .fhasActive .hasActive {
          border-bottom: 2px solid orangered;
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
        }
        #More_than {
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
      }
    }
  }
</style>

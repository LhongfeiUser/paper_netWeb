<template>
  <div class="app-container">
    <ul class="generalizeLink">
      <li class="generalizeLink_item">
        <div class="generalizeLink_title">
          <span class="el-icon-info"/>
          <h5>您的专属推广网址:</h5>
        </div>
        <div class="generalizeLink_count link">
          <span>推广网址：<a href="http://www.baidu.com">www.baidu.com</a></span>
          <span>使用推广渠道：QQ/QQ群/微信/朋友圈等</span>
          <span>跟踪原理：<el-button type="primary" size="mini" @click="hh">点击了解</el-button></span>
        </div>
      </li>
      <li class="generalizeLink_item">
        <div class="generalizeLink_title">
          <span class="el-icon-info"/>
          <h5>您的专属推广二维码</h5>
        </div>
        <div class="generalizeLink_count QR_code">
          <div class="QR_codeDownload">
            <img :src="qrImg" width="100vw" height="100vw">
            <el-button type="primary" size="mini">
              <!--<span @click="downloadqrImg">下载保存</span>-->
              <a :href="baseload" download="wc.png">下载保存</a>
            </el-button>
          </div>
          <div class="QR_code_content">
            <span>推广二维码：左侧为您的专属二维码，一经扫码触碰，便可永久跟踪定位到您的名下</span>
            <span>适用渠道：微信、微信群、线下渠道（物料：宣传单、不干胶贴纸、海报、x展架等）</span>
            <span>跟踪原理：<el-button type="primary" size="mini" @click="hh">点击了解</el-button></span>
          </div>
        </div>
      </li>
      <li class="generalizeLink_item">
        <div class="generalizeLink_title">
          <span class="el-icon-info"/>
          <h5>您的专属推广海报：</h5>
        </div>
        <div class="generalizeLink_count poster">
          <div class="poster_create">
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540196843851&di=c82b7bb81919a0b8462506efb9b3682b&imgtype=0&src=http%3A%2F%2Fscimg.jb51.net%2Fallimg%2F140314%2F11-140314110FcI.jpg"
              width="100vw" height="100vw">
            <el-button type="primary" size="mini" @click="dialogVisible = true">一键生成</el-button>
            <el-dialog
              :visible.sync="dialogVisible"
              width="30%">
              <poster :imgurl="qrImg"></poster>
            </el-dialog>
          </div>
          <p style="text-align: justify;line-height:5vh;">
            此海报内容为【毕业论文免费查重】，已内嵌您的专属二维码，您可以直接一键生成推广海报，下载保存，将海报发到朋友圈、qq空间，微信群、qq群等。用户直接扫码，或者用户直接转发后扫码，系统已经识别用户ID，永久定位在您的名下，不管现在成交或者将来成交，都属于您的用户，都有分成。
          </p>
        </div>
      </li>
      <li class="generalizeLink_item">
        <div class="generalizeLink_title">
          <span class="el-icon-info"/>
          <h5>线下素材下载 & 线下物料申请制作：</h5>
        </div>
        <div class="generalizeLink_count download_made">
          <span>
            自费印刷（不可以报销）：提供印刷素材
            <el-button type="primary" size="mini">
              <a href="../assets/images/QR_code.png" download="印刷素材">素材下载</a>
            </el-button>
          </span>
          <span>
            在线申请（可以报销）：阅读【物料申请及报销政策】
            <el-button type="primary" size="mini">
              <a href="###">点击了解</a>
            </el-button>
            （若有疑问，请添加QQ:1240152678咨询，备注：物料申请），确定了解且没有疑问后，点右侧按钮
            <el-button type="primary" size="mini">
              在线申请物料
            </el-button>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {getQrcode} from '@/api/backstageApi/backstage'
  import poster from '@/backstage/poster'

  export default {
    data() {
      return {
        qrImg: null,
        dialogVisible: false,
        baseload:null,
      }
    },
    components: {poster},
    created() {
      this.getQrcodeData();
    },
    methods: {
      hh() {
        alert('1')
      },
      downloadqrImg() {
        let a = document.createElement("a");
        a.href = this.qrImg;
        a.download = "drcQrcode";
      },
      getQrcodeData() {
        console.log(sessionStorage.getItem('generalizeUrl'));
        let qrcodeData = {
          url: sessionStorage.getItem('generalizeUrl'),
          agent_id: 1,
        };
        getQrcode(qrcodeData).then(res => {
          if (res) {
            console.log(res);
            this.qrImg = res.path;
            this.baseload=res.base64;
          }
        })
      },
    }
  }
</script>

<style scoped lang="scss">
  .generalizeLink {
    .generalizeLink_item {
      border: 1px solid #f9f6f1;
      margin-bottom: 20px;
      background-color: #f9f9f9;
      border-radius: 10px;
      .generalizeLink_title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-color: #f9f0e2;
        height: 5vh;
        padding: 20px;
        span {
          margin-right: 5px;
        }
      }
      .generalizeLink_count {
        display: flex;
        flex-direction: column;
        padding: 20px;
        color: #606266;
      }
      .link {
        line-height: 6vh;
        span {
          display: inline-block;
          padding: 0 10px;
          margin-bottom: 10px;
        }
        :first-child {
          a {
            color: blue;
          }
        }
        :nth-last-child(1) {
          a {
            color: #fff;
          }
        }
      }
      .QR_code {
        flex-direction: row;
        justify-content: flex-start;
        .QR_codeDownload {
          margin-right: 5vw;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          img {
            margin-right: 10px;
          }
        }
        .QR_code_content {
          line-height: 8vh;
          span {
            display: block;
          }
        }
      }
      .poster {
        flex-direction: row;
        justify-content: flex-start;
        .poster_create {
          margin-right: 5vw;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          img {
            margin-right: 10px;
          }
        }
      }
    }
  }
</style>

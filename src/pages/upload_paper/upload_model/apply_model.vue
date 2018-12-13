<template>
    <div class="apply_box" @click="isApply_show=false">
      <div class="apply">
        <span class="apply_way">支付方式</span>
        <div class="apply_content">
          <div class="more_apply_zfb" data-toggle="modal" @click.stop="isApply(0)">
            <img :src="isApply_show?(isImg===0?applyImg.zfb_01:applyImg.zfb):applyImg.zfb">
            <span>支付宝支付</span>
          </div>
          <div class="more_apply_wx" data-toggle="modal" @click.stop="isApply(1)">
            <img :src="isApply_show?(isImg===1?applyImg.wx_01:applyImg.wx):applyImg.wx">
            <span>微信支付</span>
          </div>
        </div>
      </div>
      <div class="StagePayment" v-show="isApply_show">
        <img :src="orderImg">
        <div class="need_payment">
          <span>需支付金额</span>
          <span>￥188</span>
        </div>
        <div class="payment_right">
          <div :class="isImg===0?'zfb_bg':'wx_bg'">
            <img src="../../../assets/images/scanCode.png">
            <span>扫码支付</span>
          </div>
          <div>
            <img src="../../../assets/images/falult.png">
            <span>故障订单处理</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {getQrcode} from "@/api/upload_paper";
    export default {
        data(){
          return{
            isApply_show:false,
            isImg:null,
            applyImg: {
              zfb: require('../../../assets/images/zhifubao.png'),
              zfb_01: require('../../../assets/images/zfb_01.png'),
              wx: require('../../../assets/images/wx.png'),
              wx_01: require('../../../assets/images/wx_01.png'),
            },
            orderImg:'',
          }
        },
      methods:{
        isApply(num){
          this.isApply_show=true;
          this.isImg=num;
          let qrcodeData={
            agent_id:1,
            url:window.location.href,
          };
          getQrcode(qrcodeData).then(res=>{
            if(res){
              console.log(res);
              this.orderImg='http://zhangyucheng.51vip.biz:25743/'+res.path;
            }
          })

        }
      }
    }
</script>

<style scoped lang="scss">
  .apply_box{
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
    .apply_content {
      display: flex;
    }
    .apply {
      display: flex;
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
</style>

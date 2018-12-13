<template>
  <div class="app-container">
    <div class="applyForWithdraw">
      <div class="apply_title">
        <span class="el-icon-sold-out"/>
        <h4>申请提现</h4>
      </div>
      <div class="_apply_content">
        <div class="deposit">
          <span>账户余额</span>
          <span>￥0.00</span>
          <span @click="deposit()">提现</span>
        </div>
        <el-form :label-position="labelPosition" :model="formLabelAlign" label-width="80px">
          <el-form-item label="提现方式">
            <el-select v-model="value">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"/>
            </el-select>
          </el-form-item>
          <el-form-item label="提现账户">
            <el-input v-model="formLabelAlign.type"/>
          </el-form-item>
          <el-form-item label="提现姓名">
            <el-input v-model="formLabelAlign.name"/>
          </el-form-item>
        </el-form>
      </div>
      <div class="save_btn">
        <el-button class="el-button--primary">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {withdraw} from "../api/backstageApi/withdraw";

  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        options:
          [{
            value: '0',
            label: '支付宝'
          }, {
            value: '1',
            label: '银行卡'
          }, {
            value: '2',
            label: '微信'
          }],
        value: '支付宝'
      };
    },
    methods: {
      deposit() {
        let reqData = {
          token: 'meichenghuilian20181108',
          member_id: 3,
          get_money_name: 3,
          get_money_accout: 3,
          price: 3,
        };
        withdraw(reqData).then(res => {
          if(res){
            this.$message.success('提现成功');
          }
        });
      }
    }
  }
</script>

<style lang="scss">
  .el-input.el-input--suffix, .el-input {
    width: 20vw;
  }

  .applyForWithdraw {
    /*width:80vw;*/
    border: 1px solid #ebeef5;
    padding-bottom: 20vh;
    .save_btn {
      background-color: #f5f7fa;
      margin: 20px;
      height: 60px;
      line-height: 60px;
      .el-button {
        margin-left: 15vw;
      }
    }
  }

  .apply_title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #f5f7fa;
    color: #606266;
    span {
      margin: auto 1vw;
      font-size: 24px;
    }
  }

  ._apply_content {
    padding-left: 10vw;
    .deposit {
      margin: 20px 0 20px 1vw;
      span:nth-child(2) {
        margin: auto 15px;
      }
      span:nth-child(3) {
        color: #67c23A;
        cursor: pointer;
      }
    }
  }
</style>

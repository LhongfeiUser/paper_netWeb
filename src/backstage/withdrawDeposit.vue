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
          <span>￥{{surplus}}</span>
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
          <el-form-item label="提现金额">
            <el-input v-model="formLabelAlign.price"/>
          </el-form-item>
        </el-form>
      </div>
      <div class="save_btn">
        <el-button class="el-button--primary" @click="deposit()">提现</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import cookies from 'js-cookie';
  import {withdraw} from "../api/backstageApi/withdraw";
  import {getstatement} from "../api/backstageApi/backstage";
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: '',
          price:''
        },
        options:
          [{
            value: '0',
            label: '支付宝'
          }, {
            value: '1',
            label: '微信'
          }],
        value: '',
        surplus:0.00,
      };
    },
    created(){
      this.getMoney();
    },
    methods: {
      getMoney(){
        getstatement({agent_id:cookies.get('agent_id')}).then((res)=>{
          console.log(res);
          this.surplus=res.data[0].surplus;
        })
      },
      deposit() {
        let reqData = {
          token: 'meichenghuilian20181108',
          member_id: cookies.get('agent_id'),
          get_money_name: this.formLabelAlign.name,
          get_money_accout: this.value,
          price: this.formLabelAlign.price,
        };
        withdraw(reqData).then(res => {
          if(res &&res.code===200){
            this.$message.success('提现成功');
          }else {
            this.$message.error(res.msg);
          }
        });
      },
    }
  }
</script>

<style  lang="scss">
  .el-input.el-input--suffix, .el-input {
    width: 20vw;
  }
  .app-container .el-form-item{
    width:40%;
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
    padding:12px 0;
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

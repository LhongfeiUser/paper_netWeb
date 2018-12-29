<template>
  <div>
    <div class="orderDetail">
      <div class="orderDetail_title">
        <span class="el-icon-document"/>
        <h5>所有订单详情</h5>
      </div>
      <div style="display:flex;justify-content: end;">
        <el-select v-model="value">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
        <div class="block">
          <el-date-picker
            v-model="value6"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"/>
          <el-button class="el-button--primary">搜索</el-button>
        </div>
      </div>
    </div>
    <el-table
      :data="orderList"
      border
      style="width:100%">
      <el-table-column
        prop="order_num"
        label="订单号"
        align="center"
        width=""/>
      <el-table-column
        prop="name"
        label="成交金额"
        align="center"
        width=""/>
      <el-table-column
        prop="province"
        label="检测系统"
        align="center"
        width=""/>
      <el-table-column
        prop="city"
        label="成功/失败总篇数"
        align="center"
        width=""/>
      <el-table-column
        prop="zip"
        label="交易状态"
        align="center"
        width=""/>
      <el-table-column
        prop="zip"
        label="订单状态"
        align="center"
        width=""/>
      <el-table-column
        prop="zip"
        label="所属"
        align="center"
        width=""/>
      <el-table-column
        prop="date"
        label="创建时间"
        align="center"
        width=""/>
    </el-table>
    <el-pagination
      :total="num"
      background
      layout="prev, pager, next"
      @current-change="changePage"
    />
  </div>
</template>

<script>
  import {getorderDetail} from '@/api/backstageApi/backstage'

  export default {
    name: "OrderDetails",
    data() {
      return {
        options: [
          {
            value: '选项1',
            label: '检测系统1'
          }, {
            value: '选项2',
            label: '检测系统2'
          }, {
            value: '选项3',
            label: '检测系统3'
          }, {
            value: '选项4',
            label: '检测系统4'
          }, {
            value: '选项5',
            label: '检测系统5'
          }],
        value6: '',
        date: '2016-05-06', value: '所有检测系统',
        num: null,
        orderList: null,
        orderLists: null,
      }
    },

    created() {
      this.getData();
    },

    methods: {
      getData() {
        let orderData = {
          order_id: 38
        };
        getorderDetail(orderData).then(res => {
          if (res) {
            console.log(res);
          }
          this.changePage(1);
        })
      },
      changePage(page) {
        this.orderList = this.orderLists.slice((page - 1) * 10, page * 10)
      }
    }
  }
</script>
<style scoped lang="scss">
  .el-select {
    margin-right: 5px;
  }

  /*分页器*/
  .el-pagination {
    text-align: end;
    margin-top: 5vh;
  }

  .el-date-editor .el-range-separator {
    width: 10%;
  }

  .orderDetail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px 10px 0;
    /*border: 1px solid #ebeef5;*/
    background-color: #f5f7fa;
    .orderDetail_title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      color: #606266;
      span {
        font-size: 20px;
      }
    }
  }

  .el-date-editor--daterange.el-input, .el-date-editor--daterange.el-input__inner, .el-date-editor--timerange.el-input, .el-date-editor--timerange.el-input__inner {
    width: 220px;
  }
</style>

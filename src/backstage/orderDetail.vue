<template>
  <div>
    <div class="orderDetail">
      <div class="orderDetail_title">
        <span class="el-icon-document"/>
        <h5>订单列表</h5>
      </div>
      <div style="display:flex;justify-content: end;">
        <el-select v-model="detector_value">
          <el-option
            v-for="item in options"
            :key="item.detector_value"
            :label="item.label"
            :value="item.detector_value"/>
        </el-select>
        <div class="block">
          <el-date-picker
            v-model="date_value"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"/>
          <el-button class="el-button--primary" @click="getData(1,date_value)">搜索</el-button>
        </div>
      </div>
    </div>
    <el-table
      :data="orderDataList"
      border
      style="width:100%">
      <el-table-column
        prop="trade_no"
        label="订单号"
        align="center"
        width=""/>
      <el-table-column
        prop="price"
        label="成交金额"
        align="center"
        width=""/>
      <el-table-column
        prop="type"
        label="检测系统"
        align="center"
        width=""/>
      <el-table-column
        prop="city"
        label="成功/失败总篇数"
        align="center"
        width=""/>
      <el-table-column
        prop="status"
        label="交易状态"
        align="center"
        width=""/>
      <el-table-column
        prop="zip"
        label="订单状态"
        align="center"
        width=""/>
      <el-table-column
        prop="type"
        label="所属"
        align="center"
        width=""/>
      <el-table-column
        prop="create_time"
        label="创建时间"
        align="center"
        width=""/>
    </el-table>
    <el-pagination
      :total="count"
      background
      layout="prev, pager, next"
      @current-change="changePage"
    />
  </div>
</template>

<script>
  import {orderList} from '@/api/backstageApi/backstage'

  export default {
    name: "OrderDetails",
    data() {
      return {
        options: [
          {
            detector_value: '选项1',
            label: '检测系统1'
          }],
        date_value: [],
        date: '2016-05-06',
        detector_value: '所有检测系统',
        count: 0,
        orderDataList: null,
      }
    },

    created() {
      this.getData(1);
    },

    methods: {
      getData(page,date_value) {
        let begin_time='',
            end_time='';
        if(date_value){
           begin_time=date_value[0].getTime();
           end_time=date_value[1].getTime();
        }
        let orderData = {
          agent_id: 1,
          page:page,
          size:10,
          search:'',
          begin_time:begin_time,
          end_time:end_time,
        };
        console.log(orderData);
        orderList(orderData).then(res => {
          if (res&&res.code===200) {
            console.log(res);
            this.count=Math.ceil(res.count/10);
            this.orderDataList=res.data;
          }
        })
      },
      changePage(page) {
        this.getData(page);
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

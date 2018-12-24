<template>
  <div class="app-container">
    <div class="userList">
      <div class="userList_title">
        <span class="el-icon-document"/>
        <h3>用户列表</h3>
      </div>
      <div style="display:flex;justify-content: end;">
        <el-input v-model="input" placeholder="输入用户名或ID"/>
        <el-button class="el-button--primary" style="margin-left:10px;">搜索</el-button>
      </div>
    </div>
    <el-table
      :data="tableData3"
      border>
      <el-table-column
        prop="date"
        label="ID"
        align="center"
        width=""/>
      <el-table-column
        prop="name"
        label="用户"
        align="center"
        width=""/>
      <el-table-column
        prop="province"
        align="center"
        label="昵称"
        width=""/>
      <el-table-column
        prop="city"
        label="所属"
        align="center"
        width=""/>
      <el-table-column
        prop="zip"
        label="时间"
        align="center"
        width=""/>
    </el-table>
    <el-pagination
      :total="1000"
      background
      @current-change="changPage"
      layout="prev, pager, next"/>
  </div>
</template>

<script>
  import {getuserList} from '@/api/backstageApi/backstage'
  export default {
    data() {
      return {
        input: '',
        tableData3: [
          {
            date: '2016-05-03',
            name: '1',
            province: '2',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-02',
            name: '1',
            province: '2',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-01',
            name: '1',
            province: '2',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-08',
            name: '1',
            province: '2',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-06',
            name: '1',
            province: '2',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }]
      }
    },
    created(){
      this.userList();
    },
    methods:{
      userList(){
        let userListData={
          agent_id:1,
        };
        getuserList(userListData).then(res=>{
          if(res){
            console.log(res);
          }
        })
      },
      changPage(page){

      }
    }
  }
</script>

<style lang="scss">
  .el-pagination {
    text-align: end;
    margin-top: 5vh;
  }

  .userList {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px 10px 0;
    /*border: 1px solid #ebeef5;*/
    background-color: #f5f7fa;
    .userList_title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      color: #909399;
      span {
        font-size: 22px;
      }
    }
  }
</style>

<template>
  <div class="app-container">
    <div class="userList">
      <div class="userList_title">
        <span class="el-icon-document"/>
        <h3>用户列表</h3>
      </div>
      <div style="display:flex;justify-content: end;">
        <el-input v-model="searchInput" placeholder="输入论文作者名称搜索"/>
        <el-button class="el-button--primary" style="margin-left:10px;" @click="userList(1,searchInput)">搜索</el-button>
      </div>
    </div>
    <el-table
      :data="tableData"
      border>
      <el-table-column
        prop="id"
        label="ID"
        align="center"
        width=""/>
      <el-table-column
        prop="author"
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
        prop="create_time"
        label="时间"
        align="center"
        width=""/>
    </el-table>
    <el-pagination
      :total="count"
      :page-size="1"
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
        searchInput: '',
        tableData: [],
        count:0,
      }
    },
    created(){
      this.userList(1);
    },
    methods:{
      userList(page,searchInput){
        let userListData={
          agent_id:1,//sessionStorage.getItem('agent_id'),
          page:page,
          size:10,
          search:searchInput
        };
        getuserList(userListData).then(res=>{
          if(res&&res.code===200){
            this.count=Math.ceil(res.count/10);
            this.tableData=res.user_lists;
            this.tableData.reverse();
          }
        })
      },
      changPage(page){
        this.userList(page)
      }
    }
  }
</script>

<style scoped lang="scss">
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

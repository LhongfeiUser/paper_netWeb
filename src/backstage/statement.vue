<template>
  <div class="app-container">
    <el-table
      :data="inComeList"
      style="width:100%">
      <el-table-column label="收支明细">
        <el-table-column
          prop="create_time"
          label="时间"
          width=""/>
        <el-table-column
          prop="sort"
          label="类型"
          width=""/>
        <el-table-column
          prop="statement"
          label="收入（支出）"
          width=""/>
        <el-table-column
          prop="surplus"
          label="余额"
          width=""/>
        <el-table-column
          prop="remark"
          label="备注"
          width=""/>
      </el-table-column>
    </el-table>
    <el-pagination
      :total="count"
      background
      layout="prev, pager, next"
      @current-change="changePage"/>
  </div>
</template>

<script>
  import {getstatement} from '@/api/backstageApi/backstage'

  export default {
    name:'Statement',
    data(){
      return{
        inComeList:null,
        count:0,
      }
    },
    created(){
       this.getstatementData(1);
    },
    methods:{
      getstatementData(page){
        let statementData={
          agent_id:1,
          page:page,
          size:10,
        };
        getstatement(statementData).then((res)=>{
          if(res&&res.code===200){
            this.count=Math.ceil(res.count/10);
            this.inComeList=res.data;
          }
        })
      },
      changePage(page){
        this.getstatementData(page);
      }
    }
  }
</script>

<style scoped>
  .el-pagination {
    text-align: end;
    margin-top: 5vh;
  }
</style>

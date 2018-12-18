<template>
  <div class="app-container">
    <el-table
      :data="inComeList"
      style="width:100%">
      <el-table-column label="收支明细">
        <el-table-column
          prop="date"
          label="时间"
          width=""/>
        <el-table-column
          prop="type"
          label="类型"
          width=""/>
        <el-table-column
          prop="statement"
          label="收入（支出）"
          width=""/>
        <el-table-column
          prop="sum"
          label="余额"
          width=""/>
        <el-table-column
          prop="remark"
          label="备注"
          width=""/>
      </el-table-column>
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
  import {getstatement} from '@/api/backstageApi/backstage'

  export default {
    name:'Statement',
    data(){
      return{
        inComeLists:null,
        inComeList:null,
        num:0,
      }
    },
    created(){
       this.getstatementData();
    },
    methods:{
      getstatementData(){
        let statementData={
          agent_id:1,
        };
        getstatement(statementData).then((res)=>{
          if(res){
            console.log(res);
          }
          this.changePage(1);
        })
      },
      changePage(page){
        this.inComeList = this.inComeLists.slice((page-1)*10,page*10)
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

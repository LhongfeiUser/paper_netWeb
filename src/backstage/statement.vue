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
          prop="price"
          label="收入（支出）"
          width=""/>
        <el-table-column
          prop="surplus"
          label="余额"
          width=""/>
        <el-table-column
          prop="get_money_name"
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
  import cookies from 'js-cookie';
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
          agent_id:cookies.get('agent_id'),
          page:page,
          size:10,
        };
        getstatement(statementData).then((res)=>{
          if(res&&res.code===200){
            this.count=Math.ceil(res.count/10);
            console.log(res.data);
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

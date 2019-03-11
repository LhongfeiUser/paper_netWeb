<template>
  <div class="app-container">
    <div class="proataManage_title">
      <i class="el-icon-setting"></i>
      <h4>我的分成</h4>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="create_time"
        label="日期"
        align="center"
        width=""/>
      <el-table-column
        prop="id"
        label="订单列表"
        align="center"
        width=""/>
      <el-table-column
        prop="price"
        label="总利润"
        align="center"
        width=""/>
      <el-table-column
        prop="profitSharing"
        label="我的利润"
        align="center"
        width=""/>
      <el-table-column
        prop="remarks"
        label="备注 "
        align="center"
        width=""/>
    </el-table>
    <el-pagination
      :total="count"
      background
      layout="prev, pager, next"
      @current-change="changPage"/>
  </div>
</template>

<script>
  import {getprofitSharing} from '@/api/backstageApi/backstage'
  import cookies from 'js-cookie';
  export default {
    data() {
      return {
        dialogFormVisible: false,
        input: '',
        tableData: [],
        formLabelWidth: '120px',
        count:1,
      }
    },
    created(){
      this.getshareData(1);
    },
    methods:{
      getshareData(page){
        let shareData={
          agent_id:cookies.get('agent_id'),
          page:page,
          size:10,
        };
        getprofitSharing(shareData).then(res=>{
          if(res){
            this.tableData=res.data;
            this.count=Math.ceil(res.count/10);
          }else{
            this.$message.error(res.msg)
          }
        })
      },
      changPage(page){
        this.getshareData(page)
      }
    }
  }
</script>

<style scoped lang="scss">
  .el-pagination {
    text-align: end;
    margin-top: 5vh;
  }

  .proataManage_title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #f5f7fa;
    padding:20px;
    color: #606266;
    i {
      font-size: 20px;
    }
    h4 {
      margin-left: 1vw;
    }
  }
</style>

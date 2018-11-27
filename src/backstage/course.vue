<template>
  <div class="app-container">
    <div class="operationCourse_title">
      <span class="el-icon-question"/>
      <h4>操作教程</h4>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="ID"
        align="center"
        width=""/>
      <el-table-column
        prop="name"
        label="文章标题"
        align="center"
        width=""/>
      <el-table-column
        prop="province"
        label="文章类型"
        align="center"
        width=""/>
      <el-table-column
        prop="city"
        label="创建时间"
        align="center"
        width=""/>
      <el-table-column
        prop="address"
        label="更新时间"
        align="center"
        width=""/>
      <el-table-column
        prop="zip"
        label="文章描述"
        align="center"
        width=""/>
      <el-table-column
        prop="zip"
        label="文章关键字"
        align="center"
        width=""/>
      <el-table-column
        prop="zip"
        label="状态"
        align="center"
        width=""/>
    </el-table>
    <el-pagination
      :total="100"
      background
      layout="prev, pager, next"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
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
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }]
      }
    }
  }
</script>

<style scoped lang="scss">
  .el-pagination {
    text-align: end;
    margin-top: 5vh;
  }

  .operationCourse_title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #f5f7fa;
    color: #909399;
    padding:12px 0;
    span {
      font-size: 20px;
      margin: auto 10px;
    }
  }
</style>

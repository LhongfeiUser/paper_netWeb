<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      align="center"
      width="">
    </el-table-column>
    <el-table-column
      prop="Article_name"
      label="论文名称"
      align="center"
      width="">
    </el-table-column>
    <el-table-column
      prop="author"
      label="论文作者"
      align="center"
      width="">
    </el-table-column>
    <el-table-column
      prop="system"
      label="检测系统"
      align="center"
      width="">
    </el-table-column>
    <el-table-column
      prop="state"
      label="订单状态"
      align="center"
      width="">
    </el-table-column>
    <el-table-column
      label="操作"
      align="center"
      width="">
      <template slot-scope="scope">
        <el-button type="text" size="small">下载</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          Article_name:'文章名称',
          author:'论文作者',
          system:'万方',
          state: '订单状态，是否付款',
        },]
      }
    }
  }
</script>

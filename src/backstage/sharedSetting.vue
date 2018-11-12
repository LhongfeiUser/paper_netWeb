<template>
  <div class="app-container">
    <div class="proataManage_title">
      <i class="el-icon-setting"></i>
      <h4>分成设置 - 蒋石文</h4>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="systemType"
        label="系统类型"
        align="center"
        width="100"/>
      <el-table-column
        prop="websitePrice"
        label="官网售价"
        align="center"
        width="100"/>
      <el-table-column
        prop="grossProfit"
        label="总利润"
        align="center"
        width="100"/>
      <el-table-column
        prop="subordinateDivide"
        label="下级分成"
        align="center"
        width="100"/>
      <el-table-column
        prop="myProfits"
        label="我的利润"
        align="center"
        width="200"/>
      <el-table-column
        prop="subordinateProfits"
        label="下级利润"
        align="center"
        width="200"/>
      <el-table-column
        prop="state"
        label="状态"
        align="center"
        width="200"/>
      <el-table-column
        prop="remarks"
        label="备注 "
        align="center"
        width="100"/>
      <el-table-column
        fixed="right"
        label="操作"
        align="center"
        width="150">
        <template slot-scope="scope">
          <el-button class="el-button--primary" size="small" @click="compile(scope.row)"><i class="el-icon-edit" style="padding-right:5px;"></i>编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :total="1000"
      background
      layout="prev, pager, next"/>
    <el-dialog :visible.sync="dialogFormVisible" title="分成设置">
      <el-form :model="form" label-position="right" style="padding:5px 50px 5px 10px;">
        <el-form-item :label-width="formLabelWidth" label="状态">
          <el-input v-model="form.userType" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="配置">
          <el-input v-model="form.userType" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="总利润">
          <el-input v-model="form.their" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="系统类型">
          <el-input v-model="form.id" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="官网售价">
          <el-input v-model="form.name" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="下级分成">
          <el-input v-model="form.phone" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="我的利润">
          <el-input v-model="form.userType" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="下级利润">
          <el-input v-model="form.userType" auto-complete="off"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="danger" @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        input: '',
        tableData: [
          {
            systemType: '2016-05-03',
            websitePrice: '王小虎',
            grossProfit: '上海',
            subordinateDivide: '普陀区',
            myProfits: '上海市普陀区金沙江路 1518 弄',
            state: 200333,
            subordinateProfits:'1',
            remarks:''
          },{
            systemType: '2016-05-03',
            websitePrice: '王小虎',
            grossProfit: '上海',
            subordinateDivide: '普陀区',
            myProfits: '上海市普陀区金沙江路 1518 弄',
            state: 200333,
            subordinateProfits:'',
            remarks:''
          },{
            systemType: '2016-05-03',
            websitePrice: '王小虎',
            grossProfit: '上海',
            subordinateDivide: '普陀区',
            myProfits: '上海市普陀区金沙江路 1518 弄',
            state: 200333,
            subordinateProfits:'',
            remarks:''
          },{
            systemType: '2016-05-03',
            websitePrice: '王小虎',
            grossProfit: '上海',
            subordinateDivide: '普陀区',
            myProfits: '上海市普陀区金沙江路 1518 弄',
            state: 200333,
            subordinateProfits:'',
            remarks:''
          },{
            systemType: '2016-05-03',
            websitePrice: '王小虎',
            grossProfit: '上海',
            subordinateDivide: '普陀区',
            myProfits: '上海市普陀区金沙江路 1518 弄',
            state: 200333,
            subordinateProfits:'',
            remarks:''
          },{
            systemType: '2016-05-03',
            websitePrice: '王小虎',
            grossProfit: '上海',
            subordinateDivide: '普陀区',
            myProfits: '上海市普陀区金沙江路 1518 弄',
            state: 200333,
            subordinateProfits:'',
            remarks:''
          },],
        formLabelWidth: '120px',
        form: {
          name: '',
          phone: '',
          userType: '',
          their: '',
          id: '',
        },
      }
    },
    methods:{
      compile(row){
        alert('1');
        this.form = row;
        this.dialogFormVisible = true
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

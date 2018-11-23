<template>
  <div class="dashboard-container">
    <div class="box-card-component" style="margin-left:8px;">
      <div class="box-card-header">
        <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png">
      </div>
      <div class="dashboard-text">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="用户名">
            <el-input v-model="formLabelAlign.userName"></el-input>
          </el-form-item>
          <el-form-item label="昵 称">
            <el-input v-model="formLabelAlign.nickName"></el-input>
          </el-form-item>
          <el-form-item label="密 码">
            <el-input type="password" v-model="formLabelAlign.password"></el-input>
          </el-form-item>
          <el-form-item label="Email">
            <el-input type="email" v-model="formLabelAlign.email"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="formLabelAlign.phone"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="save">保存</el-button>
            <el-button type="danger">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          userName: '清风扬',
          nickName: '绿波漾',
          password: '666',
          email: '1667@126.com',
          phone: '16601053721'
        },
        current: 1
      }
    },
    computed: {},
    methods: {
      save() {
        this.$confirm('您确定要修改以上内容？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 发送请求
          this.$message({
            type: 'success',
            message: '修改成功!'
          });
        }).catch(() => {
          // this.$router.go(0);
          this.$message({
            type: 'info',
            message: '已取消修改'
          });
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dashboard {
    &-container {
      width: 60vw;
      margin: 30px auto;
    }
    &-text {
      margin: 80px auto 0;
      font-size: 24px;
      line-height: 46px;
      .el-form {
        width: 400px;
        margin: auto;
        .el-input {
          width: 100%;
        }
        /deep/ label.el-form-item__label {
          font-size: 16px;
          color: #000;
        }
        /deep/ input.el-input__inner {
          background-color: #dcdfe6;
          border: 1px solid #fff;
          font-size: 16px;
          padding-left: 35px !important;
          letter-spacing: 3px;
        }
      }
    }
  }

  .box-card-component {
    position: relative;
    padding-bottom: 100px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #303133;
    -webkit-transition: .3s;
    transition: .3s;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    border-radius: 4px;
    overflow: hidden;
    .box-card-header {
      padding: 0;
      position: relative;
      height: 280px;
      img {
        width: 100%;
        height: 100%;
        transition: all 0.2s linear;
        &:hover {
          transform: scale(1.1, 1.1);
          filter: contrast(130%);
        }
      }
    }
  }
</style>

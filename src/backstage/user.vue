<template>
  <div class="dashboard-container">
    <div class="box-card-component" style="margin-left:8px;">
      <div class="box-card-header">
        <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png">
      </div>
      <div class="dashboard-text">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="用户名">
            <el-input disabled v-model="formLabelAlign.userName"></el-input>
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
            <el-button type="danger" @click="getinfoData(user_id)">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
  import {revision_info,getUserInfo} from '@/api/backstageApi/backstage'
  import cookies from 'js-cookie';
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          userName: '加载中...',
          nickName: '加载中...',
          password: '加载中...',
          email: '加载中...',
          phone: '加载中...'
        },
        user_id:'',
      }
    },
    created(){
      this.user_id=cookies.get('agent_id');
      this.getinfoData(this.user_id);
    },
    methods: {
      save() {
        this.$confirm('您确定要修改以上内容？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let infoData ={
            username:this.formLabelAlign.userName,
            password:this.formLabelAlign.password,
            token:'meichenghuilian20181108',
            wxnickname:this.formLabelAlign.nickName,
            email:this.formLabelAlign.email,
            telphone:this.formLabelAlign.phone
          };
          revision_info(infoData).then(res=>{
            if(res&&res.code===200){
              console.log(res);
              this.$message.success('修改成功')
            }else {
              this.$message.error(res.msg)
            }
          });
        }).catch(() => {
          // this.$router.go(0);
          this.$message({
            type: 'info',
            message: '已取消修改'
          });
        });
      },
      getinfoData(agent_id){
        let infoData={
          agent_id:agent_id,
          token:'meichenghuilian20181108'
        };
        getUserInfo(infoData).then(res=>{
          if(res){
            this.formLabelAlign.userName=res.data.username;
            this.formLabelAlign.nickName=res.data.wxnickname;
            this.formLabelAlign.password=res.data.password;
            this.formLabelAlign.email=res.data.email;
            this.formLabelAlign.phone=res.data.telphone;
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dashboard {
    &-container {
      width: 60%;
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

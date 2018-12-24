<template>
  <div class="login">
    <div class="bg">
      <a href="/home"><i class="iconfont icon-fanhui" style="font-size:26px;position: absolute;top:0;left:10px; color:#fff;"></i></a>
      <div class="container justify-content-end" style="display: flex">
        <div class="form row">
          <div class="form-horizontal">
            <h3 class="form-title text-center">长沙升华数字技术有限公司</h3>
            <div class="col-md-9">
              <div class="form-group">
                <i class="fa fa-user fa-lg"></i>
                <input class="form-control required" type="text" placeholder="用户名" autofocus="autofocus" maxlength="20" v-model="userName"/>
              </div>
              <div class="form-group">
                <i class="fa fa-lock fa-lg"></i>
                <input class="form-control required" type="password" @paste.native.capture.prevent="false" placeholder="密码" v-model="password" @keyup.13="login"/>
              </div>
              <div class="form-group">
                <label class="checkbox">
                  <input type="checkbox" name="remember" v-model="isRemember" style="width:15px;height:13px;" @click="remember(isRemember)"/>记住我
                </label>
              </div>
              <div class="form-group">
                <button type="button" class="btn btn-primary" @click="login">登录</button>
              </div>
              <!--<div class="text-right">-->
                <!--<a href="#">忘记密码？</a>-->
              <!--</div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import cookies from 'js-cookie';
  import md5 from 'md5';
  import {login_req} from "../../api/login";

  export default {
    data(){
      return{
        isRemember:false,
        userName:'',
        password:'',
      }
    },
    created(){
      this.userName=cookies.get('userName');
      this.password=cookies.get('password');
      this.isRemember=cookies.get('isRemember')
    },
    methods:{
      remember(isRemove){
        console.log(isRemove);
        /* if(this.userName&&this.password){
           if(!isRemove){
             /!*保存时间*!/
             cookies.set('userName',this.userName, { expires: 7, path: '' });
             cookies.set('password',this.password, { expires: 7, path: '' });
             cookies.set('isRemember',this.isRemember, { expires: 7, path: '' });
           }else {
             cookies.remove('userName');
             cookies.remove('password');
             cookies.remove('isRemember');
           }
         }*/
      },
      login(){
        if(this.isRemember){
          this.remember(!this.isRemember)
        }
        const postData = {
          username:this.userName,
          password:this.password,
          token:'meichenghuilian20181108'
        };
        login_req(postData).then(res=>{
          if(res.code === 200){
            console.log(res);
            sessionStorage.setItem('token',1);
            this.$router.push('/backstage')
          }else{
            this.$message.error(res.msg);
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .bg {
    background: url("../../assets/images/login_bg.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    height:100vh;
  }
  .form {
    background: rgba(255, 255, 255, 0.2);
    width: 400px;
    display: flex;
    justify-content: flex-end;
    padding:20px 0 80px;
    .form-horizontal{
      width:100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .form-title{
        font-size:20px;
        color:#fff;
        margin:20px auto;
      }
    }
    .btn{
      width:100%;
    }
  }

  /*阴影*/
  .fa {
    display: inline-block;
    top: 27px;
    left: 6px;
    position: relative;
    color: #ccc;
  }

  input[type="text"], input[type="password"] {
    padding-left: 26px;
  }
</style>

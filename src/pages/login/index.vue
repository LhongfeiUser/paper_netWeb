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
                <input class="form-control required" type="password" placeholder="密码" v-model="password"/>
              </div>
              <div class="form-group">
                <label class="checkbox">
                  <input type="checkbox" name="remember" v-model="item" style="width:15px;height:13px;" @click="remember(item)"/>记住我
                </label>
              </div>
              <div class="form-group">
                <button type="button" class="btn btn-primary" @click="login">登录</button>
              </div>
              <div class="text-right">
                <a href="#">忘记密码？</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import cookies from 'js-cookie';
  export default {
    data(){
      return{
        item:false,
        userName:'',
        password:'',
      }
    },
    created(){
      this.userName=cookies.get('userName');
      this.password=cookies.get('password');
      this.item=cookies.get('item')

    },
    methods:{
      remember(isRemove){
        if(this.userName&&this.password){
          if(!isRemove){
            cookies.set('userName',this.userName);
            cookies.set('password',this.password);
            cookies.set('item',true);
            /*保存时间*/
            cookies.set('userName',this.userName, { expires: 7, path: '' });
            cookies.set('password',this.password, { expires: 7, path: '' });
            cookies.set('item',this.userName, { expires: 7, path: '' });
          }else {
            cookies.remove('userName');
            cookies.remove('password');
            cookies.remove('item');
          }
        }
      },
      login(){
        if(this.item){
          this.remember(!this.item)
        }
        console.log(this.userName,this.password);
        if(this.userName==='1234'&&this.password==='3456'){
          sessionStorage.setItem('token',1);
          this.$router.push('/backstage/statistic')
        }else{
          this.$message.error('账号或密码错误，请重新输入');
        }
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

  .checkbox {
  }
</style>

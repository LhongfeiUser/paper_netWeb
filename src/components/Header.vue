<template>
  <div class="header">
    <nav class="navbar navbar-light">
      <router-link class="navbar-brand" to="/">
        <img v-if="logoPic" :src="logoPic" width="140" height="52">
        <img v-else src="http://pmo78af5a.pic41.websiteonline.cn/upload/logo2.png" width="140" height="52">
        <img src="http://pmo78af5a.pic41.websiteonline.cn/upload/1231.png" width="165">
      </router-link>
      <ul class="nav nav-pills" v-cloak>
        <li class="nav-item">
          <router-link to="/home" exact active-class="nav-link active">
            <span>{{category[0]}}</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/vipManage/upload" active-class="nav-link active">
            <span>{{category[1]}}</span>
          </router-link>
        </li>
        <!-- <li class="nav-item">
           <router-link to="/process" active-class="nav-link active">
             <span>论文查重流程</span>
           </router-link>
         </li>-->
        <li class="nav-item">
          <router-link :to="{path:'/skill', query:{list_id:1}}" active-class="nav-link active">
            <span>{{category[2]}}</span>
          </router-link>
        </li>
         <li class="nav-item">
           <router-link :to="{path:'/faq', query:{list_id:2}}" active-class="nav-link active">
             <span>{{category[3]}}</span>
           </router-link>
         </li>
         <li class="nav-item">
           <router-link :to="{path:'/academic', query:{list_id:3}}" active-class="nav-link active">
             <span>{{category[4]}}</span>
           </router-link>
         </li>
         <li class="nav-item">
           <router-link to="/login" active-class="nav-link active">
             <span>{{category[5]}}</span>
           </router-link>
         </li>
      </ul>
    </nav>
  </div>
</template>
<script>
  import {getCategory} from "../api/category";
  import {getLogo} from '../api/get_homeData'
  export default {
    data() {
      return {
        category: ["首页", "论文查重", "论文查重技巧", "常见问题", "学术资讯", "登录"],
        logoPic:''
      }
    },
    mounted() {
      console.log(this.logoPic);
      this.getCategoryData();
    },
    methods: {
      getCategoryData() {
        let categoryData = {
          token: 'meichenghuilian20181108',
        };
        getCategory(categoryData).then(res => {
          if (res) {
            let arr =[];
            for(let i=0;i<res.length;i++){
              arr.push(res[i].category_name)
            }
            this.category = arr;
          }
        });
        let logo_data={
          username:'',
          password:'',
          token:'meichenghuilian20181108'
        };
        getLogo(logo_data).then(res=>{
          let reg = /D:\\(WWW)\\(lunwen)\\(public)\\/;
          this.logoPic=res.pic.replace(reg,'http://admin.yifulunwen.com');
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    margin-bottom: 10px;
    background-color: #2b85e4;
  }

  .navbar {
    padding: 1.5rem 1rem;
    [v-cloak]{
      display: none;
    }
  }

  .nav.nav-pills {
    cursor: pointer;
  }

  .nav-link {
    padding: .2rem 1.5rem;
  }

  .nav-item {
    margin: auto 2vw;
    a {
      /*color:#000;*/
      color: #fff;
      font-size: 16px;
    }
    a:hover {
      /*color:#ffc107;*/
    }
  }

  .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    background-color: inherit;
    color: #ffc107;
    border: 1px solid #ffc107;
  }
</style>

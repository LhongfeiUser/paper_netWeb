<template>
  <div class="header" :style="styleObj===0?isStyleA:''">
    <nav class="navbar navbar-light" :style="styleObj===0?isStyleB:''">
      <router-link class="navbar-brand" to="/">
        <img v-if="logoPic" :src="logoPic" width="150" height="50">
        <img v-else src="../assets/images/footer_logo.png" width="150" height="50">
        <div class="header_title">
          <span>湖南省出版物发行业协会</span>
          <span>科研诚信建设工作委员会</span>
        </div>
      </router-link>
      <ul class="nav nav-pills" v-cloak>
        <li class="nav-item" v-for="(item,index) in category" :key="index" @click="getStyle(category,item)">
          <router-link :to="{path:routeArr[index], query:{list_id:item.id}}">
            <span>{{item.category_name}}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
  import {getLogo} from '../api/get_homeData'

  export default {
    data() {
      return {
        logoPic: '',
        routeArr: ['/homepage', '/vipManage/upload', '/article/1', '/article/2', '/article/3', '/login'],
        styleObj:0,
        isStyleA:{
          position: 'absolute',
          zIndex: '99',
          backgroundColor: '#131516',
          width:'100%'
        },
        isStyleB:{
          width: '1260px',
          margin:'auto'
        }
      }
    },
    created(){
      this.getCategoryData();
      if(this.$route.path!=='/homepage'){
        this.styleObj=1;
      }
    },
    props:{
      category:Array,
    },
    watch:{
      '$route':function (to) {
        if(to.path==='/homepage'){
          this.styleObj=0;
        }else {
          this.styleObj=1;
        }
      }
    },
    methods: {
      getCategoryData() {
        let logo_data = {
          username: '',
          password: '',
          token: 'meichenghuilian20181108'
        };
        getLogo(logo_data).then(res => {
          let reg = /D:\\(WWW)\\(lunwen)\\(public)\\/;
          this.logoPic = res.pic.replace(reg, 'https://www.yifulunwen.com');
        })
      },
      getStyle(category,item){
        if(category[0]===item){
          this.styleObj=0;
        }else {
          this.styleObj=1;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    margin-bottom: 10px;
    background-color: #000;
  }
  .nav.nav-pills{
    margin-left: 296px;
  }
  .header_title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #e0af5c;
    margin-left: 16px;
    span {
      font-size: 16px;
    }
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1260px;
    padding: 1.5rem 0;
    [v-cloak] {
      display: none;
    }
  }

  .navbar-brand {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav.nav-pills {
    cursor: pointer;
  }

  .nav-link {
    padding: .2rem 1.5rem;
  }

  .nav-item {
    margin: auto 20px;
    a {
      font-size: 16px;
      background-color: inherit;
      color: #e0af5c;
    }
    a:hover {
      /*color:#ffc107;*/
    }
  }
</style>

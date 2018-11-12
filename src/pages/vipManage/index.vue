<template>
  <div class="vipManage">
    <Header></Header>
    <main style="display: flex;justify-content: flex-start;align-items: flex-start">
      <div class="aside">
        <ul class="nav flex-column">
      <!--    <li :class="current==='1'?'nav-item item_active':'nav-item'">
            <router-link to="info?current=1&time=new Date()">
              <span :class="current==='1'?'nav-link active':'nav-link'" @click="getInfo">会员信息</span>
            </router-link>
          </li>-->
          <li class="nav-item item_active">
            <router-link to="upload">
              <span class="nav-link active" @click="upload">论文查重</span>
            </router-link>
          </li>
       <!--   <li :class="current==='3'?'nav-item item_active':'nav-item'">
            <router-link to="order?current=3">
              <span :class="current==='3'?'nav-link active':'nav-link'" @click="getorderList">订单列表</span>
            </router-link>
          </li>-->
        </ul>
      </div>
      <div class="vipManage_right">
        <router-view></router-view>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'

  export default {
    data() {
      return {
        current: '1'
      }
    },
    components: {Header, Footer},
    methods: {
      getInfo() {
       this.current='1'
      },
      upload() {
        this.current = '2'
      },
      getorderList() {
        this.current = '3'
      }
    }
  }
</script>

<style scoped lang="scss">
  .vipManage {
    .vipManage_right, .aside {
      font-size: 1rem;
      margin: 0 10px 10px 20px;
      padding: 30px 0;
      position: relative;
      border: 1px solid #ebeef5;
      background-color: #fff;
      color: #303133;
      -webkit-transition: .3s;
      transition: .3s;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      border-radius: 4px;
      overflow: hidden;
    }
    .vipManage_right {
      width: 85vw;
      padding: 30px 40px;
    }
    .aside {
      width: 200px;
      text-align: center;
      font-size: 16px;
      padding-bottom: 200px;
      .nav-item {
        margin: 10px auto;
      }
      .item_active {
        border-right: 5px solid red;
        margin: auto 10px;
        margin-right: 0;
      }
      .active {
        background-color: orangered;
        color: #fff;
        margin: auto 25px;
      }
    }
  }
</style>

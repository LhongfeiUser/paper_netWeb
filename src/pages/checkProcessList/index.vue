<template>
    <div>
      <Header></Header>
      <main>
        <aside>
          <v_aside></v_aside>
        </aside>
        <div class="process">
          <h2>选择查询系统</h2>
          <h2>上传待检测论文</h2>
          <h2>担保交易</h2>
          <h2>查询检测结果及下载论文检测报告</h2>
          <h2>确认评价</h2>
        </div>
      </main>
      <Footer></Footer>
    </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  import v_aside from '@/components/v-aside'
    export default {
        data(){
          return{

          }
        },
      components:{Header,Footer,v_aside}
    }
</script>

<style scoped lang="scss">
main{
  display: flex;
  aside,.process{
    margin: 0 10px 10px 0;
    padding: 30px 0;
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #888;
    -webkit-transition: .3s;
    transition: .3s;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    border-radius: 4px;
    overflow: hidden;
  }
  aside{
    width:18vw;
    background-color: #fff;
    margin-right:30px;
    padding-bottom:100px;
  }
  .process{
    padding:40px 80px;
    width:80vw;
    background-color: #fff;
  }
}
</style>

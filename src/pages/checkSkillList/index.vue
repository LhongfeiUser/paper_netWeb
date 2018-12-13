<template>
  <div class="skill">
    <Header></Header>
    <main>
      <aside>
        <v_aside></v_aside>
      </aside>
      <div class="skill_list">
        <h3>论文查重技巧</h3>
        <ul class="list_content">
          <li>
            <router-link :to="{name:'detail',params:{id:4}}">
             三招最有效论文查重修改技巧
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'detail', params: { id: 5 }}">
              论文查重降低重复率修改技巧的10点建议
            </router-link>
          </li>
          <li>
            论文查重前必看四大误区，查重效率提升
          </li>
          <li>
            论文写作速成手册：更快速的通过论文查重
          </li>
          <li>
            毕业论文检测、毕业论文查重修改过关技巧
          </li>
          <li>
            写好毕业论文的六个步骤：选题、开题、初稿、修正、查重、辩论
          </li>
        </ul>
        <ul class="pagination">
          <li class="page-item disabled"><a class="page-link text-black-50" href="#">上一页</a></li>
          <li class="page-item" v-for="item in 1" :key="item"><a class="page-link text-black-50" href="#">{{item}}</a></li>
          <li class="page-item"><a class="page-link text-black-50" href="#">下一页</a></li>
        </ul>
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
    data() {
      return {
      }
    },
    components: {Header, Footer, v_aside},
  }
</script>

<style scoped lang="scss">
.skill{
  main{
    display: flex;
    align-items: flex-start;
    aside,.skill_list{
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
      width:18%;
      background-color: #fff;
      margin-right:30px;
      padding-bottom:100px;
    }
    .skill_list{
      padding:40px 80px;
      width:85%;
      background-color: #fff;
      h3{
        font-size:24px;
        border-bottom:1px #e8e8e8 solid;
        padding-bottom:10px;
      }
      .list_content{
        counter-reset: sectioncounter;
        li:before{
          content: counter(sectioncounter) "、";
          counter-increment: sectioncounter;
        }
        li:hover{
          color:orangered;
        }
        li{
          margin:20px auto;
          font-size:18px;
          border-bottom:1px dashed #b9b9b9 ;
          padding-bottom:20px;
          a:hover{
            color:orangered;
          }
        }
      }
    }
  }
}
</style>

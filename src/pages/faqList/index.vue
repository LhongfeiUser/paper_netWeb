<template>
  <div class="faqList">
    <Header></Header>
    <main>
      <aside>
        侧边栏
      </aside>
      <div class="faqList_list">
        <h3>常见问题</h3>
        <ul class="list_content">
          <li>
            <router-link :to="{name:'detail',params:{id:num}}">
              中国知网论文查重的报告该如何看？
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'detail', params: { id: num }}">
              如何查看论文查重报告的详细指标？
            </router-link>
          </li>
          <li>
            论文查重系统会识别毕业论文中的表格数据吗？
          </li>
          <li>
            论文查重系统抄袭结果为0%，是正常的吗？
          </li>
          <li>
            知网论文查重报告中引用被标红？5点注意事项需改正！
          </li>
          <li>
            论文查重中常见10大问题解答,论文检测查重必读
          </li>
        </ul>
        <ul class="pagination">
          <li class="page-item disabled"><a class="page-link" href="#">上一页</a></li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
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
        num:12345,
      }
    },
    components: {Header, Footer},
  }
</script>

<style scoped lang="less">
  .faqList{
    .page-link:focus{
      box-shadow: none;
    }
    main{
      display: flex;
      align-items: flex-start;
      aside,.faqList_list{
        margin: 0 10px 10px 20px;
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
        width:20vw;
        background-color: #fff;
        margin:0 20px;
      }
      .faqList_list{
        padding:40px 80px;
        width:80vw;
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

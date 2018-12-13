<template>
  <div class="faqList">
    <Header></Header>
    <main>
      <aside>
        <v_aside></v_aside>
      </aside>
      <div class="faqList_list">
        <h3>常见问题</h3>
        <ul class="list_content">
          <li v-for="(item,index) in lists" :key="index" @click="goDetail(item.id)">
            {{item.title}}
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
  import {getListData} from "@/api/getList";

  export default {
    data() {
      return {
        list:[
          '中国知网论文查重的报告该如何看？',
          '如何查看论文查重报告的详细指标？',
          '论文查重系统会识别毕业论文中的表格数据吗？',
          '论文查重系统抄袭结果为0%，是正常的吗？',
          '知网论文查重报告中引用被标红？5点注意事项需改正！',
          '论文查重中常见10大问题解答,论文检测查重必读'
        ],
        lists:[],
        cat_id:null,
      }
    },
    components: {Header, Footer, v_aside},
    created(){
      this.cat_id=this.$route.query.list_id;
      this.getFaqList();
    },
    methods:{
      getFaqList(){
        const faqData={
          token:'meichenghuilian20181108',
          cat_id:this.cat_id,
        };
        getListData(faqData).then(res=>{
          if(res.code===200){
            this.lists=res.msg;
          }else {
            this.$message.error(res.msg)
          }
        })
      },
      goDetail(id){
        this.$router.push(`/faq/detail/${id}`)
      },
    }
  }
</script>

<style scoped lang="scss">
  .faqList{
    .page-link:focus{
      box-shadow: none;
    }
    main{
      display: flex;
      align-items: flex-start;
      aside,.faqList_list{
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
      .faqList_list{
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
            cursor: pointer;
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

<template>
  <div class="academicList">
    <Header></Header>
    <main>
      <aside>
        <!--<img src="../../assets/images/aside_logo.png">
        <div style="margin:20px 0 20px 20px;font-size:16px;color:#000;">
          <h3>知网小分解系统 文献库</h3>
        </div>
        <ul>
          <li>中国学术期刊网络出版总库</li>
          <li>中国博士学位论文全文数据库/中国优秀硕士学位论文全文数据库</li>
          <li>中国重要会议论文全文数据库</li>
          <li>中国重要报纸全文数据库</li>
          <li>中国专利全文数据库</li>
          <li>互联网资源</li>
          <li>英文数据库(涵盖期刊、博硕、会议的英文数据以及德国Springer、英国Taylor&Francis 期刊数据库等)</li>
          <li>港澳台学术文献库</li>
          <li>优先出版文献库</li>
          <li>互联网文档资源</li>
          <li>图书资源</li>
          <li>个人比对库</li>
        </ul>-->
        <v_aside></v_aside>
      </aside>
      <div class="academic_list">
        <h3>学术资讯</h3>
        <div v-if="isData" v-loading="isData" style="height:80px;width:100%;"></div>
        <ul v-else class="list_content">
          <li v-for="(item,index) in list" :key="index" @click="goDetail(item.id)">
            {{item.title}}
          </li>
        </ul>
        <ul class="pagination pagination-sm">
          <li class="page-item"><a class="page-link text-black-50" href="javascript:void(0)" @click="changePage(page-1)">上一页</a></li>
          <li :class="item===page?'page-item active':'page-item'" v-for="item in len" :key="item"><a class="page-link text-black-50" href="javascript:void(0)" @click="changePage(page)">{{item}}</a></li>
          <li class="page-item"><a class="page-link text-black-50" href="javascript:void(0)" @click="changePage(page+1)">下一页</a></li>
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
        lists:[],
        list:[],
        len:1,
        page:1,
        cat_id:null,
        isData:false,
      }
    },
    components: {Header, Footer, v_aside},
    created(){
      this.cat_id=this.$route.query.list_id;
      this.getacademicList(this.cat_id);
    },
    methods:{
      getacademicList(id){
        this.isData=true;
        const faqData={
          token:'meichenghuilian20181108',
          cat_id:id,
        };
        getListData(faqData).then(res=>{
          if(res.code===200){
            this.lists=res.msg;
            this.isData=false;
            this.changePage(1);
          }else {
            this.$message.error(res.msg);
            this.isData=false;
          }
        })
      },
      goDetail(id){
        this.$router.push(`/academic/detail/${id}`)
      },
      changePage(page){
        if(page<1){
          this.$message.info('已经是第一页了');
          page=1;
        }
        if(this.lists.length>6){
          this.len=Math.ceil(this.list.length/6);
          if(page>this.len){
            this.$message.info('已经是最后一页了');
            page=this.len;
          }
        }else {
          this.len=page=1;
        }
        this.page=page;
        this.list=this.lists.slice((page-1)*6,page*6)
      }
    }
  }
</script>

<style scoped lang="scss">
  .academicList{
    .page-link:focus{
      box-shadow: none;
    }
    main{
      display: flex;
      align-items: flex-start;
      aside,.academic_list{
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
        /*margin:0 20px 40px;*/
        margin-right:30px;
        padding-bottom:100px;
        ul{
          padding:0 20px;
          li{
            margin:10px auto;
            text-align: justify;
          }
        }
      }
      .academic_list{
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
            cursor: pointer;
            a:hover{
              color:orangered;
            }
          }
        }
      }
    }
  }
</style>

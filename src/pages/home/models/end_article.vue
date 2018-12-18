<template>
  <div class="article">
    <ul class="tabs">
      <li :class="isTabs===1?'tabs_active':''" @click="goArticleDetail(1)">论文查重技巧</li>
      <li :class="isTabs===2?'tabs_active':''" @click="goArticleDetail(2)">常见问题</li>
      <li :class="isTabs===3?'tabs_active':''" @click="goArticleDetail(3)">学术资讯</li>
    </ul>
    <ul class="tabs_content">
      <li v-show="isTabs===1">
        <div v-if="isData" v-loading="isData" style="height:180px;width:100%;"></div>
        <div v-else class="article_box" v-for="(item,index) in article_list" :key="index" @click="goDetail(item.id,'skill')">
          <div class="article_title">
            <h4>{{item.title}}</h4>
            <span>{{item.begin_date}}</span>
          </div>
          <span class="article_content" v-html="item.content"></span>
        </div>
      </li>
      <li v-show="isTabs===2">
        <div v-if="isData" v-loading="isData" style="height:180px;width:100%;"></div>
        <div v-else class="article_box" v-for="(item,index) in article_list" :key="index" @click="goDetail(item.id,'faq')">
          <div class="article_title">
            <h4>{{item.title}}</h4>
            <span>{{item.begin_date}}</span>
          </div>
          <span class="article_content" v-html="item.content"></span>
        </div>
      </li>
      <li v-show="isTabs===3">
        <div v-if="isData" v-loading="isData" style="height:180px;width:100%;"></div>
        <div v-else class="article_box" v-for="(item,index) in article_list" :key="index" @click="goDetail(item.id,'academic')">
          <div class="article_title">
            <h4>{{item.title}}</h4>
            <span>{{item.begin_date}}</span>
          </div>
          <span class="article_content" v-html="item.content"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {getListData} from "@/api/getList";

  export default {
    data() {
      return {
        isTabs:1,
        article_list:null,
        isData:false, //加载中
      }
    },
    created(){
      this.goArticleDetail(1);
    },
    methods: {
      goArticleDetail(id) {
        this.isTabs=id;
        this.isData =true;
        const faqData={
          token:'meichenghuilian20181108',
          cat_id:id,
        };
        getListData(faqData).then(res=>{
          if(res.code===200){
            this.isData =false;
            this.article_list=res.msg;
          }else {
            this.$message.error(res.msg);
            this.isData =false;
          }
        })
      },
      goDetail(id,name){
        this.$router.push(`/${name}/detail/${id}`)
      },
    }
  }
</script>

<style scoped lang="scss">
  .article {
    background-color: #fff;
    padding: 60px 80px 60px;
    ul.tabs {
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 3px solid #1754A5;
      li {
        width: 33.33%;
        line-height: 55px;
        font-size: 18px;
        text-align: center;
        cursor: pointer;
      }
      .tabs_active {
        background-color: #1754a5;
        color: #fff;
      }
    }
    ul.tabs_content {
      li {
        margin-top: 35px;
        color: #5A5A5A;
        .article_box {
          margin: 40px 15px;
          cursor: pointer;
          .article_title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 18px;
            margin-bottom: 10px;
            span {
              font-family: SimSun;
              font-size: 14px;
              color: #acacac;
            }
          }
          .article_content {
            width: 60%;
            font-size: 12px;
            /*overflow: hidden;*/
            /*text-overflow: ellipsis;*/
            /*display: -webkit-box;*/
            /*-webkit-line-clamp: 1;*/
            /*-webkit-box-orient: vertical;*/
          }
        }
      }
    }
  }
</style>

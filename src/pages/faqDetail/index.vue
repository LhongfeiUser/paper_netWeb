<template>
  <div class="detail">
    <main>
      <h2 v-if="content_arr">{{content_arr.title}}</h2>
      <div class="detail-other">
        <a @click="detail_prev">上一篇</a>
        <a @click="detail_next">下一篇</a>
      </div>
      <div v-if="content_arr" class="detail_content" v-html="content_arr.content">
        <p>
          1、首先看 总-xx% 的截图文件，学位论文检测系统是整篇上传，如果没有这个文件肯定不是学位论文检测系统检测的。
        </p>
        <p>
          （1）截图上面有VIP（或TMLC）的标志，说明是用VIP版本检测的。
        </p>
      </div>
    </main>
  </div>
</template>

<script>
  import {getFaqDetail} from "@/api/getDetail";
  export default {
    data() {
      return {
        detail_id:null,
        content_arr:[],
        article_id_index:null,
        article_id_arr:[],
      }
    },

    created() {
      this.article_id_arr =JSON.parse(sessionStorage.getItem('catObj'));
      this.detail_id=this.$route.params.id;
      this.article_id_index=this.article_id_arr.indexOf(Number(this.detail_id));
      this.getFaqDetailData(this.detail_id)
    },

    methods: {

      detail_prev(){ //上一页
        let prev_id=null;
        if(this.article_id_index!==0){
          prev_id = this.article_id_arr[this.article_id_index-1];
          this.article_id_index=this.article_id_index-1;
          this.getFaqDetailData(prev_id);
          this.$router.push(`/detail/${prev_id}`)
        }else {
          return this.$message.info('已经是第一篇文章了')
        }

      },

      detail_next(){ //下一页
        let next_id=null;
        if(this.article_id_index!==this.article_id_arr.length-1){
          next_id = this.article_id_arr[this.article_id_index+1];
          this.article_id_index=this.article_id_index+1;
          this.getFaqDetailData(next_id);
          this.$router.push(`/detail/${next_id}`)
        }else {
          next_id=this.article_id_arr.length-1;
          return this.$message.info('已经是最后一篇文章了')
        }
      },

      getFaqDetailData(id) {
        const faqDetail = {
          token: 'meichenghuilian20181108',
          detail_id: id,
        };
        getFaqDetail(faqDetail).then(res => {
          if(res.code===200){
            this.content_arr=res.msg;
          }else {
            this.$message.error(res.msg);
          }
        })
      },
    }
  }
</script>

<style scoped lang="scss">
  main{
    background:#fff;
    padding:0 40px 80px;
    min-height: 100vh;
    h2{
      text-align: center;
      padding:20px 0;
      font-size: 22px;
      color: #424242;
      border-bottom: 1px #e8e8e8 solid;
    }
    .detail-other{
      text-align: center;
      padding-top: 20px;
      a{
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 16px;
        width: 30%;
        color: #f5a543;
        cursor: pointer;
      }
      a:hover{
        color:#f5a543;
      }
    }
    .detail_content{
      margin-left:25px;
      margin-right:25px;
      p{
        text-align: left;
        margin-top: 18px;
        margin-bottom: 0;
        line-height: 1.8;
        font-size: 16px;
        white-space: normal;
        padding: 0;
        color: rgb(34, 34, 34);
        font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", "Helvetica Neue", Arial, sans-serif;
        background-color: rgb(255, 255, 255)
      }
    }
  }
</style>

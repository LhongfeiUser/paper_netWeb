<template>
  <div class="detail">
    <main>
      <h2 v-if="content_arr">{{content_arr.title}}</h2>
      <div class="detail-other">
        <a @click="detail_prev">上一篇</a>
        <a @click="detail_next">下一篇</a>
      </div>
      <div class="detail_content" v-html="content_arr.content"></div>
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
      }
    },

    created() {
      this.detail_id=this.$route.params.id;
      this.getFaqDetailData(this.detail_id)
    },

    methods: {

      detail_prev(){ //上一页
        let next_id =this.detail_id=parseInt(this.detail_id)-1;
        if(next_id<0){
          next_id=this.detail_id=0;
          return this.$message.info('已经是第一篇文章了')
        }
        this.getFaqDetailData(next_id);
        this.$router.push(`/academic/detail/${next_id}`)
      },

      detail_next(){ //下一页
        let next_id =this.detail_id=parseInt(this.detail_id)+1;
        if(next_id>9){
          next_id=this.detail_id=9;
          return this.$message.info('已经是最后一篇文章了')
        }
        this.getFaqDetailData(next_id);
        this.$router.push(`/academic/detail/${next_id}`)
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

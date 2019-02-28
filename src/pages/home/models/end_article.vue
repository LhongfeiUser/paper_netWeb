<template>
  <div class="article">
    <div class="article_box">
      <div class="article_title">
        <h3>论文查重技巧</h3>
        <span class="more">更多>></span>
      </div>
      <ul>
        <li>1、论文开题报告写作指南</li>
        <li>2、三招最有效论文查重修改技巧</li>
        <li>5、论文查重前必看</li>
        <li>6、论文查重前必看</li>
        <li>7、论文查重前必看</li>
        <li>3、论文查重降低重复率修改技巧的10点建议...</li>
        <li>4、论文查重前必看论文查重前必看论文查重前必看论文查重前必看论文查重前必看论文查重前必看论文查重前必看</li>
      </ul>
    </div>
    <div class="article_box">
      <div class="article_title">
        <h3>常见问题</h3>
        <span class="more">更多>></span>
      </div>
      <ul>
        <li>1、论文开题报告写作指南</li>
        <li>2、三招最有效论文查重修改技巧</li>
        <li>3、论文查重降低重复率修改技巧的10点建议...</li>
        <li>4、论文查重前必看论文查重前必看论文查重前必看论文查重前必看论文查重前必看论文查重前必看论文查重前必看</li>
        <li>5、论文查重前必看</li>
        <li>6、论文查重前必看</li>
        <li>7、论文查重前必看</li>
      </ul>
    </div>
    <div class="article_box">
      <div class="article_title">
        <h3>学术咨询</h3>
        <span class="more">更多>></span>
      </div>
      <ul>
        <li>1、论文开题报告写作指南</li>
        <li>2、三招最有效论文查重修改技巧</li>
        <li>3、论文查重降低重复率修改技巧的10点建议...</li>
        <li>4、论文查重前必看论文查重前必看论文查重前必看论文查重前必看论文查重前必看论文查重前必看论文查重前必看</li>
        <li>5、论文查重前必看</li>
        <li>6、论文查重前必看</li>
        <li>7、论文查重前必看</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {getListData} from "@/api/getList";

  export default {
    data() {
      return {}
    },
    created(){
      this.goArticleDetail(2);
    },
    methods: {
      goArticleDetail(id) {
        const faqData={
          token:'meichenghuilian20181108',
          cat_id:id,
        };
        getListData(faqData).then(res=>{
          if(res.code===200){
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
    width:1260px;
    margin:auto;
    padding:95px 0 125px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .article_box{
      width:32%;
      border:1px solid #e7e7e7;
      box-shadow: 5px 5px 5px #dedede;
      padding:20px 15px;
    }
    .article_title{
      display: flex;
      justify-content:space-between;
      align-items: center;
      border-bottom:1px solid #e1b05d;
      padding-bottom:20px;
      margin-bottom:20px;
      h3{
        color:#3a3a3a;
        font-size:20px;
        font-weight: 500;
      }
      .more{
        color:#999;
        font-size:12px;
        cursor: pointer;
      }
    }
    ul{
      li{
        margin:10px 0;
        text-overflow:ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size:14px;
        color:#999;
        cursor: pointer;
      }
    }
  }
</style>

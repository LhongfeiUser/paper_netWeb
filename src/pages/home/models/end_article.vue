<template>
  <div class="end_article">
    <div class="article_box">
      <div class="article_title">
        <h3>论文查重技巧</h3>
        <router-link :to="{path:'/article/1',query:{list_id:article_id[0].id}}">
          <span class="more">更多>></span>
        </router-link>
      </div>
      <ul>
        <li v-for="(item,index) in duplicateArr" :key="index" @click="goDetail(item.id)">
          {{index+1}}、{{item.title}}
        </li>
      </ul>
    </div>
    <div class="article_box">
      <div class="article_title">
        <h3>常见问题</h3>
        <router-link :to="{path:'/article/2',query:{list_id:article_id[1].id}}">
          <span class="more">更多>></span>
        </router-link>
      </div>
      <ul>
        <li v-for="(item,index) in faqArr" :key="index" @click="goDetail(item.id)">
          {{index+1}}、{{item.title}}
        </li>
      </ul>
    </div>
    <div class="article_box">
      <div class="article_title">
        <h3>学术咨询</h3>
        <router-link :to="{path:'/article/3',query:{list_id:article_id[2].id}}">
          <span class="more">更多>></span>
        </router-link>
      </div>
      <ul>
        <li v-for="(item,index) in consultArr" :key="index" @click="goDetail(item.id)">
          {{index+1}}、{{item.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {getListData} from "@/api/getList";

  export default {
    data() {
      return {
        objList: {},
        faqArr: '',
        duplicateArr: '',
        consultArr: '',
        article_id: '',
      }
    },
    created() {
      if(sessionStorage.getItem('article_id')){
        this.article_id = JSON.parse(sessionStorage.getItem('article_id')).slice(2, 5);
        this.article_id.forEach((item, index) => {
          this.goArticleDetail(item.id, index);
        });
      }
    },
    methods: {
      async goArticleDetail(id, index) {
        const faqData = {
          token: 'meichenghuilian20181108',
          cat_id: id,
        };
        await getListData(faqData).then(res => {
          if (res.code === 200) {
            this.objList[index] = res.msg;
          } else {
            this.$message.error(res.msg);
            this.isData = false;
          }
        });
        this.duplicateArr = this.objList[0];
        this.faqArr = this.objList[1];
        this.consultArr = this.objList[2];
      },

      goDetail(id) {
        let c = [],d=null;
        d=this.faqArr;
        for (let i = 0; i < d.length; i++) {
          c.push(d[i].id)
        }
        let catObj = JSON.stringify(c);
        sessionStorage.setItem('catObj', catObj);
        this.$router.push(`/detail/${id}`)
      },
    }
  }
</script>

<style scoped lang="scss">
  .end_article {
    width: 1260px;
    margin: auto;
    padding: 95px 0 125px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .article_box {
      width: 32%;
      height: 320px;
      overflow: hidden;
      border: 1px solid #e7e7e7;
      box-shadow: 5px 5px 5px #dedede;
      padding: 20px 15px;
    }
    .article_title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e1b05d;
      padding-bottom: 20px;
      margin-bottom: 20px;
      h3 {
        color: #3a3a3a;
        font-size: 20px;
        font-weight: 500;
      }
      .more {
        color: #999;
        font-size: 12px;
        cursor: pointer;
      }
    }
    ul {
      li {
        margin: 10px 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 14px;
        color: #999;
        cursor: pointer;
      }
    }
  }
</style>

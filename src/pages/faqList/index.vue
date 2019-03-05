<template>
  <div class="faqList">
    <main>
      <aside>
        <v_aside></v_aside>
      </aside>
      <div class="faqList_list">
        <h3>常见问题</h3>
        <div v-if="isData" v-loading="isData" style="height:80px;width:100%;"></div>
        <ul v-else class="list_content">
          <li v-for="(item,index) in list" :key="index" @click="goDetail(item.id)">
            {{index+1+(page-1)*10}}、{{item.title}}
          </li>
        </ul>
        <ul class="pagination pagination-sm">
          <li class="page-item">
            <a class="page-link text-black-50"
               href="javascript:void(0)"
               @click="changePage(page-1)">上一页
            </a>
          </li>
          <li :class="item===page?'page-item active':'page-item'" v-for="item in len" :key="item">
            <a class="page-link text-black-50"
               href="javascript:void(0)"
               @click="changePage(page)">{{item}}
            </a>
          </li>
          <li class="page-item">
            <a class="page-link text-black-50"
               href="javascript:void(0)"
               @click="changePage(page+1)">下一页
            </a>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
  import v_aside from '@/components/v-aside'
  import {getListData} from "@/api/getList";

  export default {
    components: {v_aside},
    data() {
      return {
        list: [],
        lists: [],
        cat_id: null,
        isData: false,
        page: 1,
        len: 1,
        param_id:null,
        resTitle:[],
      }
    },
    watch:{
      '$route'(to,form){
        this.getFaqList(to.query.list_id);
        this.param_id=to.params.params_id;
      }
    },
    created() {
      this.cat_id = this.$route.query.list_id;
      this.param_id=this.$route.params.params_id;
      this.getFaqList(this.cat_id);
    },
    methods: {
      getFaqList(id) {
        this.isData = true;
        const faqData = {
          token: 'meichenghuilian20181108',
          cat_id: id,
        };
        getListData(faqData).then(res => {
          if (res.code === 200) {
            this.lists = res.msg;
            this.changePage(1);
            this.isData = false;
          } else {
            this.$message.error(res.msg);
            this.isData = false;
          }
        })
      },
      goDetail(id) {
        this.$router.push(`/detail/${id}`)
      },
      changePage(page) {
        if (page < 1) {
          this.$message.info('已经是第一页了');
          page = 1;
        }
        if (this.lists.length > 10) {
          this.len = Math.ceil(this.lists.length / 10);
          if (page > this.len) {
            this.$message.info('已经是最后一页了');
            page = this.len;
          }
        } else {
          this.len = page = 1;
        }
        this.page = page;
        this.list = this.lists.slice((page - 1) * 10, page * 10);
        let c=[];
        for(let i=0;i<this.lists.length;i++){
           c.push(this.lists[i].id)
        }
        let catObj=JSON.stringify(c);
        sessionStorage.setItem('catObj',catObj)
      }
    }
  }
</script>

<style scoped lang="scss">
  .faqList {
    .page-link:focus {
      box-shadow: none;
    }
    main {
      display: flex;
      align-items: flex-start;
      width:1260px;
      margin:auto;
      aside, .faqList_list {
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
      aside {
        width: 18%;
        background-color: #fff;
        margin-right: 30px;
        padding-bottom: 100px;
      }
      .faqList_list {
        padding: 40px 80px;
        width: 85%;
        min-height:100vh;
        background-color: #fff;
        h3 {
          font-size: 24px;
          border-bottom: 1px #e8e8e8 solid;
          padding-bottom: 10px;
        }
        .list_content {
          counter-reset: sectioncounter;
          /*li:before {
            content: counter(sectioncounter) "、";
            counter-increment: sectioncounter;
          }*/
          li:hover {
            color: orangered;
            cursor: pointer;
          }
          li {
            margin: 20px auto;
            font-size: 18px;
            border-bottom: 1px dashed #b9b9b9;
            padding-bottom: 20px;
            cursor: pointer;
            a:hover {
              color: orangered;
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div class="app-container">
    <div  v-if="isDetail" >
      <div class="operationCourse_title">
        <span class="el-icon-question"/>
        <h4>操作教程</h4>
      </div>
      <el-table
        :data="course_list"
        border
        style="width: 100%">
        <el-table-column
          prop="id"
          label="ID"
          align="center"
          width=""/>
        <el-table-column
          prop="name"
          label="文章标题"
          align="center"
          width="">
          <template slot-scope="scope">
            <div @click="toDetail(scope.row)" style="color: #2c63ad;cursor: pointer;">{{scope.row.title}}</div>
          </template>
        </el-table-column>
        <el-table-column
          prop="type"
          label="文章类型"
          align="center"
          width=""/>
        <el-table-column
          prop="create_time"
          label="创建时间"
          align="center"
          width=""/>
        <el-table-column
          prop="update_time"
          label="更新时间"
          align="center"
          width=""/>
        <el-table-column
          prop="desc"
          label="文章描述"
          align="center"
          width=""/>
        <el-table-column
          prop="key"
          label="文章关键字"
          align="center"
          width=""/>
        <el-table-column
          prop="status"
          label="状态"
          align="center"
          width=""/>
      </el-table>
      <el-pagination
        :total="10"
        background
        layout="prev, pager, next"/>
    </div>
    <div v-if="!isDetail" class="pageArticle">
      <h3>
        {{_article.title}}
        <span @click="isDetail=!isDetail" style="color:#2c63ad;cursor: pointer;font-size:12px;margin-top:20px;">返回目录</span>
      </h3>
      <div class="pageArticleContent" v-html="_article.content"></div>
    </div>
  </div>

</template>

<script>
  import {operation} from "../api/backstageApi/backstage";

  export default {
    data() {
      return {
        course_list:[],
        isDetail:true,
        _article:{title:'教程',content:'啥都没有'},
      }
    },
    created(){
      this.getoperation();
    },
    methods:{
      getoperation(){
        let operationData={
          title:'',
          token:'meichenghuilian20181108'
        };
        operation(operationData).then(res=>{
          if(res.code===200){
            this.course_list=res.data;
          }
        })
      },
      toDetail(row){
        this.isDetail=!this.isDetail;
        this._article=row;
      }
    }
  }
</script>

<style scoped lang="scss">
  .el-pagination {
    text-align: end;
    margin-top: 5vh;
  }

  .operationCourse_title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #f5f7fa;
    color: #909399;
    padding:12px 0;
    span {
      font-size: 20px;
      margin: auto 10px;
    }
  }
  .pageArticle{
    h3{
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top:50px;
      text-align: center;
      color:#000;
      font-size:20px;
    }
    .pageArticleContent{
      max-width:850px;
      margin:80px auto;
      font-size:16px;
    }
  }
</style>

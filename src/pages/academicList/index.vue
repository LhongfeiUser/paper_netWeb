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
        <ul class="academic_content">
          <li>
            <router-link :to="{name:'academicDetail',params:{id:1}}">
              大学毕业生所必须了解和掌握的文献综述与科学论文
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'academicDetail', params: { id: 2 }}">
              浅谈turnitin文献相似度检测系统及其应用 - 香港大学
            </router-link>
          </li>
          <li>
            国外大学是如何利用Turnitin杜绝学术抄袭的
          </li>
          <li>
            什么是原创、伪原创、抄袭，三者有什么关系?
          </li>
          <li>
            中华人民共和国教育部令第40号:高等学校预防与处理学术不端行为办法
          </li>
          <li>
            针对学术打假为原创力提供空间 各国如何进行
          </li>
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
  export default {
    data() {
      return {
      }
    },
    components: {Header, Footer, v_aside},
  }
</script>

<style scoped lang="scss">
  .academicList{
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
        width:18vw;
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
        width:80vw;
        background-color: #fff;
        h3{
          font-size:24px;
          border-bottom:1px #e8e8e8 solid;
          padding-bottom:10px;
        }
        .academic_content{
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

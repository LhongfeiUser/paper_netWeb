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
        <p>
          （2）上部左侧有文章及作者信息，还有总文字复制比和总重合字数。大部分学校基本只看总文字复制比这个指标，具体要求各个学校不同，一般5%-30%。
        </p>
        <p>
          （3）上部中间偏是参考文献字数，系统会自动识别文章末尾的参考文献，如能识别就会单独放在这里，不参与检测。
        </p>
        <p>
          （4）截图下部是各段落的抄袭比例，系统会识别文章的大纲目录，如果能被正确识别就会按照章节进行分段，否则会自动分段。
        </p>
        <p>
          （5）总文字复制比由各段落复制比加权平均得来。
        </p>
        <p>
          2、然后看文本复制检测报告单，这个是系统自动导出的检测报告，并非手工拼凑。
        </p>
        <p>
          （1）最上部是文章及作者信息，总复制比以及比对库范围等内容。
        </p>
        <p>
          （2）然后是文章及段落抄袭率概要，此部分对应总截图文件。
        </p>
        <p>
          （3）接着就是各段落的详细检测报告，包括被抄袭文献的信息，并且系统识别出来的抄袭的文字会被标红处理，您只要修改红字就可以了。
        </p>
        <p>
          3、其他检测报告可供您参考，会告诉您那句话抄袭了哪篇文章，作者是谁、文献来源是哪里以及发表时间。蓝色显示的字体可以链接到系统入口，这个可以鉴别检测系统的真伪。
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
        this.$router.push(`/faq/detail/${next_id}`)
      },

      detail_next(){ //下一页
        let next_id =this.detail_id=parseInt(this.detail_id)+1;
        if(next_id>9){
          next_id=this.detail_id=9;
          return this.$message.info('已经是最后一篇文章了')
        }
        this.getFaqDetailData(next_id);
        this.$router.push(`/faq/detail/${next_id}`)
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

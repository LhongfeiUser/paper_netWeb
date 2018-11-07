<template>
  <div class="upload_paper">
    <div class="system_option">
      <h3>检测系统选择</h3>
      <div class="option_content">
        <ul>
          <li>知网系统</li>
          <li><a href="javascript:void(0)">知网小分解系统</a></li>
          <li><a href="javascript:void(0)">知网大分解系统</a></li>
          <li><a href="javascript:void(0)">知网本科PMLC系统</a></li>
          <li><a href="javascript:void(0)">知网硕博VIP系统</a></li>
        </ul>
        <ul>
          <li>修改系统</li>
          <li><a href="javascript:void(0)">CheckPass检测系统</a></li>
          <li><a href="javascript:void(0)">PaperPass检测系统</a></li>
          <li><a href="javascript:void(0)">维普论文检测系统</a></li>
          <li><a href="javascript:void(0)">Gocheck论文检测系统</a></li>
        </ul>
      </div>
    </div>
    <div class="article_upload">
      <ul id="myTab" class="nav nav-tabs">
        <li class="active"><a href="#single" data-toggle="tab">单篇上传</a></li>
        <li><a href="#More_than" data-toggle="tab">多篇上传</a></li>
        <li><a href="#download" data-toggle="tab">下载报告</a></li>
      </ul>
      <div id="myTabContent" class="tab-content">
        <div class="tab-pane fade in active" id="single">
          <form class="form-horizontal" role="form">
            <div class="form-group">
              <label class="control-label">论文题目</label>
              <div class="col-sm-5">
                <input class="form-control" type="text" maxlength="200" placeholder="论文题目不超过200字（*必填）">
              </div>
            </div>
            <div class="form-group">
              <label class="control-label">文章作者</label>
              <div class="col-sm-5">
                <input class="form-control" type="text" maxlength="15" placeholder="作者名字不能超过15个字（*必填）">
              </div>
            </div>
            <div class="form-group">
              <label class=" control-label">待检论文</label>
              <div class="col-sm-4">
                <input class="form-control" type="text" placeholder="仅支持word文档.doc和.docx格式">
              </div>
              <div class="">
                <input type="file" ref="paperUpload" accept="file/.docx,file/.doc,file/.txt,file/.pdf" style="display: none;">
                <button class="btn btn-outline-warning" @click="upload">上传</button>
              </div>
            </div>
          </form>
          <div class="apply">
            <span class="apply_way">支付方式</span>
            <div class="apply_content">
              <div class="apply_zfb" @click="apply_zfb">
                <img src="../../assets/images/zhifubao.png">
                <span>支付宝支付</span>
              </div>
              <div class="apply_wx">
                <img src="../../assets/images/wx.png">
                <span>微信支付</span>
              </div>
              <div style="display: none;" ref="showApply">666666666</div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="More_than">
          <p>2</p>
        </div>
        <div class="tab-pane fade" id="download">
          <p>3</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    created() {
    },
    mounted() {
      $('#myTab a:first').tab('show')
    },
    methods: {
      upload() {
        this.$refs.paperUpload.click();
      },
      apply_zfb(){
        this.$refs.showApply.style.display='block'
      }
    }
  }
</script>

<style lang="less">
  .upload_paper {
    .system_option {
      h3 {
        color: #555555;
        border-bottom: 1px dashed #d2d2d2;
        padding-bottom: 10px;
      }
      .option_content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        ul {
          display: flex;
          justify-content: flex-start;
          margin: 20px 0 0;
          li {
            margin-left: 40px;
            a {
              color: #888;
              padding-bottom: 5px;
            }
            a:hover {
              color: orangered;
            }
            a:focus {
              border-bottom: 2px solid orangered;
            }
          }
          li:nth-child(1) {
            color: #d2d2d2;
            padding-right: 10px;
          }
        }
      }
    }
    .article_upload {
      border: 1px solid #efefef;
      background-color: #efefef;
      margin-top: 20px;
      input::-webkit-input-placeholder {
        color: #aab2bd;
        font-size: 12px;
        text-align: left;
      }
      .nav-tabs {
        border: none;
        background-color: #fefefe;
        padding: 20px;
        .active {
          color: #f49f00;
        }
        li {
          margin: auto 20px;
          a:hover {
            color: #f49f00;
          }
        }
      }
      .tab-content {
        margin-top: 40px;
        padding-left:40px;
        #single{
          .form-horizontal {
            .form-group {
              display: flex;
              align-items: center;
              .control-label {
                color: #828282;
                text-align: right;
              }
              .form-control {
                color: #888;
                font-size: 16px;
              }
              .form-control:focus {
                box-shadow: none;
              }
            }
          }
          .apply{
            display: flex;
            color:#888;
            .apply_way{
              padding-left:0;
            }
            .apply_content{
              display: flex;
              .apply_zfb,.apply_wx{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                img{
                  width:60px;
                  height:60px;
                  margin-bottom:20px;
                  vertical-align: center;
                }
              }
              .apply_zfb{
                margin:auto 50px;
              }
            }
          }
        }

      }
    }
  }
</style>

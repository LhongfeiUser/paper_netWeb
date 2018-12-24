<template>
  <div>
    <div class="naming_rule">
      <span class="naming_rule_title">命名规则</span>
      <div class="naming_rule_detail">
        <span>上传的检测文献文件名请按以下格式命名，有助于系统提取作者姓名。</span> <br>
        <span class="rule">格式规则：序号_作者姓名_文件标题.doc</span>
        <p>
          例如：1_小明_信息管理系统的的设计.doc <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2_小红_人口增长与可持续发展.doc
        </p>
      </div>
    </div>
    <form class="form-horizontal">
      <div class="form-group">
        <label class=" control-label">学生证件</label>
        <div class="col-sm-4">
          <input class="form-control" type="text" placeholder="请上传学生证" v-model="more_studentImgName">
        </div>
        <div class="">
          <input type="file" ref="more_studentIdUpload" accept="image/gif,image/jpeg,image/jpg,image/png"
                 style="display: none;" @change="more_getStudentID">
          <button type="button" class="btn btn-outline-warning" @click="more_studentID">上传</button>
        </div>
      </div>
      <div class="form-group">
        <label class="control-label">手机号码</label>
        <div class="col-sm-5">
          <input class="form-control" type="text" v-model="more_phoneCode" maxlength="11"
                 placeholder="请您输入正确的手机号">
        </div>
      </div>
      <div class="form-group">
        <label class=" control-label">手机验证</label>
        <div class="col-sm-3">
          <input class="form-control" type="text" v-model="m_authCode" @burl.prevent="" placeholder="请输入收到的验证码">
        </div>
        <div class="">
          <button type="button" class="btn btn-outline-warning" v-show="more_authCode" @click="more_getAuthCode">
            获取验证码
          </button>
          <button type="button" class="btn" v-show="!more_authCode" style="cursor:not-allowed;color:#888">
            {{more_time}}重新发送
          </button>
        </div>
      </div>
    </form>
    <div class="under_detection">
      <div class="form-group">
        <label class="control-label">待检论文</label>
        <div style="padding-left:15px;">
          <input class="form-control" v-show="isShow" disabled="disabled" type="text"
                 placeholder="仅支持word文档.doc和docx格式">
          <div class="upload_success" v-for="(item,index) in filesList" v-show="!isShow">
            <input class="form-control" type="text" :value="item.name"> <i class="iconfont icon-shanchu1"
                                                                           @click="upload_delete(index)"></i>
          </div>
          <input ref="more_paperUpload" style="display: none;" type="file" accept=".doc,.docx" multiple="multiple"
                 @change="getMoreArticle">
        </div>
      </div>
      <button type="button" class="btn btn-outline-warning" @click="more_upload">上传论文</button>
    </div>
    <Apply_model></Apply_model>
  </div>
</template>

<script>
  import {uploadArticle, studentID, student_info, getAuth} from "@/api/upload_paper";
  import Apply_model from './apply_model'
  export default {
    components:{Apply_model},
    data() {
      return {
        isShow: true,
        more_isApply_show: false,
        more_studentImgName: '',
        more_phoneCode: '',
        m_authCode: '',
        filesList: [],
        more_authCode: true,
        more_time: 0,
      }
    },
    methods: {
      more_studentID() {
        this.$refs.more_studentIdUpload.click();
      },
      more_getStudentID(e) {
        let file = e.target.files[0];
        if (file) {
          type = file.name.substring(file.name.lastIndexOf('.')),
            AllImgExt = ".jpg|.jpeg|.gif|.png|",
            upLoadSize = 1024 * 1024;
          if (file.name.lastIndexOf('.') === -1) {
            this.$message.warning('路径不正确');
            return false
          }
          if (AllImgExt.indexOf(type + "|") === -1) {
            this.$message.error(type + '格式不支持');
            return false
          }
          if (file.size > upLoadSize) {
            this.$message.error('图片过大，请重新上传');
            return false;
          }
          this.more_studentImgName = file.name
        } else {
          this.$message.warning('请选择文件')
        }
      },

      more_getAuthCode() {
        if (/^1(3|4|5|6|8)\d{9}$/.test(this.more_phoneCode)) {
          this.more_authCode = false;
          this.more_time = 30;
          let single_timetimer = setInterval(() => {
            this.more_time--;
            if (this.more_time <= 0) {
              this.more_authCode = true;
              clearInterval(single_timetimer);
            }
          }, 1000);
        } else {
          this.$message.error('手机号码有误，请重新输入')
        }
      },

      more_upload() {
        this.$refs.more_paperUpload.click();
      },

      getMoreArticle(e) {
        let files = e.target.files;
        let formdata = new FormData();
        for (let n of files) {
          let type = n.name.substring(n.name.lastIndexOf('.')),
            ArrType = '.doc|.docx|',
            uploadSize = 10 * 1024 * 1024;
          if (ArrType.indexOf(type + '|') === -1) {
            this.$message.error(type + '文件格式不正确请重新上传');
            return false
          }
          if (n.size > uploadSize) {
            this.$message.error(n.name + '文件超过限制文件大小');
            return false
          }
          this.filesList.push(n);
          formdata.append('file', n);
        }
        formdata.append('status', 'file');
        if (this.filesList.length > 0) {
          this.isShow = false;
          uploadArticle(formdata).then(res => {
            if (res) {
              console.log(res);
              this.$message.success('上传成功');
              this.$refs.more_paperUpload.value = null;
            }
          })
        }
      },

      upload_delete(dx) {
        if (isNaN(dx) || dx > this.filesList.length) {
          return false;
        }
        for (let i = 0, n = 0; i < this.filesList.length; i++) {
          if (this.filesList[i] !== this.filesList[dx]) {
            this.filesList[n++] = this.filesList[i];
          }
        }
        this.filesList.length -= 1;
        if (this.filesList.length === 0) {
          this.isShow = true;
        }
        this.filesList = this.filesList.slice();
        console.log(this.filesList);
      },
    }
  }
</script>

<style scoped lang="scss">
  button:focus {
    box-shadow: none;
  }

  input::-webkit-input-placeholder {
    color: #aab2bd;
    font-size: 14px;
    text-align: left;
  }

  .naming_rule, .under_detection, .apply {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .naming_rule {
    .naming_rule_title {
      color: #888;
      margin-right: 40px;
    }
    .naming_rule_detail {
      margin-top: 10px;
      color: #555;
      font-size: 16px;
      span {
        display: inline-block;
        margin: 10px auto;
      }
      .rule {
        color: red;
      }
      :last-child {
        color: #888;
      }
    }
  }

  .form-horizontal {
    margin-top: 20px;
    input {
      font-size: 16px;
    }
    .form-group {
      display: flex;
      align-items: center;
      .control-label {
        color: #828282;
        text-align: right;
        margin-right: 20px;
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

  .under_detection {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    button {
      margin-left: 100px;
    }
    .form-group {
      display: flex;
      align-items: center;
      .upload_success {
        position: relative;
        input {
          color: #aab2bd;
          font-size: 14px;
          text-align: left;
        }
        i {
          position: absolute;
          top: 0;
          right: 0;
          font-size: 24px;
          color: #555;
          cursor: pointer;
        }
      }
      .form-control {
        margin: 10px auto;
        padding-right: 25px;
        color: #888;
        font-size: 16px;
      }
      .form-control:focus {
        box-shadow: none;
      }
      .control-label {
        margin-right: 20px;
        color: #888;
      }
    }
  }
</style>

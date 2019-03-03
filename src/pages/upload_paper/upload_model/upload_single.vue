<template>
  <div>
    <form class="form-horizontal" role="form">
      <div class="form-group">
        <label class="control-label">论文题目</label>
        <div class="col-sm-5">
          <input
            class="form-control"
            type="text"
            maxlength="200"
            placeholder="论文题目不超过200字（*必填）"
            v-model="single_name">
        </div>
      </div>
      <div class="form-group">
        <label class="control-label">文章作者</label>
        <div class="col-sm-5">
          <input
            class="form-control"
            type="text" maxlength="15"
            v-model="single_author"
            placeholder="作者名字不能超过15个字（*必填）">
        </div>
      </div>
      <div class="form-group">
        <label class="control-label">手机号码</label>
        <div class="col-sm-5">
          <input class="form-control"
                 type="text"
                 v-model="single_phoneCode"
                 maxlength="11"
                 placeholder="请您输入正确手机号">
        </div>
      </div>
      <div class="form-group">
        <label class=" control-label">手机验证</label>
        <div class="col-sm-3">
          <input
            class="form-control"
            type="text"
            v-model="s_authCode"
            @burl.prevent=""
            placeholder="请输入收到的验证码">
        </div>
        <div>
          <button type="button" class="btn btn-outline-warning" v-show="single_authCode"
                  @click="single_getAuthCode">获取验证码
          </button>
          <button type="button" class="btn" v-show="!single_authCode" style="cursor:not-allowed;color:#888">
            {{single_time}}重新发送
          </button>
        </div>
      </div>
      <div class="form-group">
        <label class=" control-label">学生证件</label>
        <div class="col-sm-4">
          <input class="form-control" v-model="single_studentImgName" type="text" placeholder="请上传学生证">
        </div>
        <div class="">
          <input type="file" ref="single_studentIdUpload" accept="image/gif,image/jpeg,image/jpg,image/png"
                 style="display: none;" @change="single_getStudentID">
          <button type="button" class="btn btn-outline-warning" @click="single_studentID">上传</button>
        </div>
      </div>
      <div class="form-group">
        <label class=" control-label">待检论文</label>
        <div class="col-sm-4">
          <input class="form-control" disabled v-model="single_content" type="text"
                 placeholder="仅支持word文档.doc和.docx格式">
        </div>
        <div class="">
          <input type="file" ref="paperUpload" accept=".doc,.docx" style="display: none;" @change="getArticle">
          <button type="button" class="btn btn-outline-warning" @click="single_upload">上传</button>
        </div>
      </div>
      <div class="form-group">
        <button type="button" style="margin-left:80px;" class="btn btn-outline-warning" @click="upload_sure">确定上传</button>
      </div>
    </form>
    <Apply_model :stu_id="stu_id" :order_info="order_info" :order_price="order_price"></Apply_model>
  </div>
</template>

<script>

  import {uploadArticle, studentID, student_info, getAuth} from "@/api/upload_paper";
  import Apply_model from './apply_model'

  export default {
    components: {Apply_model},
    data() {
      return {
        single_studentImgName: '',
        single_phoneCode: '',
        single_name: '',
        single_content: '',
        s_authCode: '',
        single_authCode: true,
        single_time: 0,
        single_author: null,
        lunwen_id: null,
        card_id: null,
        order_price: null,
        stu_id: null,
        order_info: {},
        member_id: '',
      }
    },
    created() {
      this.member_id = this.$route.query.agent_id || '';
    },
    props:['cate_id'],
    methods: {
      single_studentID() { //学生证上传
        this.$refs.single_studentIdUpload.click();
      },
      single_getStudentID(e) { //获取学生证
        let file = e.target.files[0],
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
        this.single_studentImgName = file.name;
        let formdata = new FormData();
        formdata.append('file', file);
        formdata.append('status', 'file');
        const loading = this.$loading({
          lock: true,
          text: '正在上传...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        studentID(formdata).then(res => {
          if (res && res.code === 200) {
            loading.close();
            this.card_id = res.card_id;
            this.$message.success('学生证上传成功')
          } else {
            loading.close();
            this.$message.error('上传失败，请刷新重试')
          }
        })
      },

      single_upload() { //单篇文章上传
        if (1) {//this.isAuthCode
          this.$refs.paperUpload.click();
        } else {
          this.$message.error('请填写正确手机验证码');
        }
      },

      getArticle(e) { //获取上传文章
        let file = e.target.files[0];
        let type = file.name.substring(file.name.lastIndexOf('.')),
          ArrType = '.doc|.docx|',
          uploadSize = 10 * 1024 * 1024;
        if (ArrType.indexOf(type + '|') === -1) {
          this.$message.error(type + '文件格式不正确请重新上传');
          return false
        }
        if (file.size > uploadSize) {
          this.$message.error(file.name + '文件超过限制文件大小');
          return false
        }
        this.single_name = file.name.split('.')[0];
        this.single_content = file.name;
        let formdata = new FormData();
        formdata.append('file', file);
        formdata.append('status', 'file');
        const loading = this.$loading({
          lock: true,
          text: '正在上传...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        uploadArticle(formdata).then(res => {
          if (res) {
            console.log(res);
            loading.close();
            this.order_price = res.price;
            this.lunwen_id = res.lunwen_id;
            this.$message.success('论文上传成功');
          } else {
            loading.close();
            this.$message.error('上传失败，请刷新重试')
          }
        })
      },

      single_getAuthCode() { //获取手机验证
        if (/^1(3|4|5|6|8)\d{9}$/.test(this.single_phoneCode)) {
          this.single_authCode = false;
          this.single_time = 30;
          let single_timetimer = setInterval(() => {
            this.single_time--;
            if (this.single_time <= 0) {
              this.single_authCode = true;
              clearInterval(single_timetimer);
            }
          }, 1000);
          getAuth({phone_num: this.single_phoneCode}).then(res => {
            console.log(res.auth);
          })
        } else {
          this.$message.error('手机号码有误，请重新输入')
        }
      },

      upload_sure() {
        const loading = this.$loading({
          lock: true,
          text: '正在上传...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        console.log(typeof this.cate_id);
        let infoData = {
          title: this.single_name,
          tel: this.single_phoneCode,
          student_card_id: this.card_id,
          not_lunwen_id: this.lunwen_id,
          author: this.single_author,
          price: this.order_price,
          member_id: this.member_id,
          interface_type: 1,
        };
        student_info(infoData).then(res => {
          if (res && res.code === 200) {
            console.log(res);
            this.stu_id = res.stu_id;
            this.order_info = res.order;
            loading.close();
            this.$message.success('学生信息提交成功');
          } else {
            this.$message.error(res.msg);
            loading.close();
          }
        })
      },
    }
  }
</script>

<style scoped lang="scss">
  .form-horizontal {
    button:focus {
      box-shadow: none;
    }
    input::-webkit-input-placeholder {
      color: #aab2bd;
      font-size: 14px;
      text-align: left;
    }
    input {
      font-size: 16px;
    }
    .form-group {
      display: flex;
      align-items: center;
      .control-label {
        color: #828282;
        text-align: right;
      }
      .form-control {
        color: #aab2bd;
        font-size: 14px;
        text-align: left;
      }
      .form-control:focus {
        box-shadow: none;
      }
    }
  }
</style>

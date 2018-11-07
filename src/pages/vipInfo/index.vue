<template>
  <div class="vipInfo">
    <span class="vip_title">欢迎您,<strong>admin!</strong></span>
    <div class="vip_card">
      <span class="vip_datum">资料管理</span>
      <div class="vip_infoContent">
        <div class="vip_img">
          <img :src="avatar" @click="setAvatar" width="210" height="280">
          <input type="file" name="avatar" accept="image/gif,image/jpeg,image/jpg,image/png" style="display:none"
                 @change="changeImage($event)" ref="avatarInput">
          <button @click="setAvatar">上传学生证</button>
        </div>
        <ul class="personalInfo">
          <li>
            姓名：<span>admin</span><br>
          </li>
          <li>
            性别：<span>男</span>
          </li>
          <li>
            地区：<span>哈工大</span>
          </li>
          <li>
            手机号：<span>131333023</span>
          </li>
          <li>
            密码：<span>******</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        avatar: 'https://goss.veer.com/creative/vcg/veer/1600water/xiaba-123024045.jpg',
      }
    },
    created() {
      // this.avatar =''
    },
    methods: {
      getinfo() {
      },
      setAvatar() {
        this.$refs.avatarInput.click()
      },
      changeImage(e) {
        var file = e.target.files[0]
        var reader = new FileReader()
        var that = this
        console.log(reader);
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          that.avatar = this.result
        }
      }
      /*add_img(event) {
        var url;
        if (navigator.userAgent.indexOf("MSIE") >= 1) { // IE
          url = document.getElementById('sourceId').value;
        } else if (navigator.userAgent.indexOf("Firefox") > 0) { // Firefox
          url = window.URL.createObjectURL(document.getElementById('sourceId').files.item(0));
        } else if (navigator.userAgent.indexOf("Chrome") > 0) { // Chrome
          url = window.URL.createObjectURL(document.getElementById('sourceId').files.item(0));
        }
        console.log(url);

        let reader = new FileReader();
        let img1 = event.target.files[0];
        let type = img1.type;//文件的类型，判断是否是图片  
        let size = img1.size;//文件的大小，判断图片的大小  
        if (this.imgData.accept.indexOf(type) === -1) {
          alert('请选择我们支持的图片格式！');
          return false;
        }
        if (size > 3145728) {
          alert('请选择3M以内的图片！');
          return false;
        }
        var uri = ''
        console.log(img1);
        /!* let form = new FormData();
         form.append('file', img1, img1.name);*!/
        console.log(reader.readAsDataURL(img1));
        /!* this.$http.post('/file/upload', form, {
           headers: {'Content-Type': 'multipart/form-data'}
         }).then(response => {
           console.log(response.data)
           uri = response.data.url
           reader.readAsDataURL(img1);
           var that = this;
           reader.onloadend = function () {
             that.imgs.push(uri);
           }
         }).catch(error => {
           alert('上传图片出错！');
         })*!/
      }*/
    }
  }
</script>

<style scoped lang="less">
  .vipInfo {
    /*padding: 0 40px;*/
    .vip_title {
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      color: #333;
      font-weight: 100;
      strong {
        color: #e50012;
      }
    }
    .vip_card {
      border: 1px solid #ccc;
      padding: 40px;
      .vip_datum {
        display: inline-block;
        height: 20px;
        overflow: hidden;
        line-height: 20px;
        font-size: 18px;
        color: #333;
        border-left: 3px solid #fa3b4a;
        text-indent: 6px;
        margin-bottom: 10px;
      }
      .vip_infoContent {
        padding: 50px 0 200px 50px;
        border-top: 2px solid #efefef;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .vip_img{
          display: flex;
          flex-direction: column;
        }
      }
      .personalInfo {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-left: 10vw;
        align-items: flex-end;
        li{
          margin:20px 0;
          font-family: "Apple Color Emoji";
          color:#555;
          span{
            display: inline-block;
            min-width:200px;
            background-color:#f5f5f5;
            padding:5px 25px;
            text-align: left;
            color:#888;
          }
        }
      }
    }
  }


</style>

<template>
  <div class="dashboard-container">
    <div class="box-card-component" style="margin-left:8px;">
      <div class="box-card-header">
        <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png">
      </div>
      <div class="dashboard-text">
        <div>姓名 : admin</div>
        <div>身份 :<span> 代理商</span></div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .dashboard {
    &-container {
      width: 60vw;
      margin: 30px auto;
    }
    &-text {
      margin-top: 60px;
      margin-left: 20px;
      font-size: 24px;
      line-height: 46px;
    }
  }

  .box-card-component {
    position: relative;
    padding-bottom: 200px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #303133;
    -webkit-transition: .3s;
    transition: .3s;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    border-radius: 4px;
    overflow: hidden;
    .box-card-header {
      padding: 0;
      position: relative;
      height: 280px;
      img {
        width: 100%;
        height: 100%;
        transition: all 0.2s linear;
        &:hover {
          transform: scale(1.1, 1.1);
          filter: contrast(130%);
        }
      }
    }
  }
</style>

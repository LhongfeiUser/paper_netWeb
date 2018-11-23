<template>
    <div class="aside">
      <ul class="nav nav-pills">
        <!--<li class="nav-item">
          <router-link to="/process" active-class="nav-link active">
            <span>论文查重流程</span>
          </router-link>
        </li>-->
        <li class="nav-item">
          <router-link to="/skill" active-class="nav-link active">
            <span>论文查重技巧</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/faq" active-class="nav-link active">
            <span>常见问题</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/academic" active-class="nav-link active">
            <span>学术资讯</span>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="scss">
  .aside{
    ul{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      li{
        width:100%;
        margin:15px 0;
        font-size:16px;
        text-align: left;
        a{
          padding:20px 0 20px 5vw;
          color:#000;
        }
      }
    }
  }
  .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    color:#ffc107;
    background-color:#f5f5f5;
    border-right:5px solid #ffc107;
  }
</style>

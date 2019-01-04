<template>
  <div class="system_module">
    <img :src="selectionData.module_img">
    <div class="module_content">
      <h4>{{selectionData.detecting_system}}</h4>
      <div>
        <strong>使用范围：</strong>
        {{selectionData.range}}
      </div>
      <div>
        <strong>产品说明：</strong>
        {{selectionData.products}}
      </div>
      <div class="S_versions_box" v-if="selectionData.S_versions.length>1">
        <strong>版本选择：</strong>
        <span
          v-for="(i,index) in selectionData.S_versions"
          @click="current=index"
          :class="current===index?'S_versions_content':''">{{i}}</span>
      </div>
    </div>
    <div class="detect">
      <transition name="slide-fade" mode="out-in">
        <li v-if="current===idx" v-for="(item,idx) in selectionData.price" :key="item">
          <span>
            <strong>{{item}}</strong>元/篇
          </span>
          <button class="btn" @click="detection(current,selectionData)">立即检测</button>
        </li>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        current: 0
      }
    },
    props: ['selectionData'],
    methods: {
      detection(cur,list){
        console.log(cur,list);
      }
    }
  }
</script>

<style scoped lang="scss">
  .system_module {
    height: 175px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    font-size: 14px;
    background-image: linear-gradient(20deg, #614E9F 15%, #2C63AD 85%);
    border-radius: 8px;
    padding: 0 30px;
    margin-bottom: 60px;
    img {
      width: 140px;
      height: 150px;
      border-radius: 8px;
    }
    .detect {
      li {
        min-width: 128px;
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
          strong {
            font-size: 28px;
            font-weight: 600;
          }
        }
        .btn {
          margin-top: 20px;
          background-color: inherit;
          border: 1px solid #fff;
          color: #fff;
          width: 100% !important;
        }
        .btn:hover {
          background-color: rgba(255, 87, 0, 1);
          border-color: rgba(255, 87, 0, 1);
        }
      }
    }
    .module_content {
      margin-right: 50px;
      width: 600px;
      line-height: 30px;
      strong {
        font-weight: 500;
      }
      h4 {
        margin-bottom: 10px;
        font-weight: 600;
      }
      .S_versions_box {
        span {
          display: inline-block;
          margin: 0 5px;
          padding: 0 5px;
          cursor: pointer;
        }
        .S_versions_content {
          border: 1px solid #fff;
        }
      }
    }
  }

  .system_module:last-child {
    margin-bottom: 40px;
  }

  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all .5s;
  }

  .slide-fade-enter {
    transform: translateY(-60px);
    opacity: 0;
  }

  .slide-fade-leave-to {
    transform: translateY(60px);
    opacity: 0;
  }
</style>

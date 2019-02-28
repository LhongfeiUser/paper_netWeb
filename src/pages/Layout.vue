<template>
  <div class="layout">
    <Header :category="category"></Header>
    <router-view :category="category"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import {getCategory} from "../api/category";
  import Footer from '@/components/Footer'
  import Header from '@/components/Header'
  export default {
    data() {
      return{
        category:null,
      }
    },
    components: {Footer,Header},
    created() {
      let categoryData = {
        token: 'meichenghuilian20181108',
      };
      getCategory(categoryData).then(res => {
        if (res) {
          let arr = [];
          for (let i = 0; i < res.length; i++) {
            let obj = {};
            obj.category_name = res[i].category_name;
            obj.id = res[i].id;
            arr.push(obj)
          }
          this.category = arr;
        }
        else {
          this.$message.error(res.msg)
        }
      });
    },
  }
</script>

<style scoped>
  .eader{
    position: absolute!important;
    z-index: 99;
    width: 1260px;
    left: 50%;
    margin-left: -630px;
    background-color: inherit!important;
  }
</style>

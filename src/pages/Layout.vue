<template>
  <div class="layout">
    <Header :category="category"></Header>
    <router-view></router-view>
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
    async created() {
      let categoryData = {
        token: 'meichenghuilian20181108',
      };
     await getCategory(categoryData).then(res => {
        if (res) {
          let arr = [];
          for (let i = 0; i < res.length; i++) {
            let obj = {};
            obj.category_name = res[i].category_name;
            obj.id = res[i].id;
            arr.push(obj)
          }
          this.category = arr;
          sessionStorage.setItem('article_id',JSON.stringify(arr))
        }
        else {
          this.$message.error(res.msg)
        }
      });
    },
  }
</script>

<style scoped>

</style>

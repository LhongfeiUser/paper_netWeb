<template>
    <div class="aside">
      <ul class="nav nav-pills">
        <!--<li class="nav-item">
          <router-link to="/process" active-class="nav-link active">
            <span>论文查重流程</span>
          </router-link>
        </li>-->
        <li class="nav-item" v-for="(item,index) in category">
          <router-link :to="{path:routeArr[index], query:{list_id:item.id}}" active-class="nav-link active">
            <span>{{item.category_name}}</span>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
  import {getCategory} from "../api/category";
    export default {
      data(){
        return{
          category:'',
          routeArr:['/skill','/faq','/academic']
        }
      },
       created(){
         this.bus.$on('toChangeTitle', function (arr) {
           this.category=arr.slice(2,5);
         });
         this.getRouteArr();
      },
      mounted(){
      },
      methods:{
        getRouteArr(){
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
              this.category = arr.slice(2,5);
            }
            else {
              this.$message.error(res.msg)
            }
          });
        }
      },
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
        font-size:20px;
        text-align: left;
        a{
          padding:20px 0 20px 4vw;
          color:#888;
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

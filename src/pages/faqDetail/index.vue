<template>
    <div>
      faqDetail
    </div>
</template>

<script>
  import {getFaqDetail} from "@/api/getDetail";

  export default {
        data(){
          return{}
        },
      created(){
        this.getFaqList()
      },
      methods:{
        getFaqList(){
          const faqDetail={
            token:'meichenghuilian20181108',
            detail_id:2,
          };
          getFaqDetail(faqDetail).then(res=>{
            console.log(res);
          })
        },
      }
    }
</script>

<style scoped lang="scss">

</style>

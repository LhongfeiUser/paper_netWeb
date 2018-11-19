<template>
    <div>
      faqDetail
    </div>
</template>

<script>
    export default {
        data(){
          return{}
        },
      created(){
        this.getFaqList()
      },
      methods:{
        getFaqList(){
          let postData=this.$qs.stringify({
            token:'meichenghuilian20181108',
            detail_id:2,
          });
          this.axios({
            url:'/api/getNewDetail',
            method:'post',
            data:postData,
            headers:{
              'Content-Type':'application/x-www-form-urlencoded',
            },
          }).then(res=>{
            console.log(res);
          }).catch((err)=>{
          })
        },
      }
    }
</script>

<style scoped lang="scss">

</style>

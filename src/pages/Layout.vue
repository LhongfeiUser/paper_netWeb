<template>
  <div>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '@/components/Footer'
  import Header from '@/components/Header'
  export default {
    data() {
      return{}
    },
    components: {Footer,Header}

  }
</script>

<style scoped>

</style>

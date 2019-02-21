<template>
  <div class="system_module">

    <div class="detect">
      <transition name="slide-fade" mode="out-in">

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

</style>

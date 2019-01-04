<template>
  <div class="poster">
    <canvas ref="posterCanvas" style="background-color: inherit;width:200px;height:200px"></canvas>
    <a :href="posterImg" download="wj.png">下载</a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        posterImg:'',
      }
    },
    methods: {
      draw(url) {
        let c = this.$refs.posterCanvas;
        let ctx = c.getContext('2d');
        let img = new Image();
        let that =this;
        img.src = require('../assets/images/lwcc.jpg');
        img.onload=function () {
          ctx.drawImage(img, 0, 0, 300, 100);
          let img2 = new Image();
          // img2.crossOrigin = "Anonymous";
          img2.src = url;
          img2.onload =function(){
            ctx.drawImage(img2, 240, 0, 60, 60);
            that.posterImg =c.toDataURL("image/png",1);
          };
        };
      }
    }
  }
</script>

<style scoped>

</style>

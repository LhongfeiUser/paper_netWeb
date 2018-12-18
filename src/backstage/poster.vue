<template>
  <div class="poster">
    <canvas ref="posterCanvas" style="background-color: orangered;width:200px;height:200px"></canvas>
  </div>
</template>

<script>
  /*function draw(url){
    let c = $('#posterCanvas')[0];
    let ctx = c.getContext('2d');
    let img=new Image();
    // img.crossOrigin = "Anonymous";
    img.src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540196843851&di=c82b7bb81919a0b8462506efb9b3682b&imgtype=0&src=http%3A%2F%2Fscimg.jb51.net%2Fallimg%2F140314%2F11-140314110FcI.jpg';
    ctx.drawImage(img,0,0,300,200);
    let img2 =new Image();
    // img2.crossOrigin = "Anonymous";
    console.log(url);
    img2.src=url;
    ctx.drawImage(img2,200,0,100,50);
    // console.log(c.toDataURL());
  }*/
  export default {
    data() {
      return {}
    },
    props:['imgurl'],
    mounted(){
      this.draw(this.imgurl);
    },
    methods: {
      draw(url){
    let c = this.$refs.posterCanvas;
        let ctx = c.getContext('2d');
    let img=new Image();
    // img.crossOrigin = "Anonymous";
    img.src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540196843851&di=c82b7bb81919a0b8462506efb9b3682b&imgtype=0&src=http%3A%2F%2Fscimg.jb51.net%2Fallimg%2F140314%2F11-140314110FcI.jpg';
    ctx.drawImage(img,0,0,300,200);
    let img2 =new Image();
    // img2.crossOrigin = "Anonymous";
    console.log(url);
    img2.src=url;
    ctx.drawImage(img2,200,0,100,50);
    // console.log(c.toDataURL());
  }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div class="slide-container" @mouseover="stopInterval" @mouseout="runInterval">
   <div class="slide-img">
   <router-link :to="{ path:slides[slideIndex].href }">
      <transition name="slide-trans">
        <img v-if="isShow" :src="slides[slideIndex].src" width="900" height="500">
      </transition>
      <transition name="slide-trans-old">
        <img v-if="!isShow" :src="slides[slideIndex].src" width="900" height="500">
      </transition>
   </router-link>
      <div class="slide-pages">       
        <ul class="slide-ul">
          <li @click="goto(preIndex)"><</li>
          <li v-for="(item, index) in slides" @click="goto(index)" :class="{'slide-on': index === slideIndex}">{{ index + 1 }}</li>
          <li @click="goto(nextIndex)">></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    slides:{
      type: Array,
      default: []
    },
    time:{
      type: Number,
      default: 1000
    }
  },
  data() {
    return{
      slideIndex: 0,
      isShow: true//每次更替的时候触发
    }
  },
  methods:{
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.slideIndex = index
        this.$emit('onchange', index)//触发事件
      },10)
    },
/*    pre(){
      if(this.slideIndex == 0){
        var length = this.slides.length
        this.slideIndex = length -1
        return
      }
      this.slideIndex--
    },
    next(){
      var length = this.slides.length
      if(this.slideIndex == length - 1){
        this.slideIndex = 0
        return
      }
      this.slideIndex++
    }*/
    runInterval(){
      this.intervalId = setInterval(()=>{
        this.goto(this.nextIndex)
      },this.time)
    },
    stopInterval(){
      clearInterval(this.intervalId)
    }
  },
  computed:{
    preIndex(){
      if(this.slideIndex == 0){
        return this.slides.length - 1
      }
      else{
        return this.slideIndex - 1
      }
    },
    nextIndex(){
      if(this.slideIndex == this.slides.length - 1){
        return 0
      }
      else{
        return this.slideIndex + 1
      }
    }
  },
  mounted(){
    this.runInterval()
  }
}
</script>

<style scoped>
.slide-container{
  height: 500px;
  margin: 15px 0;
  position: relative;
  overflow: hidden;
}
.slide-pages{
  background-color: black;
  opacity: 0.5;
  color: white;
  width: 100%;
  height: 30px;
  position: absolute;
  top: 470px;
}
.slide-ul{  
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.slide-ul li{
  padding-right: 10px;
  cursor: pointer;
}
.slide-ul li:hover{
  text-decoration: underline;
}
.slide-on{
  text-decoration: underline;
}
li{
  display: inline-block;
}
/*.slide-trans-enter{
  transform: translateX(900px);
}
.slide-trans-enter-active{
  transition: all 2s;
}
.slide-trans-old-leave-active{
  transform: translateX(-900px);
  transition: all 2s;
}*/
.slide-img img{
  position: absolute;
  top: 0;
}
.slide-trans-enter-active {
  transition: all 2s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all 2s;
  transform: translateX(-900px);
}
</style>
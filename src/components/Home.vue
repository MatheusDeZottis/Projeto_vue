<template>
  
   
    <h1>Seja bem-vindo ao meu portfólio!
        Aqui você encontra minhas experiências e projetos. </h1>

        <div class="carousel">
    <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="carousel-item" v-for="(image, index) in images" :key="index">
        <img :src="image" :alt="'Image ' + (index + 1)" />
      </div>
    </div>
    <button class="carousel-control prev" @click="prevSlide">‹</button>
    <button class="carousel-control next" @click="nextSlide">›</button>
    </div>

</template>

<style scoped>
.carousel {
  position: relative;
  width: 800px;
  height: 400px;
  overflow: hidden;
  margin: 0 auto;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 400%; /* 4 imagens */
}

.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
}

.carousel-item img {
  width: 100%;
  height: auto;
  display: block;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  z-index: 10;
}

.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}

</style>

<script>

import image1 from "@/assets/img/fotohackthon.jpg";
import image2 from "@/assets/img/fotohackthon.jpg";
import image3 from "@/assets/img/fotohackthon.jpg";
import image4 from "@/assets/img/fotohackthon.jpg";

export default {
  data() {
    return {
      images: [image1, image2, image3, image4],
      currentIndex: 0,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
  },
};



</script>
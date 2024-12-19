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

<style scoped></style>

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
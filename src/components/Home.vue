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


</script>
<template>
  <section class="section-carrosel" aria-label="Carrossel de imagens">
    <div class="carrosel">
      <div class="carrosel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div 
          class="carrosel-item" 
          v-for="(image, index) in images" 
          :key="index" 
          :aria-hidden="currentIndex !== index"
          :aria-label="'Slide ' + (index + 1) + ' de ' + images.length"
        >
          <img 
            :src="image.src" 
            :alt="image.alt || 'Imagem ' + (index + 1)" 
          />
        </div>
      </div>

      <!-- Botões de navegação -->
      <button 
        class="carrosel-control prev" 
        @click="prevSlide" 
        aria-label="Slide anterior"
      >‹</button>
      <button 
        class="carrosel-control next" 
        @click="nextSlide" 
        aria-label="Próximo slide"
      >›</button>

      <!-- Indicadores de progresso -->
      <div class="carrosel-indicators">
        <span 
          v-for="(image, index) in images" 
          :key="index" 
          :class="{ active: index === currentIndex }" 
          @click="goToSlide(index)"
          :aria-label="'Ir para o slide ' + (index + 1)"
        ></span>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Define o espaço abaixo do header */
.section-carrosel {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 80px auto 0; /* Ajusta o espaçamento abaixo do header */
}

/* Estrutura do carrossel */
.carrosel {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.carrosel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out; /* Transição mais fluida */
}

.carrosel-item {
  min-width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.carrosel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ajusta a imagem ao tamanho do carrossel */
  border-radius: 10px;
}

/* Controles de navegação */
.carrosel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 30px;
  cursor: pointer;
  padding: 10px;
  z-index: 10;
  border-radius: 50%;
  transition: background 0.3s ease;
}

.carrosel-control:hover {
  background: rgba(0, 0, 0, 0.7);
}

.carrosel-control.prev {
  left: 10px;
}

.carrosel-control.next {
  right: 10px;
}

/* Indicadores de navegação */
.carrosel-indicators {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.carrosel-indicators span {
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s ease;
}

.carrosel-indicators span.active {
  background: white;
  transform: scale(1.2);
}

/* Responsividade */
@media (max-width: 1024px) {
  .section-carrosel {
    max-width: 90%;
    margin-top: 60px;
  }

  .carrosel {
    height: 350px;
  }
}

@media (max-width: 768px) {
  .section-carrosel {
    margin-top: 50px;
  }

  .carrosel {
    height: 300px;
  }

  .carrosel-control {
    font-size: 24px;
    padding: 8px;
  }

  .carrosel-indicators span {
    width: 10px;
    height: 10px;
  }
}

@media (max-width: 480px) {
  .section-carrosel {
    margin-top: 40px;
  }

  .carrosel {
    height: 250px;
  }
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
    goToSlide(index) {
      this.currentIndex = index;
    },
  },
};
</script>

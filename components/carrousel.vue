<template>
    <Carousel ref="carousel" v-model="currentSlide" snapAlign="start">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">{{ slide }}</div>
      </Slide>
  
      <template #addons>
        <Navigation />
        <!-- <Pagination /> -->
      </template>
    </Carousel>
    <!-- <div id="buttoncase">
      <UButton @click="prev">Prev</UButton>
      <UButton @click="next">Next</UButton>
    </div> -->
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  // export default defineComponent({
  //   name: 'Basic',
  //   components: {
  //     Carousel,
  //     Slide,
  //     Pagination,
  //     Navigation,
  //   },
  // })

  export default defineComponent({
  name: 'CustomNavigation',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    currentSlide: 0,
  }),
  methods: {
    next() {
      this.$refs.carousel.next()
    },
    prev() {
      this.$refs.carousel.prev()
    },
  },
})
  </script>
  
  <style>
  .carousel__item {
    min-height: 200px;
    width: 90%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel__slide {
    padding: 10px;
  }
  
  .carousel__prev :hover,
  .carousel__next :hover{
    box-sizing: content-box;
    border: thick solid black;
    background-color: black;
    color: white;
    
  }
  </style>
  
<script setup>
import { inject, computed } from 'vue'
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/effect-fade";


const bg = inject('bgProv')
const countTimer = inject('countTimerProv')
const bgTime = inject('bgTimeProv')

const modules = [Pagination, Navigation, Autoplay, EffectFade]
const swiperSlide = useSwiperSlide();
const swiper = useSwiper();

const autoPlay = computed(() => {
  return {
    delay: bgTime.value / 2,
    disableOnInteraction: false
  }
})

const fade = computed(() => {
  return 'fade'
})

</script>

<template>
  <Swiper v-if="bg.length > 0" :effect="fade" :speed="bgTime" :loop="true" :pagination="{ type: 'progressbar' }" :autoplay="autoPlay"
    :modules="modules" class="mySwiper">
    <SwiperSlide v-for="bgs in bg" :key="bgs.id" :style="
    {
      backgroundImage: `url(${bgs.url})`,
      backgroundSize: bgs.size,
      backgroundRepeat: bgs.repeat,
      backgroundColor: bgs.color,
      backgroundPosition: bgs.position,
    }">
    </SwiperSlide>
  </Swiper>

</template>
<style>
.swiper-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
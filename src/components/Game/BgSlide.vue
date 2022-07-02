<script setup>
import { inject, computed, watchEffect, ref} from 'vue'
import { Autoplay, EffectFade, EffectCards } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'
import "swiper/css/effect-fade";
import "swiper/css/effect-cards"

const modules = [Autoplay, EffectFade, EffectCards]
const bg = inject('bgProv')
const bgTime = inject('bgTimeProv')
const swipr = inject('swiperProv');
const swiperEffect = inject('swiperEffectProv')
const swiperCondition = ref(false)

let onSwiper = (swiper) => {
  swipr.value = swiper;
}

watchEffect(() => {
  if (bg.value.length > 1) {
    swiperCondition.value = true
  }
})

watchEffect((onInvalidate) => {
  if (bg.value.length > 1) {
    if (swiperEffect.value) {
      swiperCondition.value = false
      const showBg = setTimeout(() => {
        swiperCondition.value = true
      }, 500);

      onInvalidate(() => {
        clearInterval(showBg)
      })

    }
  }
})

const isAutoPlay = computed(() => {
  return {
    delay: bgTime.value / 2,
    disableOnInteraction: false
  }
})

const isSwiperEffect = computed(() => {
  return swiperEffect.value
})

const isSpeed = computed(() => bgTime.value)

</script>

<template>
  <Swiper v-if="swiperCondition" @swiper="onSwiper" :speed="isSpeed" :effect="isSwiperEffect" :loop="true"
    :pagination="{ type: 'progressbar' }" :autoplay="isAutoPlay" :modules="modules">
    <SwiperSlide v-for="bgs in bg" :key="bgs.id" :style="
    {
      backgroundImage: `url(${bgs.url})`,
      backgroundSize: bgs.size,
      backgroundRepeat: bgs.repeat,
      backgroundColor: bgs.color,
      backgroundPosition: bgs.position,
      filter:  `brightness(${bgs.brightness}) blur(${bgs.blur}px) 
                contrast(${bgs.contrast}) grayscale(${bgs.grayscale}%)
                hue-rotate(${bgs.hue}deg) invert(${bgs.invert}%) 
                saturate(${bgs.saturate}) sepia(${bgs.sepia})`
    }">
    </SwiperSlide>
  </Swiper>
</template>
<style>
.swiper-wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  left: 0px;
}
</style>
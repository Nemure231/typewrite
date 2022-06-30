<script setup>
import { inject} from 'vue'
const bg = inject('bgProv')

</script>

<template>
 <div v-for="bg2 in bg" class="fixed inset-0" :style="
    {
      backgroundImage: `url(${bg2.url})`,
      backgroundSize: bg2.size,
      backgroundRepeat: bg2.repeat,
      backgroundColor: bg2.color,
      backgroundPosition: bg2.position,
      filter: `brightness(${bg2.brightness}) blur(${bg2.blur}px) 
                contrast(${bg2.contrast}) grayscale(${bg2.grayscale}%)
                hue-rotate(${bg2.hue}deg) invert(${bg2.invert}%) 
                saturate(${bg2.saturate}) sepia(${bg2.sepia})`
    }">

 </div>
</template>
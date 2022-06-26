<script setup>
import { inject, computed } from 'vue'

const bg = inject('bgProv');



const sty = computed(() => {

  if(bg.value.length > 0){
    return {
      backgroundImage: `url(${bg.value[0].url})`,
      backgroundSize: bg.value[0].size,
      backgroundRepeat: bg.value[0].repeat,
      backgroundColor: bg.value[0].color,
      backgroundPosition: bg.value[0].position,
    }

  }
})
</script>

<template>
  <div class="fixed inset-0" :style="sty">
  </div>
</template>

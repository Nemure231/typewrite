<script setup>
import { inject, computed } from 'vue'

const bg = inject('bgProv')
const countTimer = inject('countTimerProv')

const changeBg = computed(() => {
  if (bg.value.length > 0) {
    return {
      backgroundImage: `url(${bg.value[countTimer.value].url})`,
      backgroundSize: bg.value[countTimer.value].size,
      backgroundRepeat: bg.value[countTimer.value].repeat,
      backgroundColor: bg.value[countTimer.value].color,
      backgroundPosition: bg.value[countTimer.value].position
    }
  }
})
</script>

<template>
  <div class="fixed bg-center bg-no-repeat inset-0" :style="changeBg">
  </div>
</template>
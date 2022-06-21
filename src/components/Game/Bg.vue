<script setup>
import { inject, computed } from 'vue'

const bg = inject('bgProv')
const countTimer = inject('countTimerProv')

const changeBg = computed(() => {
  if (bg.value.length > 0) {
    return bg.value[countTimer.value].url
  }
})


</script>

<template>
  <div class="fixed bg-center bg-no-repeat inset-0" :style="{
    backgroundImage: `url(${changeBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#FFFFFF'
  }">
  </div>
</template>
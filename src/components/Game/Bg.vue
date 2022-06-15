<script setup>
import { inject, computed } from 'vue'

const bgOrYtProv = inject('bgOrYtProv')
const bg = inject('bgProv')
const countTimer = inject('countTimerProv')


const changeBg = computed(() => {
  if (bg.value.length > 0) {
    return bg.value[countTimer.value].url
  }
})


</script>

<template>
     <div v-if="bgOrYtProv" class="fixed bg-cover bg-center bg-no-repeat inset-0" ref="yt"
    :style="{backgroundImage: `url(${changeBg})`}">
    </div>

</template>
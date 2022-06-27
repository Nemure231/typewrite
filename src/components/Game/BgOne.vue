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
    }">

 </div>
</template>
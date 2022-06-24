<script setup>
import { inject, ref, watch } from 'vue'

const bg = inject('bgProv')
const countTimer = inject('countTimerProv')
const bgTime = inject('bgTimeProv')

const seconds = Math.floor((bgTime.value / 1000) % 60);
var duration = ref(`10s`)

watch(
  () => bgTime.value,
  (now, prev) => {

    duration.value = seconds
  }
)
</script>

<template>
  <TransitionGroup :name="`opacity`" tag="div">
    <div v-show="index == countTimer ? true : false" v-for="(bgs, index) in bg" :key="bgs.id" class="fixed inset-0"
      :style="
        {
          backgroundImage: `url(${bgs.url})`,
          backgroundSize: bgs.size,
          backgroundRepeat: bgs.repeat,
          backgroundColor: bgs.color,
          backgroundPosition: bgs.position,
          // transitionDuration: duration
        }
      ">
    </div>
  </TransitionGroup>
</template>

<style scoped>
.opacity-enter-from {
  /* transform: scale(0.75); */
  opacity: 0
}

.opacity-enter-active {
  transition-duration: v-bind(duration);
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

}

.opacity-enter-to {
  /* transform: scale(1); */
  opacity: 1;

}

.opacity-leave-from {
  /* transform: scale(1); */
  opacity: 1;

}

.opacity-leave-active {
  transition-duration: v-bind(duration);
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.opacity-leave-to {
  /* transform: scale(0.75); */
  opacity: 0
}
</style>
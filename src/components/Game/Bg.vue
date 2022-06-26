<script setup>
import { inject, computed } from 'vue'
import '../../assets/animation/opacity/opacity.css'
import '../../assets/animation/scale/scale-in.css'
import '../../assets/animation/scale/scale-out.css'

import '../../assets/animation/slide/slide-left.css'
import '../../assets/animation/slide/slide-right.css'

import '../../assets/animation/slide/slide-bottom.css'
import '../../assets/animation/slide/slide-bottom-right.css'
import '../../assets/animation/slide/slide-bottom-left.css'

import '../../assets/animation/slide/slide-top.css'
import '../../assets/animation/slide/slide-top-right.css'
import '../../assets/animation/slide/slide-top-left.css'


const bg = inject('bgProv')
const countTimer = inject('countTimerProv')
const bgTime = inject('bgTimeProv')


const dura = computed(() => {
  const mil = bgTime.value + 'ms'
  return mil
})


let showing = (index) => {
  if (index == countTimer.value) {
    return true
  } else {
    return false
  }
}

let delay = (index) => {
  if (countTimer.value == 0) {
    
    return `z-[${bg.value.length + 2}]`
  } else {
    return countTimer.value == index ? (countTimer.value == 0 ? `z-[${index - 2}]` : `z-[${index + 2}]`) : `z-[${index + 1}]`

  }
}


</script>

<template>
  <TransitionGroup :name="`slide-top`" tag="div" class="">
    <div v-show="showing(index)" v-for="(bgs, index) in bg" :key="bgs.id" class="fixed inset-0" :class="delay(index)"
      :style="
        {
          backgroundImage: `url(${bgs.url})`,
          backgroundSize: bgs.size,
          backgroundRepeat: bgs.repeat,
          backgroundColor: bgs.color,
          backgroundPosition: bgs.position,
          transitionDuration: dura,
        }
      
      ">
    </div>
  </TransitionGroup>
</template>

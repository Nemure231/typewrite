<script setup>
import { inject, computed, defineProps } from 'vue'
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

// const props = defineProps({
//   unmo: Boolean
// })

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
    return `z-[${bg.value.length}]`
  } else {
    return countTimer.value == index ? (countTimer.value == 0 ? `z-[${index - 2}]` : `z-[${index + 2}]`) : `z-[${index + 1}]`

  }
}



let onBeforeEnter = (el) => {
  el.style.transform = 'scale(2)'

}
let onEnter = (el, done) => {
  el.style.transitionTimingFunction = `cubic-bezier(0, 0, 0.2, 1)`
  // done()
}

let onAfterEnter = (el) => {
  el.style.transform = `scale(1)`

}
let onEnterCancelled = (el) => {

}

let onBeforeLeave = (el) => {
  el.style.transform = `scale(1)`
  el.style.opacity = `1`
}


let onLeave = (el, done) => {
  el.style.transitionTimingFunction = `cubic-bezier(0.4, 0, 1, 1)`
  // done()
}

let onAfterLeave = (el) => {
  el.style.transform = `scale(0)`
  el.style.opacity = `0`;
}

let onLeaveCancelled = (el) => {

}

</script>
<!-- @before-enter="onBeforeEnter" @enter="onEnter" @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave" @leave="onLeave" @after-leave="onAfterLeave" :css="false" -->
<template>
  <TransitionGroup name="scale-in"  tag="div" class="">
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

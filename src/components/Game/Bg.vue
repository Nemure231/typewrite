<script setup>
import { inject, computed } from 'vue'

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
  return countTimer.value == index ? (countTimer.value == 0 ? `z-[${index - 2}]` : `z-[${index + 2}]`) : `z-[${index + 1}]`
}
</script>

<template>
  <TransitionGroup :name="`scale-in`" tag="div" class="">
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

<style scoped>
.opacity-enter-from {
  opacity: 0
}

.opacity-enter-active {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.opacity-enter-to {
  opacity: 1;

}

.opacity-leave-from {
  opacity: 1;

}

.opacity-leave-active {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.opacity-leave-to {
  opacity: 0
}



/* Scale in */
.scale-in-enter-from {
  transform: scale(1);
}

.scale-in-enter-active {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

}

.scale-in-enter-to {
  transform: scale(1);

}

.scale-in-leave-from {
  transform: scale(1);

}

.scale-in-leave-active {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.scale-in-leave-to {
  transform: scale(0);

}




/* slide top */
.slide-top-enter-from {
  transform: translateY(100%);
}

.slide-top-enter-active {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

}

.slide-top-enter-to {
  transform: translateY(0%);

}

.slide-top-leave-from {
  transform: translateY(0%);

}

.slide-top-leave-active {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.slide-top-leave-to {
  transform: translateY(-100%);

}


/* slide bottom */
.slide-bottom-enter-from {
  transform: translateY(-100%);
}

.slide-bottom-enter-active {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

}

.slide-bottom-enter-to {
  transform: translateY(0%);

}

.slide-bottom-leave-from {
  transform: translateY(0%);

}

.slide-bottom-leave-active {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.slide-bottom-leave-to {
  transform: translateY(100%);

}



/* slide right */
.slide-right-enter-from {
  transform: translateX(-100%);
}

.slide-right-enter-active {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

}

.slide-right-enter-to {
  transform: translateX(0%);

}

.slide-right-leave-from {
  transform: translateX(0%);

}

.slide-right-leave-active {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.slide-right-leave-to {
  transform: translateX(100%);

}





/* slide left */
.slide-left-enter-from {
  transform: translateX(100%);
}

.slide-left-enter-active {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

}

.slide-left-enter-to {
  transform: translateX(0%);

}

.slide-left-leave-from {
  transform: translateX(0%);

}

.slide-left-leave-active {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.slide-left-leave-to {
  transform: translateX(-100%);

}
</style>
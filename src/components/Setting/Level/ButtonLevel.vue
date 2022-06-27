<script setup>
import { inject, ref, computed } from 'vue'

const showTime = inject('showTimeProv')
const moveTime = inject('moveTimeProv')
const currentLevel = ref()

const stateEasy = ref()
const statePlayful = ref()
const stateNormal = ref()
const stateDanger = ref()
const stateHelp = ref()
const stateNightmare = ref()

let easyButton = () => {
  stateEasy.value.click()
  showTime.value = 5000
  moveTime.value = 90
}

let playfulButton = () => {
  statePlayful.value.click()
  showTime.value = 4000
  moveTime.value = 55

}

let normalButton = () => {
  stateNormal.value.click()
  showTime.value = 3000
  moveTime.value = 50

}

let dangerButton = () => {
  stateDanger.value.click()
  showTime.value = 2000
  moveTime.value = 20
}

let helpButton = () => {
  stateHelp.value.click()
  showTime.value = 1000
  moveTime.value = 18
}

let nightmareButton = () => {
  stateNightmare.value.click()
  showTime.value = 500
  moveTime.value = 15
}

const isLevelEasy = computed(() => {
  if (showTime.value == 5000) {
    if (moveTime.value == 90) {
      return 'border-2 border-pink-500'
    }
  }
})

const isPlayfulButton = computed(() => {
  if (showTime.value == 4000) {
    if (moveTime.value == 55) {
      return 'border-2 border-green-500'
    }
  }
})

const isNormalButton = computed(() => {
  if (showTime.value == 3000) {
    if (moveTime.value == 50) {
      return 'border-2 border-blue-500'
    }
  }
})
const isDangerButton = computed(() => {
  if (showTime.value == 2000) {

    if (moveTime.value == 20) {
      return 'border-2 border-red-500'
    }
  }
})

const isHelpButton = computed(() => {
  if (showTime.value == 1000) {
    if (moveTime.value == 18) {
      return 'border-2 border-purple-500'
    }
  }
})


const isNightmareButton = computed(() => {

  if (showTime.value == 500) {

    if (moveTime.value == 15) {
      return 'border-2 border-black'

    }
  }
}

)

</script>
<template>
  <button @click="easyButton()" :class="isLevelEasy"
    class=" rounded-md bg-white text-left font-semibold px-6 py-3 w-full text-lg shadow-md">
    Easygoing,
    <small class="text-xs block  text-pink-500">take your time.</small>
  </button>
  <button @click="playfulButton()" :class="isPlayfulButton"
    class=" rounded-md bg-white text-left font-semibold px-6 py-3  w-full text-lg shadow-md ">
    Playful,
    <small class="text-xs block  text-green-500">enjoy it.</small>
  </button>
  <button @click="normalButton()" :class="isNormalButton"
    class=" rounded-md bg-white text-left font-semibold px-6 py-3 w-full text-lg shadow-md ">
    Normal,
    <small class="text-xs block  text-blue-500">this is good.</small>
  </button>
  <button @click="dangerButton()" :class="isDangerButton"
    class=" rounded-md bg-white text-left font-semibold px-6 py-3 w-full text-lg shadow-md ">
    Danger,
    <small class="text-xs block  text-red-500">sometimes you need challenge.</small>
  </button>
  <button @click="helpButton()" :class="isHelpButton"
    class=" rounded-md bg-white text-left font-semibold px-6 py-3 w-full text-lg shadow-md ">
    Help,
    <small class="text-xs block  text-purple-500">why are you choose this?</small>
  </button>
  <button @click="nightmareButton()" :class="isNightmareButton"
    class=" rounded-md bg-white text-left font-semibold px-6 py-3 w-full text-lg shadow-md  ">
    Nightmare,
    <small class="text-xs block  text-black">are you really human?</small>
  </button>
  <input type="radio" class="hidden" ref="stateEasy" value="1" v-model="currentLevel" />
  <input type="radio" class="hidden" ref="statePlayful" value="2" v-model="currentLevel" />
  <input type="radio" class="hidden" ref="stateNormal" value="3" v-model="currentLevel" />
  <input type="radio" class="hidden" ref="stateDanger" value="4" v-model="currentLevel" />
  <input type="radio" class="hidden" ref="stateHelp" value="5" v-model="currentLevel" />
  <input type="radio" class="hidden" ref="stateNightmare" value="6" v-model="currentLevel" />
</template>

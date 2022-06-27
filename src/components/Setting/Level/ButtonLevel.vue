<script setup>
import { inject, ref } from 'vue'

const showTime = inject('showTimeProv')
const moveTime = inject('moveTimeProv')
const currentLevel = ref(3)

// save for later
// const level = ref([
//   {
//     id: 1,
//     name: 'Easygoing',
//     desc: 'take your time.',
//     classText: currentLevel.value == 1 && 'border-2 border-pink-500',
//     level: [showTime.value = 5000, moveTime.value = 90, currentLevel.value = 1]
//   },
//   {
//     id: 2,
//     name: 'Playful',
//     desc: 'enjoy it.',
//     classText: currentLevel.value == 2 && 'border-2 border-green-500',
//     level: [showTime.value = 4000, moveTime.value = 50, currentLevel.value = 2]
//   },
//   {
//     id: 3,
//     name: 'Normal',
//     desc: 'this is good.',
//     classText: currentLevel.value == 3 && 'border-2 border-blue-500',
//     level: [showTime.value = 3000, moveTime.value = 50, currentLevel.value = 3]
//   },
//   {
//     id: 4,
//     name: 'Danger',
//     desc: 'sometimes challenge is okay',
//     classText: currentLevel.value == 4 && 'border-2 border-red-500',
//     level: [showTime.value = 2000, moveTime.value = 20, currentLevel.value = 4]

//   },
//   {
//     id: 5,
//     name: 'Help',
//     desc: 'Why are you choose this?',
//     classText: currentLevel.value == 5 && 'border-2 border-purple-500',
//     level: [showTime.value = 1000, moveTime.value = 15, currentLevel.value = 5]
//   },
//   {
//     id: 6,
//     name: 'Nightmare',
//     desc: 'are you even human?',
//     classText: currentLevel.value == 6 && 'border-2 border-black',
//     level: [showTime.value = 500, moveTime.value = 15, currentLevel.value = 6]
//   }
// ])

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
  // currentLevel = 1]
}

let playfulButton = () => {
  statePlayful.value.click()
  showTime.value = 4000
  moveTime.value = 50
  // currentLevel = 2]

}

let normalButton = () => {
  stateNormal.value.click()
  showTime.value = 3000
  moveTime.value = 50
  // currentLevel = 3]

}

let dangerButton = () => {
  stateDanger.value.click()
  showTime.value = 2000
  moveTime.value = 20
  // currentLevel = 4]
}

let helpButton = () => {
  stateHelp.value.click()
  showTime.value = 1000
  moveTime.value = 15
  // , currentLevel = 5]
}

let nightmareButton = () => {
  stateNightmare.value.click()

  showTime.value = 500
  moveTime.value = 15
  // currentLevel = 6]
}

</script>
<template>
  <button @click="easyButton()" :class="currentLevel == 1 && 'border-2 border-pink-500'"
    class=" rounded-md bg-white text-left font-semibold px-6 py-3 w-full text-lg shadow-md">
    Easygoing,
    <small class="text-xs block  text-pink-500">take your time.</small>
  </button>

  <button @click="playfulButton()" :class="currentLevel == 2 && 'border-2 border-green-500'"
    class=" rounded-md bg-white text-left font-semibold px-6 py-3  w-full text-lg shadow-md ">
    Playful,
    <small class="text-xs block  text-green-500">enjoy it.</small>
  </button>
  <button @click="normalButton()" :class="currentLevel == 3 && 'border-2 border-blue-500'"
    class=" rounded-md bg-white text-left font-semibold px-6 py-3 w-full text-lg shadow-md ">
    Normal,
    <small class="text-xs block  text-blue-500">this is good.</small>
  </button>
  <button @click="dangerButton()" :class="currentLevel == 4 && 'border-2 border-red-500'"
    class=" rounded-md bg-white text-left font-semibold px-6 py-3 w-full text-lg shadow-md ">
    Danger,
    <small class="text-xs block  text-red-500">sometimes you need challenge.</small>
  </button>
  <button @click="helpButton()" :class="currentLevel == 5 && 'border-2 border-purple-500'"
    class=" rounded-md bg-white text-left font-semibold px-6 py-3 w-full text-lg shadow-md ">
    Help,
    <small class="text-xs block  text-purple-500">why are you choose this?</small>
  </button>
  <button @click="nightmareButton()" :class="currentLevel == 6 && 'border-2 border-black'"
    class=" rounded-md bg-white text-left font-semibold px-6 py-3 w-full text-lg shadow-md  ">
    Nightmare,
    <small class="text-xs block  text-black">are you really human?</small>
  </button>

  <input type="radio" hidden name="" id="" ref="stateEasy" value="1" v-model="currentLevel" />
  <input type="radio" hidden name="" id="" ref="statePlayful" value="2" v-model="currentLevel" />
  <input type="radio" hidden name="" id="" ref="stateNormal" value="3" v-model="currentLevel" />
  <input type="radio" hidden name="" id="" ref="stateDanger" value="4" v-model="currentLevel" />
  <input type="radio" hidden name="" id="" ref="stateHelp" value="5" v-model="currentLevel" />
  <input type="radio" hidden name="" id="" ref="stateNightmare" value="6" v-model="currentLevel" />

</template>

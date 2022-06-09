<script setup>
import { inject, ref } from 'vue'

const showTime = inject('showTimeProv')
const moveTime = inject('moveTimeProv')

const currentLevel = ref(3)

// save for later
// const level = ref([
//     {
//         id: 1,
//         name: 'Easygoing',
//         desc: 'take your time.',
//         classText: 'text-pink-500',
//         active: false,
//     },  
//     {
//         id: 2,
//         name: 'Playful',
//         desc: 'enjoy it.',
//         classText: 'text-green-500',
//         active: false,
//     },  
//     {
//         id: 3,
//         name: 'Normal',
//         desc: 'this is good.',
//         classText: 'text-blue-500',
//         active: true,
//     }, 
//     {
//         id: 4,
//         name: 'Danger',
//         desc: 'sometimes challenge is okay',
//         classText: 'text-red-500',
//         active: false,
//     },  
//      {
//         id: 5,
//         name: 'Help',
//         desc: 'Why are you choose this?',
//         classText: 'text-yellow-500',
//         active: false,
//     },  
//     {
//         id: 6,
//         name: 'Nightmare',
//         desc: 'are you even human?',
//         classText: 'text-black',
//         active: false
//     }
//     ])

</script>
<template>
  <button @click="[showTime = 5000, moveTime = 90, currentLevel = 1]" :class="currentLevel == 1 && 'border-2 border-pink-500'"
    class=" rounded-md bg-white text-left font-semibold px-6 py-3 w-full text-lg shadow-md">
    Easygoing,
    <small class="text-xs block  text-pink-500">take your time.</small>
  </button>
  <button @click="[showTime = 4000, moveTime = 50, currentLevel = 2]" :class="currentLevel == 2 && 'border-2 border-green-500'"
    class=" rounded-md bg-white text-left font-semibold px-6 py-3  w-full text-lg shadow-md ">
    Playful,
    <small class="text-xs block  text-green-500">enjoy it.</small>
  </button>
  <button @click="[showTime = 3000, moveTime = 50, currentLevel = 3]" :class="currentLevel == 3 && 'border-2 border-blue-500'"
    class=" rounded-md bg-white text-left font-semibold px-6 py-3 w-full text-lg shadow-md ">
    Normal,
    <small class="text-xs block  text-blue-500">this is good.</small>
  </button>
  <button @click="[showTime = 2000, moveTime = 20, currentLevel = 4]" :class="currentLevel == 4 && 'border-2 border-red-500'"
    class=" rounded-md bg-white text-left font-semibold px-6 py-3 w-full text-lg shadow-md ">
    Danger,
    <small class="text-xs block  text-red-500">sometimes you need challenge.</small>
  </button>
  <button @click="[showTime = 1000, moveTime = 15, currentLevel = 5]" :class="currentLevel == 5 && 'border-2 border-purple-500'"
    class=" rounded-md bg-white text-left font-semibold px-6 py-3 w-full text-lg shadow-md ">
    Help,
    <small class="text-xs block  text-purple-500"> are you okay?</small>
  </button>
  <button @click="[showTime = 500, moveTime = 15, currentLevel = 6]" :class="currentLevel == 6 && 'border-2 border-black'"
    class=" rounded-md bg-white text-left font-semibold px-6 py-3 w-full text-lg shadow-md  ">
    Nightmare
    <small class="text-xs block  text-black">why are you choose this?</small>
  </button>


</template>

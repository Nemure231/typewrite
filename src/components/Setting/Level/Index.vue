<script setup>
import { inject, ref } from "vue";
import ButtonLevelView from "./ButtonLevel.vue";
const showTime = inject('showTimeProv')
const moveTime = inject('moveTimeProv')
// const currentLevel = ref(3)

// const level = ref([
//   {
//     id: 1,
//     name: 'Easygoing',
//     desc: 'take your time.',
//     // classText: currentLevel.value == 1 && 'border-2 border-pink-500',
//     level: [showTime.value = 5000, moveTime.value = 90, currentLevel.value = 1]
//   },
//   {
//     id: 2,
//     name: 'Playful',
//     desc: 'enjoy it.',
//     // classText: currentLevel.value == 2 && 'border-2 border-green-500',
//     level: [showTime.value = 4000, moveTime.value = 50, currentLevel.value = 2]
//   },
//   {
//     id: 3,
//     name: 'Normal',
//     desc: 'this is good.',
//     // classText: currentLevel.value == 3 && 'border-2 border-blue-500',
//     level: [showTime.value = 3000, moveTime.value = 50, currentLevel.value = 3]
//   },
//   {
//     id: 4,
//     name: 'Danger',
//     desc: 'sometimes challenge is okay',
//     // classText: currentLevel.value == 4 && 'border-2 border-red-500',
//     level: [showTime.value = 2000, moveTime.value = 20, currentLevel.value = 4]

//   },
//   {
//     id: 5,
//     name: 'Help',
//     desc: 'Why are you choose this?',
//     // classText: currentLevel.value == 5 && 'border-2 border-purple-500',
//     level: [showTime.value = 1000, moveTime.value = 15, currentLevel.value = 5]
//   },
//   {
//     id: 6,
//     name: 'Nightmare',
//     desc: 'are you really human?',
//     // classText: currentLevel.value == 6 && 'border-2 border-black',
//     level: [showTime.value = 500, moveTime.value = 15, currentLevel.value = 6]
//   }
// ])
</script>


<template>
    <div class="flex-1">
        <div class="flex-1 mb-2">
            <span class="text-2xl font-bold">Custom</span>
        </div>
        <div class="flex-1 w-full">
            <label class="inline font-semibold" for="">Show / </label>
            <small class="inline text-sm font-medium">{{ showTime }} milliseconds</small>
            <input class="w-full custom-range" v-model="showTime" type="range" min="300" step="10" max="5000" name=""
                id="">
        </div>
        <div class="flex-1 w-full">
            <label class="inline font-semibold" for="">Move / </label>
            <small class="inline text-sm font-medium"> {{ moveTime }} milliseconds</small>
            <input class="w-full custom-range" v-model="moveTime" type="range" min="1" max="100" name="" id="">
        </div>

        <div class="flex-1 w-full mt-2">
            <span class="text-2xl font-bold">Select</span>
            <div class="mt-3 grid grid-cols-2 gap-3 justify-start">
                <ButtonLevelView />
            </div>
        </div>
    </div>

</template>
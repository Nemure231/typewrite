<script setup>
import { inject, computed } from 'vue'

const score = inject('scoreProv')

const scoreToggle = inject('scoreToggleProv')
const isScore = computed(() => {
    return score.value.toString().length == 1 ? '-right-1' :
        score.value.toString().length == 2 ? '-right-3' :
            score.value.toString().length == 3 ? '-right-[18px]' :
                score.value.toString().length == 4 ? '-right-[26px]' :
                    '-right-[33px]'
})


const isScoreVisible = computed(() => scoreToggle.value ? 'hidden' : 'block')

</script>

<template>
    <div class="absolute -right-10 -top-20 z-40" :class="isScoreVisible">
        <div class="relative w-[66px] h-48 -rotate-45 shadow-md dark:bg-gray-800">


            <svg class="absolute right-[35px] top-16 rotate-45 w-8 h-8 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                <path fill="currentColor"
                    d="M196.8 57.1C185.1 37 169.2 26 152 26h-48c-17.2 0-33.1 11-44.8 31.1S42 101.3 42 128s6.1 51.9 17.2 70.9S86.8 230 104 230h48c17.2 0 33.1-11 44.8-31.1S214 154.7 214 128s-6.1-51.9-17.2-70.9Zm5.1 64.9h-36c-.7-18.8-4.4-36.7-10.8-52H190c7.1 14.7 11.2 32.8 11.9 52ZM152 38c11.3 0 22.2 7.1 31.1 20h-33.8l-.5-.9A75.1 75.1 0 0 0 133.5 38ZM69.6 192.9C59.5 175.6 54 152.6 54 128s5.5-47.6 15.6-64.9S91.3 38 104 38s25 8.9 34.4 25.1S154 103.4 154 128s-5.5 47.6-15.6 64.9S116.7 218 104 218s-25-8.9-34.4-25.1ZM152 218h-18.5a75.1 75.1 0 0 0 15.3-19.1l.5-.9h33.8c-8.9 12.9-19.8 20-31.1 20Zm38-32h-34.9c6.4-15.3 10.1-33.2 10.8-52h36c-.7 19.2-4.8 37.3-11.9 52Z">
                </path>
            </svg>
        </div>
    </div>
    <div class="absolute right-4 -top-32 z-30" :class="isScoreVisible">
        <div class="relative w-10 h-80 -rotate-45 dark:bg-gray-800 bg-gray-100  shadow-sm dark:shadow-gray-300">
            <span :class="isScore"
                class="absolute top-[146px] rotate-90 text-2xl font-bold py-0.5 dark:text-gray-300 rounded-2xl w-auto px-6">
                {{ score }}
            </span>
        </div>
    </div>

</template>
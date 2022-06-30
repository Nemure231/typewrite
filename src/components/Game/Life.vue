<script setup>
import { inject, computed } from 'vue'

const life = inject('lifeProv')
const lifeToggle = inject('lifeToggleProv')


const isLifeVisible = computed(() => lifeToggle.value ? 'hidden' : 'block')
</script>

<template>
    <div class="absolute -left-10 -top-20 z-40" :class="isLifeVisible">
        <div class="relative w-[66px] h-48 rotate-45 shadow-md dark:bg-gray-800">

            <svg class="absolute -right-0 top-16 -rotate-45 w-8 h-8 text-red-500" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                    <path stroke-miterlimit="2" d="m11 32l7-9l6 9l6-9l5 8h9"></path>
                    <path
                        d="M44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326c1.194-.397 2.562-1.016 4.01-1.826">
                    </path>
                </g>
            </svg>
        </div>
    </div>
    <div class="absolute left-4 -top-32 z-30" :class="isLifeVisible">
        <div class="relative w-10 h-80 rotate-45 dark:bg-gray-800 bg-gray-100 shadow-sm dark:shadow-gray-300">
            <span :class="life.toString().length == 1 ? ' -right-4':' -right-[22px]'" class="absolute top-[146px] -rotate-90 text-2xl font-bold py-0.5 dark:text-gray-300 rounded-2xl w-auto px-6">
                {{life}}
            </span>
        </div>
    </div>
</template>
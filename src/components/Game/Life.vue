<script setup>
import { inject } from 'vue'

const life = inject('lifeProv')

</script>

<template>
    <div class="absolute left-3 top-3">
        <div class="flex justify-center items-center -space-x-5">

            <div class="z-10 h-16 w-16 bg-white inline-flex items-center justify-center rounded-full">
                <svg class="w-12 h-12 text-red-500" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="4">
                        <path stroke-miterlimit="2" d="m11 32l7-9l6 9l6-9l5 8h9"></path>
                        <path
                            d="M44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326c1.194-.397 2.562-1.016 4.01-1.826">
                        </path>
                    </g>
                </svg>
            </div>
            <span class="text-3xl font-bold bg-white py-0.5 rounded-2xl w-auto px-6">
                {{ life }}

            </span>
        </div>
    </div>

</template>
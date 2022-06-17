<script setup>
import { inject } from "vue";

const typeText = inject('typeTextProv')
</script>


<template>
    <div class="flex-1">
        <span class="text-2xl font-bold">Type</span>
        <div class="flex gap-3 mt-3">
            <button :class="typeText == 1 && 'bg-sky-100'" @click="typeText = 1"
                class="flex-1 py-0.25 px-3 rounded-md border-2 border-sky-500">
                <div class="inline-flex justify-center items-center gap-2">
                    <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
                        <path fill="none" stroke="#0ea5e9" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="4" d="M5.799 24h36m-24 12l-12-12l12-12"></path>
                    </svg>
                    <span class="text-lg">
                        Linear
                    </span>
                    <input class="hidden" type="radio" v-model="typeText" value="1" />
                </div>
            </button>
            <button :class="typeText == 0 && 'bg-sky-100'" @click="typeText = 0"
                class="flex-1 py-0.25 px-3 rounded-md border-2 border-sky-500">
                <div class="inline-flex justify-center items-center gap-2">

                    <span class="text-lg">
                        Random
                    </span>
                    <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path fill="#0ea5e9" fill-rule="evenodd"
                            d="M4 17a1 1 0 0 1 0-2h2l3-3l-3-3H4a1.001 1.001 0 0 1 0-2h3l4 4l4-4h2V5l4 3.001L17 11V9h-1l-3 3l3 3h1v-2l4 3l-4 3v-2h-2l-4-4l-4 4H4Z">
                        </path>
                    </svg>
                    <input class="hidden" type="radio" v-model="typeText" value="0" />
                </div>
            </button>
        </div>
    </div>
</template>
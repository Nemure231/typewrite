<script setup>
import { inject } from "vue";

const dirText = inject('dirTextProv')
</script>


<template>
    <div class="flex-1">
        <span class="text-2xl font-bold">Direction</span>
        <div class="flex gap-3 mt-3">
            <button :class="dirText == 0 && 'bg-sky-100'" @click="dirText = 0"
                class="flex-1 py-0.25 px-3 rounded-md border-2 border-sky-500">
                <div class="inline-flex justify-center items-center">
                    <svg class="w-10 h-10 text-sky-500" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
                        <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"
                            d="M30 36L18 24l12-12v24Z"></path>
                    </svg>
                    <span class="text-lg">
                        To Left
                    </span>
                    <input class="hidden" type="radio" v-model="dirText" value="0" />
                </div>
            </button>
            <button :class="dirText == 1 && 'bg-sky-100'" @click="dirText = 1"
                class="flex-1 py-0.25 px-3 rounded-md border-2 border-sky-500">
                <div class="inline-flex justify-center items-center">
                    <span class="text-lg">
                        To Right
                    </span>
                    <svg class="w-10 h-10 text-sky-500" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
                        <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"
                            d="m20 12l12 12l-12 12V12Z"></path>
                    </svg>
                    <input class="hidden" type="radio" v-model="dirText" value="1" />
                </div>
            </button>
        </div>
    </div>
</template>
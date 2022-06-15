<script setup>
import { inject, ref } from "vue";
const dirText = inject('dirTextProv')
const selectLangProv = inject('selectLangProv')

const lang = ref([
    {
        id: 0,
        name: 'Indonesia'
    },
    {
        id: 1,
        name: 'English'
    },
    {
        id: 2,
        name: 'External Text'
    }
])
</script>


<template>
    <div class="flex-1">
        <div class="flex flex-col gap-6">
            <div class="flex-1">
                <span class="text-2xl font-bold">Direction</span>
                <div class="flex gap-3 mt-6">
                    <button :class="dirText == 1 && 'bg-sky-100'" @click="dirText = 1"
                        class="flex-1 py-0.25 px-3 rounded-md border-2 border-sky-500">
                        <div class="inline-flex justify-center items-center">
                            <svg class="w-10 h-10 text-sky-500" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
                                <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"
                                    d="M30 36L18 24l12-12v24Z"></path>
                            </svg>
                            <span class="text-lg">
                                Left
                            </span>
                            <input class="hidden" type="radio" v-model="dirText" value="0" />
                        </div>
                    </button>
                    <button :class="dirText == 0 && 'bg-sky-100'" @click="dirText = 0"
                        class="flex-1 py-0.25 px-3 rounded-md border-2 border-sky-500">
                        <div class="inline-flex justify-center items-center">
                            <span class="text-lg">
                                Right
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
            <div class="flex-1">
                <span class="text-2xl font-bold">Language</span>
                <div class="relative mt-6">
                    <select v-model="selectLangProv"
                        class="border cursor-pointer border-sky-500 text-lg appearance-none relative default:bg-sky-30 text-sky-500 custom-bg-darker rounded-md block py-3 px-2 focus:outline-none focus:ring focus:ring-sky-300/20 w-full">
                        <option class="cursor-pointer" v-for="lg in lang" :key="lg.id" :value="lg.id">
                            {{ lg.name }}
                        </option>
                    </select>
                    <div class="absolute text-sky-500 right-2 top-2">
                        <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
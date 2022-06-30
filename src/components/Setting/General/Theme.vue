<script setup>
import { useToggle } from '@vueuse/core'
import { inject } from 'vue';

const isDark = inject('isDarkProv')
const tonggleButton = useToggle(isDark.value)

</script>


<template>
    <div class="flex-1">
        <span class="text-2xl font-bold">Mode</span>
        <div class="flex gap-3 mt-3">
            <button @click="tonggleButton()" class="flex-1 py-2 px-3 rounded-md border-2 border-sky-500">
                <div class="inline-flex justify-center items-center">
                     <span class="text-lg mr-3">
                        {{isDark.value ? 'Dark' : 'Light'}}
                    </span>
                    <svg v-if="!isDark.value" class="w-6 h-6 text-sky-500" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
                        <g fill="none">
                            <path fill="#0ea5e9" fill-rule="evenodd" d="M24 3v3.15V3Z" clip-rule="evenodd"></path>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                                d="M24 3v3.15"></path>
                            <path fill="currentColor" fill-rule="evenodd" d="m38.85 9.15l-2.228 2.228l2.227-2.227Z"
                                clip-rule="evenodd"></path>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                                d="m38.85 9.15l-2.228 2.228"></path>
                            <path fill="currentColor" fill-rule="evenodd" d="M45 24h-3.15H45Z" clip-rule="evenodd">
                            </path>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                                d="M45 24h-3.15"></path>
                            <path fill="currentColor" fill-rule="evenodd" d="m38.85 38.85l-2.228-2.228l2.227 2.227Z"
                                clip-rule="evenodd"></path>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                                d="m38.85 38.85l-2.228-2.228"></path>
                            <path fill="currentColor" fill-rule="evenodd" d="M24 45v-3.15V45Z" clip-rule="evenodd">
                            </path>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                                d="M24 45v-3.15"></path>
                            <path fill="currentColor" fill-rule="evenodd" d="m9.15 38.85l2.228-2.228l-2.227 2.227Z"
                                clip-rule="evenodd"></path>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                                d="m9.15 38.85l2.228-2.228"></path>
                            <path fill="currentColor" fill-rule="evenodd" d="M3 24h3.15H3Z" clip-rule="evenodd"></path>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                                d="M3 24h3.15"></path>
                            <path fill="currentColor" fill-rule="evenodd" d="m9.15 9.15l2.228 2.228l-2.227-2.227Z"
                                clip-rule="evenodd"></path>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                                d="m9.15 9.15l2.228 2.228"></path>
                            <path stroke="currentColor" stroke-linejoin="round" stroke-width="4"
                                d="M24 36c6.627 0 12-5.373 12-12s-5.373-12-12-12s-12 5.373-12 12s5.373 12 12 12Z">
                            </path>
                        </g>
                    </svg>
                    <svg v-if="isDark.value" class="w-6 h-6 text-sky-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img"
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
                        <path fill="none" stroke="#0ea5e9" stroke-linejoin="round" stroke-width="4"
                            d="M28.053 4.41c-5.47 1.427-9.508 6.4-9.508 12.317c0 7.03 5.699 12.727 12.728 12.727c5.916 0 10.89-4.037 12.316-9.507A20.05 20.05 0 0 1 44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4c1.389 0 2.744.141 4.053.41Z">
                        </path>
                    </svg>
                    <input class="hidden" type="radio" v-model="dirText" value="0" />
                </div>
            </button>
        </div>
    </div>
</template>
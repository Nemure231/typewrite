<script setup>
import { inject } from "vue";
import ButtonLevelView from "./ButtonLevel.vue";
const showTime = inject('showTimeProv')
const moveTime = inject('moveTimeProv')
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
            <div class="mt-3 grid grid-cols-2 gap-3 justify-start dark:bg-gray-800">
                <ButtonLevelView />
            </div>
        </div>
    </div>

</template>
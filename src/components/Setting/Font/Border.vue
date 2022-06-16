<script setup>
import { inject } from "vue";

const borderColor = inject('borderColorProv')
const borderWidth = inject('borderWidthProv')
const borderRadius = inject('borderRadiusProv')


</script>


<template>
    <div class="flex-1 basis-full">
        <span class="text-2xl font-bold">Border</span>
        <div class="grid grid-cols-3 gap-4">
            <div>
                <div class="flex flex-col">
                    <label class="text-sm font-semibold">Color</label>
                    <input class="w-full h-10" v-model="borderColor" type="color">
                </div>
            </div>
            <div>
                <div class="flex flex-col">
                    <label class="text-sm font-semibold mb-2.5">Width</label>
                    <input v-model="borderWidth" class="mt-3 custom-range" min="1" max="20" step="1" type="range">
                </div>
            </div>
            <div>
                <div class="flex flex-col">
                    <label class="text-sm font-semibold mb-2.5">Radius</label>
                    <input v-model="borderRadius" min="1" max="900" step="1" class="mt-3 custom-range" type="range">
                </div>
            </div>
        </div>
    </div>
</template>
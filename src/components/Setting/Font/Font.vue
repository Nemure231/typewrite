<script setup>
import { inject } from "vue";

const fontSize = inject('fontSizeProv')
const color = inject('fontColorProv')
const fontWeight = inject('fontWeightProv')

</script>


<template>
    <div class="flex-1 basis-full">
        <span class="text-2xl font-bold">Font</span>
        <div class="grid grid-cols-3 gap-4 mt-4">
            <div class="">
                <div class="flex flex-col">
                    <label class="text-sm font-semibold">Color</label>
                    <input v-model="color" class="w-full h-10" type="color" name="" id="">
                </div>
            </div>
            <div>
                <div class="flex flex-col">
                    <label class="text-sm font-semibold mb-2.5">Size</label>
                    <input v-model="fontSize" min="14" max="50" step="1" class="custom-range" type="range" name=""
                        id="">

                </div>
            </div>
            <div>
                <div class="flex flex-col">
                    <label class="text-sm font-semibold mb-2.5">Weight</label>
                    <input v-model="fontWeight" class="mt-3 custom-range" min="100" max="900" step="100" type="range"
                        name="" id="">
                </div>
            </div>
        </div>
    </div>


</template>
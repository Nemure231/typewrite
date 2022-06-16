<script setup>
import { inject } from "vue";

const paddingX = inject('paddingXProv')
const paddingY = inject('paddingYProv')


</script>


<template>
    <div class="flex-1 basis-1/3">
        <span class="text-2xl font-bold">Padding</span>
        <div class="grid grid-cols-2 gap-4">
            <div class="">
                <div class="flex flex-col">
                    <label class="text-sm font-semibold mb-2.5">X</label>
                    <input v-model="paddingX" class="mt-3 custom-range" min="1" max="20" step="1" type="range" name=""
                        id="">
                </div>
            </div>
            <div class="">
                <div class="flex flex-col">
                    <label class="text-sm font-semibold mb-2.5">Y</label>
                    <input v-model="paddingY" class="mt-3 custom-range" min="1" max="20" step="1" type="range" name=""
                        id="">
                </div>
            </div>

        </div>
    </div>
</template>
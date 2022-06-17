<script setup>
import { inject } from "vue";

const bgColor = inject('bgColorProv')


</script>


<template>
    <div class="flex-1">
        <span class="text-2xl font-bold">Background</span>
        <div class="grid grid-cols-3 gap-4 mt-2">

            <div class="col-span-3">
                <div class="flex flex-col">
                    <label class="text-sm font-semibold">Color</label>
                    <input v-model="bgColor" class="w-full h-10" type="color" name="" id="">
                </div>
            </div>
        </div>
    </div>
</template>
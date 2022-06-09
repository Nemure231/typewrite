<script setup>
import { inject, computed } from "vue";

const fontSize = inject('fontSizeProv')
const color = inject('fontColorProv')
const fontWeight = inject('fontWeightProv')
const bgColor = inject('bgColorProv')
const paddingX = inject('paddingXProv')
const paddingY = inject('paddingYProv')
const borderColor = inject('borderColorProv')
const borderWidth = inject('borderWidthProv')
const borderRadius = inject('borderRadiusProv')

const changeStyle = computed(() => {
    const text = {
        color: color.value,
        backgroundColor: bgColor.value,
        fontSize: `${fontSize.value}px`,
        fontWeight: fontWeight.value,
        paddingLeft: `${paddingX.value}px`,
        paddingRight: `${paddingX.value}px`,
        paddingTop: `${paddingY.value}px`,
        paddingBottom: `${paddingY.value}px`,
        borderColor: borderColor.value,
        borderWidth: `${borderWidth.value}px`,
        borderRadius: `${borderRadius.value}px`
    }
    return text

})


</script>


<template>
    <div class="flex-1 space-y-3">
        <div class="flex flex-row flex-wrap gap-4">
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
                            <input v-model="fontSize" min="14" max="50" step="1" class="custom-range" type="range"
                                name="" id="">

                        </div>
                    </div>
                    <div>
                        <div class="flex flex-col">
                            <label class="text-sm font-semibold mb-2.5">Weight</label>
                            <input v-model="fontWeight" class="mt-3 custom-range" min="100" max="900" step="100"
                                type="range" name="" id="">
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex-1">
                <span class="text-2xl font-bold">Background</span>
                <div class="grid grid-cols-3 gap-4">

                    <div class="col-span-3">
                        <div class="flex flex-col">
                            <label class="text-sm font-semibold">Color</label>
                            <input v-model="bgColor" class="w-full h-10" type="color" name="" id="">
                        </div>
                    </div>
                </div>
            </div>

            
            <div class="flex-1 basis-1/3">
                <span class="text-2xl font-bold">Padding</span>
                <div class="grid grid-cols-2 gap-4">
                    <div class="">
                        <div class="flex flex-col">
                            <label class="text-sm font-semibold mb-2.5">X</label>
                            <input v-model="paddingX" class="mt-3 custom-range" min="1" max="20" step="1" type="range"
                                name="" id="">
                        </div>
                    </div>
                    <div class="">
                        <div class="flex flex-col">
                            <label class="text-sm font-semibold mb-2.5">Y</label>
                            <input v-model="paddingY" class="mt-3 custom-range" min="1" max="20" step="1" type="range"
                                name="" id="">
                        </div>
                    </div>

                </div>
            </div>



            <div class="flex-1 basis-full">
                <span class="text-2xl font-bold">Border</span>
                <div class="grid grid-cols-3 gap-4">
                    <div>
                        <div class="flex flex-col">
                            <label class="text-sm font-semibold">Color</label>
                            <input class="w-full h-10" v-model="borderColor" type="color" name="" id="">
                        </div>
                    </div>
                    <div>
                        <div class="flex flex-col">
                            <label class="text-sm font-semibold mb-2.5">Width</label>
                            <input v-model="borderWidth" class="mt-3 custom-range" min="1" max="20" step="1"
                                type="range" name="" id="">
                        </div>
                    </div>
                    <div>
                        <div class="flex flex-col">
                            <label class="text-sm font-semibold mb-2.5">Radius</label>
                            <input v-model="borderRadius" min="1" max="900" class="mt-3 custom-range" type="range"
                                name="" id="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center pb-10">
            <span class="text-2xl font-bold ">Preview</span>
            <div class="w-full flex justify-center">
                <p class="mt-6" :style="changeStyle">
                    Example
                </p>
            </div>
        </div>
    </div>
</template>
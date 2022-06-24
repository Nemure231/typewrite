<script setup>
import { inject, ref } from "vue";

const highlightColor = inject('highlightColorProv')
const highlightStyle = inject('highlightStyleProv')
const highlightThick = inject('highlightThickProv')
const millisecond = inject('milliProv');

const optionHi = ref([
    {
        id: 1,
        name: 'solid'

    },
    {
        id: 2,
        name: 'double'

    },
    {
        id: 3,
        name: 'dotted'

    },
    {
        id: 4,
        name: 'dotted'

    },
    {
        id: 5,
        name: 'dashed'

    },
    {
        id: 6,
        name: 'wavy'

    }
])

</script>

<template>
    <div class="flex-1 basis-full"  v-if="millisecond <= 0">
        <span class="text-2xl font-bold">Highlight</span>
        <div class="grid grid-cols-3 gap-4 mt-2">
            <div class="">
                <div class="flex flex-col">
                    <label class="text-sm font-semibold">Color</label>
                    <input v-model="highlightColor" class="w-full h-10" type="color">
                </div>
            </div>
            <div>
                <div class="flex flex-col">
                    <label class="text-sm font-semibold mb-2.5">Style</label>
                    <select class="font-normal focus:outline-none border-2 px-2 py-1 -mt-2 rounded-xl border-sky-500" v-model="highlightStyle">
                        <option v-for="oh in optionHi" :key="oh.id" :value="oh.name">
                            {{oh.name}}
                        </option>
                    </select>

                </div>
            </div>
            <div>
                <div class="flex flex-col">
                    <label class="text-sm font-semibold mb-2.5">Thickness</label>
                    <input v-model="highlightThick" class="mt-3 custom-range" min="1" max="8" step="1" type="range">
                </div>
            </div>
        </div>
    </div>


</template>
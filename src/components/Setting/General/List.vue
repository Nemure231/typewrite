<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    listVisibProps: Array
})

</script>

<template>

    <div v-for="lv in listVisibProps" :key="lv.id" class="flex-1">
        <div>
            <span class="block mb-2">
                {{ lv.name }}
            </span>
            <div class="flex items-center gap-2">
                <label :for="`${lv.name}-toggle`" class="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" v-model="lv.model" :id="`${lv.name}-toggle`" class="sr-only peer">
                    <div
                        class="w-11 h-6 bg-sky-200 dark:bg-transparent dark:border-4 dark:border-sky-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-500">
                    </div>
                </label>
                <div>
                    <span class="text-sm font-medium">Hidden?</span>
                </div>

            </div>
        </div>
    </div>

</template>
<script setup>
import { inject} from 'vue'
import ImageBg from './Image/Index.vue'
import YoutubeBg from './Youtube/Index.vue'

const bgOrYtProv = inject('bgOrYtProv')

</script>

<template>
    <div class="flex-1">
        <div class="flex gap-3 mt-6">
            <button @click="bgOrYtProv = true"
                :class="bgOrYtProv ? 'bg-sky-500 text-white' : 'border-2 bg-white text-sky-500 border-sky-500'"
                class="text-lg py-2 px-6 flex-1 text-1 font-semibold rounded-md">
                Image
            </button>
            <button @click="bgOrYtProv = false"
                :class="!bgOrYtProv ? 'bg-sky-500 text-white' : 'border-2 bg-white text-sky-500 border-sky-500'"
                class="text-lg py-2 px-6 flex-1 text-1 font-semibold rounded-md">
                Youtube
            </button>
        </div>

        <div class="flex flex-col">
            <ImageBg v-if="bgOrYtProv">

            </ImageBg>

            <YoutubeBg v-else>

            </YoutubeBg>
        </div>
    </div>
</template>

<style scoped>
.ghost {
    opacity: 0.5;
    background: #c8ebfb;
}

.not-draggable {
    cursor: no-drop;
}
</style>
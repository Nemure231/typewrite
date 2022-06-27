<script setup>
import { inject, computed, defineAsyncComponent, watchEffect } from 'vue'
import { useOnline } from '@vueuse/core'
import ImageBg from './Image/Index.vue'
import YoutubeBg from './Youtube/Index.vue'

const swipr = inject('swiperProv')
const bgOrYtProv = inject('bgOrYtProv')
const online = useOnline()
const bg = inject('bgProv')

const isBgOrYtTrue = computed(() => bgOrYtProv.value ? 'bg-sky-500 text-white' : 'border-2 bg-white text-sky-500 border-sky-500')
const isBgOrYtFalse = computed(() => !bgOrYtProv.value ? 'bg-sky-500 text-white' : 'border-2 bg-white text-sky-500 border-sky-500')

watchEffect(() => {
    if (bg.value > 0) {
        if (bgOrYtProv.value) {
            // swipr.value.autoplay.start()
        } else {
            swipr.value.autoplay.stop()
        }
    }
})

const isOffline = computed(() => {
    if (!online.value) {
        return defineAsyncComponent(() => import('../Offline/Index.vue'))
    }
})

</script>

<template>
    <div class="flex-1">
        <div class="flex gap-3 mt-6">
            <button @click="bgOrYtProv = true" :class="isBgOrYtTrue"
                class="text-lg py-2 px-6 flex-1 text-1 font-semibold rounded-md">
                Image
            </button>
            <button @click="bgOrYtProv = false" :class="isBgOrYtFalse"
                class="text-lg py-2 px-6 flex-1 text-1 font-semibold rounded-md">
                Youtube
            </button>
        </div>

        <div class="flex flex-col">
            <template v-if="bgOrYtProv">
                <ImageBg />
            </template>
            <template v-else>
                <YoutubeBg v-if="online" />
                <component :is="isOffline"></component>
            </template>

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
<script setup>
import { defineEmits, ref, inject, computed, defineAsyncComponent } from 'vue'
import IndexMusicView from './Music/Index.vue';
import Loading from './Loading/Index.vue'
import Error from './Error/Index.vue'

const milli = inject('milliProv')
const second = inject('secondProv')
const modalGameOver = inject('modalGameOverProv')
const currentTab = inject('currentTabProv')
const tabs = ref(['General', 'Level', 'Text', 'Font', 'Background', 'Music', 'Type', 'Score', 'Support', 'About'])

const emit = defineEmits(["childCloseModalSetting", 'childStartGame']);

let childCloseModalSetting = () => {
    emit("childCloseModalSetting")

    if (milli.value > 0 || second.value > 0) {
        if (!modalGameOver.value) {
            childStartGame()
        }
    }
}
let childStartGame = () => {
    emit("childStartGame")
}

const currentComponent = computed(() => {

    var asyncComp

    if (currentTab.value == 'Level') {
        asyncComp = defineAsyncComponent({
            loader: () => import(`./Level/Index.vue`),
            loadingComponent: Loading,
            delay: 200,
            errorComponent: Error,
            timeout: 1000
        })
    }

    if (currentTab.value == 'Text') {
        asyncComp = defineAsyncComponent({
            loader: () => import(`./Text/Index.vue`),
            loadingComponent: Loading,
            delay: 200,
            errorComponent: Error,
            timeout: 1000
        })
    }

    if (currentTab.value == 'Font') {
        asyncComp = defineAsyncComponent({
            loader: () => import(`./Font/Index.vue`),
            loadingComponent: Loading,
            delay: 200,
            errorComponent: Error,
            timeout: 1000
        })
    }

    if (currentTab.value == 'Background') {
        asyncComp = defineAsyncComponent({
            loader: () => import(`./Background/Index.vue`),
            loadingComponent: Loading,
            delay: 200,
            errorComponent: Error,
            timeout: 1000
        })
    }

    if (currentTab.value == 'Music') {
        asyncComp = defineAsyncComponent({
            loader: () => import('./Music/Empty.vue'),
            loadingComponent: Loading,
            delay: 200,
            errorComponent: Error,
            timeout: 1000
        })
    }

    if (currentTab.value == 'Type') {
        asyncComp = defineAsyncComponent({
            loader: () => import(`./Type/Index.vue`),
            loadingComponent: Loading,
            delay: 200,
            errorComponent: Error,
            timeout: 1000
        })
    }

      if (currentTab.value == 'Score') {
        asyncComp = defineAsyncComponent({
            loader: () => import(`./Score/Index.vue`),
            loadingComponent: Loading,
            delay: 200,
            errorComponent: Error,
            timeout: 1000
        })
    }

    if (currentTab.value == 'Support') {
        asyncComp = defineAsyncComponent({
            loader: () => import(`./Support/Index.vue`),
            loadingComponent: Loading,
            delay: 200,
            errorComponent: Error,
            timeout: 1000
        })
    }

    if (currentTab.value == 'General') {
        asyncComp = defineAsyncComponent({
            loader: () => import(`./General/Index.vue`),
            loadingComponent: Loading,
            delay: 200,
            errorComponent: Error,
            timeout: 1000
        })
    }

    if (currentTab.value == 'About') {
        asyncComp = defineAsyncComponent({
            loader: () => import(`./About/Index.vue`),
            loadingComponent: Loading,
            delay: 200,
            errorComponent: Error,
            timeout: 1000
        })
    }

    return asyncComp
})


</script>

<template>
    <div class="fixed z-10 inset-0 font-bold" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-center justify-center min-h-screen text-center">
            <span class="hidden sm:inline-block rounded-xl" aria-hidden="true">&#8203;</span>
            <div
                class="relative inline-block  align-bottom rounded-xl text-left  shadow-xl transform transition-all sm:align-middle">
                <div class="backdrop-blur-sm bg-white/75 dark:bg-gray-800/75 relative rounded-xl">
                    <div class="absolute right-6 top-3">
                        <div @click="childCloseModalSetting()" class="cursor-pointer hover:bg-red-100">
                            <svg class=" w-8 h-8" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path fill="#bb3535"
                                    d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div class="flex flex-col pb-4 w-[50rem] overflow-scroll overflow-x-hidden h-[32rem]">
                        <div class="flex-1">
                            <div class="flex flex-row">
                                <div class="flex-none  basis-[20%] rounded-xl">
                                    <div class="flex flex-col items-center justify-center flex-wrap py-2 px-2">
                                        <button v-for="m in tabs" :key="m" @click="currentTab = m"
                                            class="w-full text-left p-2 rounded-xl dark:text-gray-300"
                                            :class="currentTab == m && 'bg-sky-200 dark:bg-gray-600'">
                                            <span class="text-xl w-full font-semibold relative">
                                                <span
                                                    :class="m == 'Support' && `animate-ping absolute inline-flex h-2.5 w-2 top-0 -right-3 rounded-full bg-sky-400 opacity-75`">
                                                </span>
                                                {{ m }}
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex-1 basis-[80%] px-12 py-6">
                                    <div class="flex flex-col dark:text-gray-300">
                                        <KeepAlive>
                                            <component :is="currentComponent">
                                            </component>
                                        </KeepAlive>
                                        <IndexMusicView v-show="currentTab == 'Music'" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

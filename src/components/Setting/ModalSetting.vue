<script setup>
import { OnClickOutside } from '@vueuse/components'

import { defineComponent, defineEmits, ref, inject } from 'vue'
import Level from './Level/Level.vue'
import Font from './Font/Font.vue';
import IndexBg from './Bg/Index.vue';

defineComponent(
    {
        OnClickOutside
    }
)
const listProv = inject('listProv')

const emit = defineEmits(["childCloseModalSetting", 'childStartGame']);

let childCloseModalSetting = () => {
    emit("childCloseModalSetting")

    if (listProv.value.length > 0) {
        childStartGame()
    }

}
let childStartGame = () => {
    emit("childStartGame")
}

const currentMenu = ref(1)
const menu = ref([
    {
        id: 1,
        name: 'Level'
    },
    {
        id: 2,
        name: 'Font'
    },
    {
        id: 3,
        name: 'Background'
    }
])

</script>

<template>
    <div class="fixed z-10 inset-0 font-bold" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-center justify-center min-h-screen text-center sm:block sm:p-0">
            <span class="hidden sm:inline-block rounded-xl sm:align-middle sm:h-screen"
                aria-hidden="true">&#8203;</span>
            <div
                class="relative inline-block  align-bottom rounded-xl text-left  shadow-xl transform transition-all sm:align-middle">
                <OnClickOutside @trigger="childCloseModalSetting()" class="bg-transparent">
                    <div class="backdrop-blur-sm bg-white/75 relative rounded-xl">
                        <div class="absolute right-6">
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
                        <div class="flex flex-col pb-4 w-[50rem] overflow-scroll overflow-x-hidden h-[30rem] ">
                            <div class="flex-1">
                                <div class="flex flex-row">
                                    <div class="flex-none  basis-[20%] rounded-xl">
                                        <div class="flex flex-col items-center justify-center flex-wrap">
                                            <button v-for="m in menu" :key="m.id" @click="currentMenu = m.id"
                                                class="w-full text-left border-sky-500 border-b-2  p-3">
                                                <span class="text-xl w-full font-semibold">
                                                    {{ m.name }}
                                                </span>
                                            </button>

                                        </div>
                                    </div>
                                    <div class="flex-1 basis-[80%] h-screen px-12 py-6">
                                        <div class="flex">
                                            <Level v-if="currentMenu == 1" />
                                            <Font v-if="currentMenu == 2" />
                                            <IndexBg v-if="currentMenu == 3" />
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </OnClickOutside>
            </div>
        </div>
    </div>



</template>

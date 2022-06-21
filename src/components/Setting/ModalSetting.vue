<script setup>
// import { useOnline } from '@vueuse/core'
import { OnClickOutside } from '@vueuse/components'
import { defineEmits, ref, inject, defineComponent } from 'vue'
import Level from './Level/Level.vue'
import IndexFont from './Font/Index.vue';
import IndexBg from './Bg/Index.vue';
import IndexText from './Text/Index.vue';
import IndexMusic from './Music/Index.vue';
import IndexAbout from './About/Index.vue';
import IndexType from './Type/Index.vue';
// import IndexOffline from './Offline/Index.vue';

defineComponent(
    { OnClickOutside }
)

const milli = inject('milliProv');
const modalGameOver = inject('modalGameOverProv')

// const online = useOnline()

const emit = defineEmits(["childCloseModalSetting", 'childStartGame']);

let childCloseModalSetting = () => {
    emit("childCloseModalSetting")

    if (milli.value > 0) {
        if(!modalGameOver.value){
            childStartGame()
        }
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
        name: 'Text'
    },
    {
        id: 3,
        name: 'Font'
    },
    {
        id: 4,
        name: 'Background'
    },
    {
        id: 5,
        name: 'Music'
    },
    {
        id: 6,
        name: 'Type'
    },
    // {
    //     id: 7,
    //     name: 'Support!'
    // },
    {
        id: 7,
        name: 'About'
    }
])

</script>

<template>
    <div class="fixed z-10 inset-0 font-bold" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-center justify-center min-h-screen text-center">
            <span class="hidden sm:inline-block rounded-xl" aria-hidden="true">&#8203;</span>
            <div
                class="relative inline-block  align-bottom rounded-xl text-left  shadow-xl transform transition-all sm:align-middle">
                <OnClickOutside @trigger="childCloseModalSetting()" class="bg-transparent">
                <div class="backdrop-blur-sm bg-white/75 relative rounded-xl">
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
                                        <button v-for="m in menu" :key="m.id" @click="currentMenu = m.id"
                                            class="w-full text-left p-2 rounded-xl"
                                            :class="currentMenu == m.id && 'bg-sky-200'">
                                            <span class="text-xl w-full font-semibold relative">
                                                <span 
                                                    ></span>
                                                    <!-- :class="m.id ==  && `animate-ping absolute inline-flex h-3 w-3 top-0 -right-4 rounded-full bg-sky-400 opacity-75`" -->
                                                {{ m.name }}
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex-1 basis-[80%] px-12 py-6">
                                    <div class="flex">
                                        <Level v-show="currentMenu == 1" />
                                        <IndexText v-show="currentMenu == 2" />
                                        <IndexFont v-show="currentMenu == 3" />
                                        <IndexBg v-show="currentMenu == 4" />
                                        <!-- <template v-show="currentMenu == 5"> -->
                                            <IndexMusic v-show="currentMenu == 5" />
                                            <!-- <IndexOffline v-show="!online" /> -->
                                        <!-- </template> -->
                                        <IndexType v-show="currentMenu == 6"/>
                                        <IndexAbout v-show="currentMenu == 7" />
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

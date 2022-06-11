
<script setup>
import { ref, inject, defineComponent, watchEffect, computed, onUpdated, onMounted, watch } from 'vue'
import DropZone from './DropZone.vue'
import draggable from "vuedraggable";
import useFileList from '../../../compositions/file-list'
// import YouTubePlayer from 'youtube-player';

const { files, addFiles } = useFileList()

defineComponent({ DropZone, draggable })



const bgRef = ref();
const bgProv = inject('bgProv')
const listProv = inject('listProv')
const bgOrYtProv = inject('bgOrYtProv')
const countTimerProv = inject('countTimerProv')
const ytLinkProv = inject('ytLinkProv')
const ytIdProv = inject('ytIdProv')
const ytRestartProv = inject('ytRestartProv')
const loopProv = inject('loopProv')
const inputYt = ref()
const buttonYt = ref()
const loopYt = ref()


let clickBg = () => {
    bgRef.value.click()
}

let removeOneBg = (id) => {
    const idd = bgProv.value.findIndex((el) => el.id == id)

    bgProv.value.splice(idd, 1);
}


let removeOneYt = (id) => {
    const idd = ytIdProv.value.findIndex((el) => el.id == id)

    ytIdProv.value.splice(idd, 1);
}


const bgTime = ref(1000)
const loopBg = ref(false)

let timerBg = async () => {
    if (!loopBg.value) {
        return;
    }

    countTimerProv.value++
    if (countTimerProv.value >= bgProv.value.length) {
        countTimerProv.value = 0

    }
    if (loopBg.value) {
        setTimeout(timerBg, bgTime.value);
    }
}


let startBg = () => {
    loopBg.value = true
    timerBg()
}

let stopBg = () => {
    loopBg.value = false
}


let chooseBg = (e) => {
    addFiles(e.target.files)
    e.target.value = null
}


watchEffect(() => {
    if (files.value.length) {
        for (let idx = 0; idx < files.value.length; idx++) {
            bgProv.value.push(files.value[idx])
        }

        setTimeout(() => {
            files.value = []
        }, 1000);

    }
})

let convertMillis = computed(() => {

    const minutes = Math.floor((bgTime.value / 1000 / 60) % 60);
    const seconds = Math.floor((bgTime.value / 1000) % 60);

    const formattedTime = [
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0")
    ].join(":");

    return formattedTime

})

const dragging = ref(false)
const enabled = ref(true)

let checkMove = (e) => {
    window.console.log("Future index: " + e.draggedContext.futureIndex);
}

let addBgYt = () => {

    const checkUrlType = checkUrlImg(ytLinkProv.value);

    if (checkUrlType === true) {
        const link = ytLinkProv.value.split('/')

        console.log(link)

        if (link[2] != 'www.youtube.com' && link[2] != 'youtube.com') {
            alert(`The domain isn't from youtube!`)
        } else {
            const idLink = link[3].replace('watch?v=', '')
            // const idPlaylist = link[3].replace('playlist?list=', '')

            ytIdProv.value.push({
                id: new Date(),
                src: idLink,
                provider: 'youtube',
            })

            ytLinkProv.value = ''
        }

    } else {
        alert('The url only accept https protocol!')
    }
}


let checkUrlImg = (url) => {
    if (url.match(/^https:?:\/\/.+\/.+$/) !== null) {
        return true
    } else {
        return false
    }
}

const isDisabled = computed(() => {
    if (listProv.value.length > 1) {
        return true
    } else {
        return false
    }
})



let pal = () => {
    player.value.player.play()
}


let useYtBg = () => {
    player.value.player.source = {
        type: 'video',
        sources: [
            {
                src: ytIdProv.value[0].src,
                provider: 'youtube',
            },
        ],
    };
}

const player = inject('playerProv')
const stateYtProv = inject('stateYtProv')
const auu = ref([])
const ended = inject('endedProv')



// watchEffect(() => {
//     // var amas = 0

//     if (loopProv.value) {


//         if (stateYtProv.value) {
//             // auu.value.push(0)

//             // if (auu.value.length >= ytIdProv.value.length) {
//             //     auu.value = []
//             // }


//             player.value.player.source = {
//                 type: 'video',
//                 sources: [
//                     {
//                         src: ytIdProv.value[1].src,
//                         provider: 'youtube',
//                     },
//                 ]
//             }


//             player.value.player.play()
//             stateYtProv.value = false

//         }

//     }

// })





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
            <div class="flex-1" v-if="bgOrYtProv">
                <div class="flex flex-col justify-start gap-4">
                    <div class="flex-1">
                        <div class="flex flex-col flex-wrap gap-6">
                            <div class="flex-1 mt-6">
                                <DropZone class="drop-area" @files-dropped="addFiles" #default="{ dropZoneActive }">

                                    <div class="border-dashed border-4 mb-2 border-sky-500 w-full h-36 rounded-lg">
                                        <div
                                            class="flex h-full items-center justify-center bg-cover bg-center rounded-lg">
                                            <button
                                                class="bg-sky-500 inline-flex justify-center items-center text-white text-lg py-3 px-6 rounded-lg"
                                                @click="clickBg()">
                                                Choose Images
                                                <svg class="ml-6 w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                                                    role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
                                                    <g fill="none">
                                                        <path fill="#ffffff"
                                                            d="M44 24a2 2 0 1 0-4 0h4ZM24 8a2 2 0 1 0 0-4v4Zm15 32H9v4h30v-4ZM8 39V9H4v30h4Zm32-15v15h4V24h-4ZM9 8h15V4H9v4Zm0 32a1 1 0 0 1-1-1H4a5 5 0 0 0 5 5v-4Zm30 4a5 5 0 0 0 5-5h-4a1 1 0 0 1-1 1v4ZM8 9a1 1 0 0 1 1-1V4a5 5 0 0 0-5 5h4Z">
                                                        </path>
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                            stroke-linejoin="round" stroke-width="4"
                                                            d="m6 35l10.693-9.802a2 2 0 0 1 2.653-.044L32 36m-4-5l4.773-4.773a2 2 0 0 1 2.615-.186L42 31M30 12h12m-6-6v12">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div for="file-input" class="font-normal">
                                        <template v-if="dropZoneActive">
                                            <span>Drop Them Here</span>
                                            <span>to add.</span>
                                        </template>
                                        <template v-else>
                                            <span>Drag Your Images </span>
                                            <span>
                                                or click<strong> Choose Images</strong>.
                                            </span>
                                        </template>

                                        <input class="hidden" type="file" ref="bgRef" multiple
                                            @change="chooseBg($event)" accept="image/*">
                                    </div>
                                </DropZone>
                            </div>

                            <div class="flex-1">
                                <span class="text-2xl font-bold block mb-4">Timer</span>
                                <label class="inline font-semibold" for="">Show / </label>
                                <small class="inline text-sm font-medium" v-text="convertMillis"> </small>
                                <input type="range" @change="timerBg()" class="custom-range mt-4" v-model="bgTime"
                                    min="1000" step="1000" max="1000000" name="" id="">
                            </div>

                            <div class="flex-1">
                                <div class="flex flex-row justify-center items-center gap-8">
                                    <button @click="startBg()"
                                        class="font-semibold flex-1 text-lg text-white py-2 px-4 bg-sky-500 rounded-3xl">start</button>
                                    <button @click="stopBg()"
                                        class="font-semibold flex-1 text-lg text-white py-2 px-4 bg-sky-500 rounded-3xl">stop</button>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div class="flex-1 mb-6">
                        <span class="text-2xl font-bold">List</span>
                        <draggable :list="bgProv" :disabled="!enabled" item-key="id" class="grid grid-cols-2 gap-6"
                            ghost-class="ghost" :move="checkMove" @start="dragging = true" @end="dragging = false">
                            <template #item="{ element }">
                                <div class="relative cursor-move">
                                    <div class="absolute right-0">
                                        <div @click="removeOneBg(element.id)"
                                            class="cursor-pointer hover:bg-red-100 rounded-tr-xl">
                                            <svg class=" w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                <path fill="#bb3535"
                                                    d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                    <img class="w-64 rounded-xl shadow-md h-36 object-cover object-center"
                                        :src="element.url" alt="">
                                </div>
                            </template>
                        </draggable>
                    </div>
                </div>
            </div>
            <div v-else class="flex-1">
                <div class="flex flex-col justify-start mt-6 space-y-3">
                    <div class="flex-1">
                        <label for="exmaple">Example:</label>
                        <div class="font-light bg-sky-100 w-max rounded-lg py-1 px-2 mb-2">
                            https://www.youtube.com/watch?v=dQw4w9WgXcQ
                        </div>
                        <div class="relative">
                            <input v-model="ytLinkProv" 
                                class="py-2.5 pl-4 pr-24 focus:outline-none w-full border-2 border-sky-500 rounded-lg"
                                type="url" />

                            <button type="submit" @click="addBgYt()" 
                                class="absolute top-1 right-1 py-2 px-4 bg-sky-500 text-white font-semibold rounded-lg">
                                Submit
                            </button>
                        </div>

                    </div>
                    <div class="flex-1">
                        <div class="flex flex-row flex-nowrap items-center justify-between gap-4">
                            <div class="flex items-center gap-2">
                                <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                                    <input type="checkbox" v-model="loopProv" id="default-toggle" class="sr-only peer"
                                       >
                                    <div
                                        class="w-11 h-6 bg-sky-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-500">
                                    </div>
                                </label>
                                <div class="">
                                    <span class="text-sm font-medium text-gray-900">Loop playlist?</span>
                                </div>
                            </div>

                            <div v-if="ytIdProv.length > 0">
                                <button @click="useYtBg()"
                                    class="bg-sky-500 text-white font-semibold px-6 py-1 rounded-md">
                                    Use
                                </button>
                            </div>
                        </div>
                        <draggable :list="ytIdProv" :disabled="!enabled" item-key="id" class="grid grid-cols-2 gap-6"
                            ghost-class="ghost" :move="checkMove" @start="dragging = true" @end="dragging = false">
                            <template #item="{ element }">
                                <div class="relative cursor-move">
                                    <div class="absolute -right-2 z-10">
                                        <div @click="removeOneYt(element.id)"
                                            class="cursor-pointer hover:bg-red-100 rounded-tr-xl">
                                            <svg class=" w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                <path fill="#bb3535"
                                                    d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="">
                                        <div class="absolute inset-0 rounded-xl">
                                        </div>
                                        <iframe width="256" height="144" class="aspect-video rounded-xl"
                                            :src="`https://www.youtube.com/embed/${element.src}`"
                                            title="YouTube video player" frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen></iframe>

                                    </div>
                                </div>
                            </template>
                        </draggable>


                    </div>

                </div>



            </div>

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
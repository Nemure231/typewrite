<script setup>
import { inject, computed, ref, watchEffect} from 'vue'
import { useShare } from '@vueuse/core'

const { share, isSupported } = useShare()
const score = inject('scoreProv')
const life = inject('lifeProv')
const modalGameOverProv = inject('modalGameOverProv')
const hour = inject('hourProv');
const minute = inject('minuteProv');
const second = inject('secondProv');
const millisecond = inject('milliProv');
const selectlang = inject('selectLangProv')
const allWords = inject('allWordsProv')
const username = ref('')
const submitTime = ref(false)
const scoreList = inject('scoreListProv')
const stateUsername = ref()
const winLose = inject('winLoseProv')

let reloadGame = () => {
    score.value = 0
    modalGameOverProv.value = false
    life.value = 5
    resetTimer()

    if (selectlang.value == 2) {
        allWords.value.forEach((element, index) => {
            allWords.value.splice(index, 1, {
                id: element.id,
                name: element.name,
                dir: 0,
                top: element.top
            })
        });
    }
}

let resetTimer = () => {
    hour.value = 0
    minute.value = 0
    second.value = 0
    millisecond.value = 0
}

const showTimer = computed(() => {
    const timHour = hour.value.toString().length == 1 ? '0' + hour.value : hour.value
    const timMinute = minute.value.toString().length == 1 ? '0' + minute.value : minute.value
    const timSecond = second.value.toString().length == 1 ? '0' + second.value : second.value
    return `${timHour}:${timMinute}:${timSecond}`
})

let shareScore = () => {
    if (isSupported) {
        share({
            title: 'Playing Typewrite',
            text: `Hey, i got ${score.value} within ${showTimer.value}!`,
            url: location.href,
        })
    }
}

let submitScore = () => {
    if (scoreList.value.length < 10) {
        scoreList.value.push({
            username: username.value,
            score: score.value,
            playtime: showTimer.value,
            date: Date.now()
        })
    } else {
        const min = Math.min(...scoreList.value.map(item => item.score));
        const indexMin = scoreList.value.findIndex(i => i.score === min);
        scoreList.value.forEach(element => {
            if (score.value > element.score) {
                if (element.score) {
                    scoreList.value.splice(indexMin, 1, {
                        username: username.value,
                        score: score.value,
                        playtime: showTimer.value,
                        date: Date.now()
                    })
                }
            }
        });
    }
    submitTime.value = true
}

watchEffect(() => {
    setTimeout(() => {
        if(winLose.value){
            stateUsername.value.focus()
        }
    }, 500);
})

</script>

<template>
    <div class="fixed z-50 inset-0" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div
                class="relative inline-block  align-bottom bg-white dark:bg-gray-800 dark:text-gray-300 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle">
                <div class="relative">

                    <div class="flex flex-col justify-center items-center px-4 pt-10 pb-4 h-auto lg:w-96 md:w-80 w-72">
                        <img class="w-58 h-52 object-cover mb-1"
                            src="https://stickershop.line-scdn.net/stickershop/v1/sticker/28128900/android/sticker.png"
                            alt="">

                        <span class="text-xl font-semibold">
                            Thank you for playing!
                        </span>
                    </div>
                </div>
                <div class=" relative p-2 mb-16 grid grid-cols-2 text-center mt-3">

                    <p class="relative">
                        <span class="absolute -top-4 text-xs">Score:</span>
                        <span class="text-xl font-semibold" v-once v-text="score">

                        </span>
                    </p>

                    <p class="relative">
                        <span class="absolute -top-4 text-xs">Playtime:</span>
                        <span class="text-xl font-semibold" v-once v-text="showTimer">

                        </span>
                    </p>

                    <div v-if="!submitTime" class="relative col-span-2 text-left mt-3">
                        <form @submit.once.prevent="submitScore()" class="flex flex-col p-3">
                            <label class="text-xs" for="">
                                Input your username to update the score list
                            </label>
                            <div class="relative mt-2">
                                <input ref="stateUsername" v-model.trim="username"
                                    class="font-normal dark:bg-gray-700 py-1.5 pl-4 pr-24 focus:outline-none w-full border-2 border-sky-500 rounded-lg"
                                    type="text" />
                                <button
                                    class="absolute top-1 right-1 py-1 px-4 bg-sky-500 text-white font-semibold rounded-lg">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
                <div class="absolute bottom-0 inset-x-0">
                    <div class="flex flex-row p-2 gap-2 flex-wrap">
                        <div class="flex-1">
                            <button @click="shareScore()"
                                class="bg-sky-500 w-full gap-2 justify-center text-white inline-flex items-center rounded-lg py-2 px-4 font-semibold">
                                Share
                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
                                    <g fill="none" stroke="#ffffff" stroke-linejoin="round" stroke-width="4">
                                        <path
                                            d="M35 16a5 5 0 1 0 0-10a5 5 0 0 0 0 10ZM13 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z">
                                        </path>
                                        <path stroke-linecap="round" d="m30 13.575l-12.661 7.67m0 5.319l13.34 7.883">
                                        </path>
                                        <path d="M35 32a5 5 0 1 1 0 10a5 5 0 0 1 0-10Z"></path>
                                    </g>
                                </svg>

                            </button>

                        </div>
                        <div class="flex-1">
                            <button @click="reloadGame()"
                                class="bg-sky-500 w-full gap-2 justify-center text-white inline-flex items-center rounded-lg py-2 px-4 font-semibold">
                                Restart

                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
                                    <g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="4">
                                        <path d="M4 25c0-6.65 5.396-12 12-12h28"></path>
                                        <path d="m38 7l6 6l-6 6m6 4c0 6.65-5.396 12-12 12H4"></path>
                                        <path d="m10 41l-6-6l6-6"></path>
                                    </g>
                                </svg>
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>



</template>
<style scoped>
.rtl {
    direction: rtl
}
</style>
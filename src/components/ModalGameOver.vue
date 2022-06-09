<script setup>

import {defineProps, ref} from 'vue'

const props = defineProps({
    scoreProp: Number
})

const score = ref(props.scoreProp)


let reloadGame = () => {
    location.reload()
}
</script>

<template>
    <div class="fixed z-10 inset-0" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div
                class="relative inline-block  align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle">
                    <div class="bg-white relative">
                       
                        <div class="flex flex-col justify-center items-center px-4 pt-10 pb-4 h-auto lg:w-96 md:w-80 w-72">
                            <img class="w-58 h-52 object-cover mb-2" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/28128900/android/sticker.png" alt="">
                            
                            <p>Thank you for playing! Your score is:</p>
                            <span class="text-2xl font-semibold mb-6">{{score}}</span>
                            <button @click="reloadGame()"
                                class="bg-sky-500 text-white rounded-lg py-2 px-4 font-semibold">
                                Restart
                            </button>
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
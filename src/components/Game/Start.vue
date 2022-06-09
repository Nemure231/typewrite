<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(["childStartGame"]);

let childStartGame = () => {
    emit("childStartGame")

}

</script>

<template>

    <div class="absolute inset-0 flex justify-center items-center h-screen">
        <div class="">

            <span class="text-7xl font-bold">
                Typewrite.
            </span>
            <button @click="childStartGame()"
                class="h-20 w-20 inline-flex justify-center items-center bg-sky-500 rounded-full text-white font-bold">
                <svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
                    <path fill="none" stroke="#ffffff" stroke-linejoin="round" stroke-width="4"
                        d="M15 24V11.876l10.5 6.062L36 24l-10.5 6.062L15 36.124V24Z"></path>
                </svg>
            </button>


        </div>
    </div>

</template>
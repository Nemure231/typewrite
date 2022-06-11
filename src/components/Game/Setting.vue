<script setup>
import { inject, defineEmits } from 'vue'

const life = inject('lifeProv')


const emit = defineEmits(["childOpenModalSetting"]);

let childOpenModalSetting = () => {
  emit("childOpenModalSetting")

}

</script>

<template>


  <div class="flex-none">
    <button @click="childOpenModalSetting()"
      class="h-10 z-20 inline-flex justify-center items-center w-10 bg-sky-500 rounded-full text-white font-bold">
      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
        <g fill="none" stroke="#ffffff" stroke-linejoin="round" stroke-width="4">
          <path
            d="M18.284 43.171a19.995 19.995 0 0 1-8.696-5.304a6 6 0 0 0-5.182-9.838A20.09 20.09 0 0 1 4 24c0-2.09.32-4.106.916-6H5a6 6 0 0 0 5.385-8.65a19.968 19.968 0 0 1 8.267-4.627A6 6 0 0 0 24 8a6 6 0 0 0 5.348-3.277a19.968 19.968 0 0 1 8.267 4.627A6 6 0 0 0 43.084 18A19.99 19.99 0 0 1 44 24c0 1.38-.14 2.728-.406 4.029a6 6 0 0 0-5.182 9.838a19.995 19.995 0 0 1-8.696 5.304a6.003 6.003 0 0 0-11.432 0Z">
          </path>
          <path d="M24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"></path>
        </g>
      </svg>
    </button>
  </div>

</template>
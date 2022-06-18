<script setup>
import { inject, ref, watchEffect } from "vue";
const selectLangProv = inject('selectLangProv')
const showEx = inject('showExProv')
const listExTxt = inject('listExTxtProv')
const exTxt = ref('')
const list = inject('listProv')

const lang = ref([
    {
        id: 0,
        name: 'Indonesia'
    },
    {
        id: 1,
        name: 'English'
    },
    {
        id: 2,
        name: 'External Text'
    }
])

watchEffect(() => {
    if (selectLangProv.value === 2) {
        showEx.value = true
    } else {
        showEx.value = false
    }
})

let addExTxt = () => {
    if (exTxt.value === '') {
        alert('External text cannot be empty!')
    } else {
        const splt = exTxt.value.split(' ')
        splt.forEach((element, index) => {

            const filt = element.toLowerCase().replace(/\W/g, '').replace(/[0-9]/g, '')

            if (filt !== '') {
                listExTxt.value.push({
                    id: listExTxt.value.length > 0 ? listExTxt.value.length + 1 : index + 1,
                    name: filt,
                    dir: 0,
                    top: Math.floor(Math.random() * ((window.innerHeight - 96) - 0 + 1)) + 0
                })
            }
        });
        exTxt.value = ''
    }
}

</script>


<template>
    <template v-if="list.length <= 0">
        <div class="flex-1">
            <span class="text-2xl font-bold">Language</span>
            <div class="relative mt-3">
                <select v-model="selectLangProv" :disabled="list.length > 0 == true" :readonly="list.length > 0 == true"
                    class="border cursor-pointer border-sky-500 text-lg appearance-none relative default:bg-sky-30 text-sky-500 custom-bg-darker rounded-md block py-3 px-2 focus:outline-none focus:ring focus:ring-sky-300/20 w-full">
                    <option class="cursor-pointer" v-for="lg in lang" :key="lg.id" :value="lg.id">
                        {{ lg.name }}
                    </option>
                </select>
                <div class="absolute text-sky-500 right-2 top-2">
                    <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
            </div>
        </div>
        <div class="flex-1" v-if="showEx">
            <span class="text-2xl font-bold">External Text</span>
            <div class="flex flex-col justify-end items-end gap-3 mt-3">
                <!-- @input="$event.target.value = $event.target.value.replace(/\W/g, '').replace(/[0-9]/g, '')" -->
                <textarea v-model="exTxt" :disabled="list.length > 0 == true" :readonly="list.length > 0 == true"
                    class="py-2.5 pl-4 pr-24 font-normal focus:outline-none w-full border-2 border-sky-500 rounded-lg"
                    type="text" pattern="[A-Za-z]"></textarea>

                <button type="submit" @click="addExTxt()" :disabled="list.length > 0 == true"
                    :readonly="list.length > 0 == true"
                    class="inline-flex justify-end py-2 w-max px-4 bg-sky-500 text-white font-semibold rounded-lg">
                    Submit
                </button>
            </div>
        </div>
    </template>


</template>
<script setup>
import { inject, ref, computed, watchEffect } from "vue";
const dirText = inject('dirTextProv')
const selectLangProv = inject('selectLangProv')
const showEx = ref(false)
const exTxt = ref('')
const listExTxt = ref([])

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
    const splt = exTxt.value.split(' ')

    splt.forEach((element, index) => {
        listExTxt.value.push({
            id: index + 1,
            name: element.toLowerCase()
        })
    });

    console.log(listExTxt.value)
}

let removeOneExTxt = (event) => {
    const idd =listExTxt.value.findIndex((el) => el.id == event)

	listExTxt.value.splice(idd, 1);
}
</script>


<template>
    <div class="flex-1">
        <div class="flex flex-col gap-3">
            <div class="flex-1">
                <span class="text-2xl font-bold">Direction</span>
                <div class="flex gap-3 mt-6">
                    <button :class="dirText == 1 && 'bg-sky-100'" @click="dirText = 1"
                        class="flex-1 py-0.25 px-3 rounded-md border-2 border-sky-500">
                        <div class="inline-flex justify-center items-center">
                            <svg class="w-10 h-10 text-sky-500" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
                                <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"
                                    d="M30 36L18 24l12-12v24Z"></path>
                            </svg>
                            <span class="text-lg">
                                Left
                            </span>
                            <input class="hidden" type="radio" v-model="dirText" value="0" />
                        </div>
                    </button>
                    <button :class="dirText == 0 && 'bg-sky-100'" @click="dirText = 0"
                        class="flex-1 py-0.25 px-3 rounded-md border-2 border-sky-500">
                        <div class="inline-flex justify-center items-center">
                            <span class="text-lg">
                                Right
                            </span>
                            <svg class="w-10 h-10 text-sky-500" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
                                <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"
                                    d="m20 12l12 12l-12 12V12Z"></path>
                            </svg>
                            <input class="hidden" type="radio" v-model="dirText" value="1" />
                        </div>
                    </button>
                </div>
            </div>
            <div class="flex-1">
                <span class="text-2xl font-bold">Language</span>
                <div class="relative mt-6">
                    <select v-model="selectLangProv"
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
            <!-- <div class="flex-1" v-if="showEx"> -->
            <span class="text-2xl font-bold">External Text</span>
            <div class="flex flex-col justify-end items-end gap-3">
                <textarea v-model="exTxt"
                    class="py-2.5 pl-4 pr-24 font-normal focus:outline-none w-full border-2 border-sky-500 rounded-lg"
                    type="text"></textarea>

                <button type="submit" @click="addExTxt()"
                    class="inline-flex justify-end py-2 w-max px-4 bg-sky-500 text-white font-semibold rounded-lg">
                    Submit
                </button>
            </div>

            <!-- </div> -->
            <!-- <div class="flex-1" v-if="listExTxt.length > 0"> -->
            <span class="text-2xl font-bold">List External Text</span>
            <div class="flex flex-row flex-wrap justify-start items-end gap-3">
                <div v-for="lex in listExTxt" :key="lex.id" class="flex flex-row flex-nowrap">
                        <span class="border-l-2 border-t-2 border-b-2 border-sky-500 py-2 px-3 text-lg rounded-l-md font-normal">
                            {{lex.name}}
                        </span>
                        <button @click="removeOneExTxt(lex.id)" class="cursor-pointer py-2 px-2 rounded-r-md border-t-2 border-b-2 border-r-2 border-sky-500 hover:bg-red-100 rounded-r-md">
                            <svg class=" w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path fill="#bb3535"
                                    d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z">
                                </path>
                            </svg>
                        </button>

                    </div>

            </div>

            <!-- </div> -->
        </div>
    </div>
</template>
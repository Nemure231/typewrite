<script setup>
import { inject } from "vue";
const listExTxt = inject('listExTxtProv')
const list = inject('listProv')


let removeOneExTxt = (event) => {
    const idd = listExTxt.value.findIndex((el) => el.id == event)
    listExTxt.value.splice(idd, 1);

    console.log(listExTxt.value)
}
</script>


<template>
    <div class="flex-1" v-if="listExTxt.length > 0">
        <span class="text-2xl font-bold">List External Text</span>
        <div class="flex flex-row flex-wrap justify-start items-end gap-3 my-3">
            <div v-for="lex in listExTxt" :key="lex.id" class="flex flex-row flex-nowrap">
                <span
                    class="border-l-2 border-t-2 border-b-2 border-sky-500 py-2 px-3 text-lg rounded-l-md font-normal">
                    {{ lex.name }}
                </span>
                    <div @click="removeOneExTxt(lex.id)"
                        class="cursor-pointer py-2 px-2 rounded-r-md border-t-2 border-b-2 border-r-2 border-sky-500 ">
                        <svg v-if="list.length <= 0" @click="removeOneExTxt(lex.id)" class="cursor-pointer w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path fill="#bb3535"
                                d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z">
                            </path>
                        </svg>
                    </div>
            </div>
        </div>
    </div>
</template>
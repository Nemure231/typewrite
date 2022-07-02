<script setup>
import { inject } from 'vue'

const scoreList = inject('scoreListProv')
const scoreSort = scoreList.value.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));

let formatDate = (timestamp, format) => {

    const date = new Date(timestamp);

    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        yy: date.getFullYear().toString().slice(-2),
        yyyy: date.getFullYear()
    }
    return format.replace(/mm|dd|yy|yyyy/gi, matched => map[matched])
}
</script>

<template>
    <div class="flex-1">
        <div class="flex flex-col gap-6">
            <div class="flex-1">
                <span class="text-2xl font-bold">Score</span>
                <div class="flex flex-col gap-3 mt-3 font-normal text-justify">
                    <table v-if="scoreList.length > 0" class="table-auto">
                        <thead>
                            <tr class="rounded-lg">
                                <th class="border border-sky-500 p-1">Username</th>
                                <th class="border border-sky-500 p-1 text-center">Score</th>
                                <th class="border border-sky-500 p-1">Playtime</th>
                                <th class="border border-sky-500 p-1">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(ss, index) in scoreSort" :key="index">
                                <td class="border border-sky-700 p-1">
                                    {{ ss.username }}
                                </td>
                                <td class="text-center border border-sky-700 p-1">
                                    {{ ss.score }}
                                </td>
                                <td class="border border-sky-700 p-1">
                                    {{ ss.playtime }}
                                </td>
                                <td class="border border-sky-700 p-1">
                                    {{ formatDate(ss.date, 'dd-mm-yy') }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-else class="flex-1">
                        <div class="flex flex-col gap-3 font-normal text-justify items-center overflow-hidden">

                            <svg class="fill-sky-500 mt-20 w-24 h-24" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path
                                    d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm1.757-.437a.5.5 0 0 1 .68.194.934.934 0 0 0 .813.493c.339 0 .645-.19.813-.493a.5.5 0 1 1 .874.486A1.934 1.934 0 0 1 10.25 7.75c-.73 0-1.356-.412-1.687-1.007a.5.5 0 0 1 .194-.68z" />

                            </svg>
                            <span class="text-2xl font-semibold text-center">
                                You have no record score, try play once.
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
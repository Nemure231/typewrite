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
                    <table class="table-auto">
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
                </div>
            </div>
        </div>
    </div>
</template>
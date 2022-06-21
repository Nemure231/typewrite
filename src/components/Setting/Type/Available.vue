<script setup>
import { inject, ref } from 'vue';

const testType = inject('testTypeProv')

const ava = ref([
    {
        "id": 1,
        "name": "a"
    },
    {
        "id": 2,
        "name": "b"
    },
    {
        "id": 3,
        "name": "c"
    },
    {
        "id": 4,
        "name": "d"
    },
    {
        "id": 5,
        "name": "e"
    },
    {
        "id": 6,
        "name": "f"
    },
    {
        "id": 7,
        "name": "g"
    },
    {
        "id": 8,
        "name": "h"
    },
    {
        "id": 9,
        "name": "i"
    },
    {
        "id": 10,
        "name": "j"
    },
    {
        "id": 11,
        "name": "k"
    },
    {
        "id": 12,
        "name": "l"
    },
    {
        "id": 13,
        "name": "m"
    },
    {
        "id": 14,
        "name": "n"
    },
    {
        "id": 15,
        "name": "o"
    },
    {
        "id": 16,
        "name": "p"
    },
    {
        "id": 17,
        "name": "q"
    },
    {
        "id": 18,
        "name": "r"
    },
    {
        "id": 19,
        "name": "s"
    },
    {
        "id": 20,
        "name": "t"
    },
    {
        "id": 21,
        "name": "u"
    },
    {
        "id": 22,
        "name": "v"
    },
    {
        "id": 23,
        "name": "w"
    },
    {
        "id": 24,
        "name": "x"
    },
    {
        "id": 25,
        "name": "y"
    },
    {
        "id": 26,
        "name": "z"
    },
    {
        "id": 27,
        "name": "Enter"
    },
    {
        "id": 28,
        "name": "Backspace"
    },
    {
        "id": 29,
        "name": "Space"
    },
    {
        "id": 30,
        "name": "Delete"
    },
    {
        "id": 31,
        "name": "Minus"
    }
])
</script>


<template>
    <div class="flex-1">
        <span class="text-2xl font-bold">Available Type</span>
        <div class="flex flex-row flex-wrap gap-3 mt-3 font-normal justify-center">
            <span v-for="als in ava" :key="als.id" :class="testType == als.name && 'bg-sky-100'"
                class="py-1 px-3 rounded-md border border-sky-500 shadow-md text-lg text-center">
                {{ als.name }}
            </span>
            <small class="flex-1 basis-full text-right">
                Test by yourself with keyboard.
            </small>
        </div>
    </div>
</template>
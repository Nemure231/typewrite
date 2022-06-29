<script setup>
import ListVisiblityView from './List.vue';
import { inject, ref } from 'vue';

const lifeToggle = inject('lifeToggleProv')
const totalToggle = inject('totalToggleProv')
const scoreToggle = inject('scoreToggleProv')
const timeToggle = inject('timeToggleProv')

const listVisible = ref([
    {
        id: 1,
        name: 'Life',
        model: lifeToggle
    },
    {
        id: 2,
        name: 'Total',
        model: totalToggle
    },
    {
        id: 3,
        name: 'Score',
        model: scoreToggle
    },
    {
        id: 4,
        name: 'Time',
        model: timeToggle
    }
])
</script>


<template>
    <div class="flex-1">
        <span class="text-2xl font-bold">Visibility</span>
        <div class="flex gap-3 mt-3">
            <ListVisiblityView :listVisibProps="listVisible"/>
        </div>
    </div>
</template>
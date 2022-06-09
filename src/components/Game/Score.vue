<script setup>
import { inject } from 'vue'

const score = inject('scoreProv')

</script>

<template>

    <div class="absolute top-6 right-3">
        <div class="flex">
            <span class="text-3xl font-bold bg-white py-0.5 rounded-3xl w-auto px-3.5">
                {{ score }}
            </span>

        </div>
    </div>
</template>
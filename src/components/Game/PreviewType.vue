<script setup>
import { inject } from 'vue'

const previewType = inject('previewTypeProv')

</script>

<template>


  <div class="flex-none">
    <div class="flex">
      <span class="text-3xl bg-white text-sky-600 w-auto">
        {{ previewType }}
      </span>

    </div>
  </div>

</template>
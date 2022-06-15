<script setup>
import { inject } from 'vue'

const bgOrYtProv = inject('bgOrYtProv')
</script>

<template>
  <div class="relative" :class="!bgOrYtProv ? 'block' : 'hidden'">
    <div class=" fixed inset-0 z-10">
    </div>
    <slot name="vueplyr"></slot>

  </div>

</template>
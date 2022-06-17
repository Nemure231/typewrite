<script setup>
import { inject, computed } from 'vue'

const previewType = inject('previewTypeProv')

const color = inject('fontColorProv')
const fontWeight = inject('fontWeightProv')
const bgColor = inject('bgColorProv')
const borderColor = inject('borderColorProv')
const borderWidth = inject('borderWidthProv')

const changeStyle = computed(() => {
    const text = {
        color: color.value,
        fontWeight: fontWeight.value,
        backgroundColor: bgColor.value,
        borderColor: borderColor.value,
        borderWidth: `${borderWidth.value}px`,
    }
    return text
})
</script>

<template>
  <div class="fixed bottom-3 left-3 z-50">
    <div class="flex">
      <span class="text-3xl w-auto" :style="changeStyle">
        {{ previewType }}
      </span>

    </div>
  </div>

</template>
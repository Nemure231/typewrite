<script setup>
import { inject, computed } from 'vue'

const color = inject('fontColorProv')
const fontWeight = inject('fontWeightProv')
const bgColor = inject('bgColorProv')
const borderColor = inject('borderColorProv')
const borderWidth = inject('borderWidthProv')
const borderRadius = inject('borderRadiusProv')

const pass = inject('passProv')
const unPass = inject('unpassProv')
const allWords = inject('allWordsProv')
const totalToggle = inject('totalToggleProv')

const changeStyle = computed(() => {
  const text = {
    color: color.value,
    fontWeight: fontWeight.value,
    backgroundColor: bgColor.value,
    borderColor: borderColor.value,
    borderWidth: `${borderWidth.value}px`,
    borderRadius: `${borderRadius.value}px`,
  }
  return text
})

const changeTimer = computed(() => `${allWords.value.length - (pass.value.length + unPass.value.length)}/${pass.value.length + unPass.value.length}`)

const isTotalVisible = computed(() => totalToggle.value ? 'block' : 'hidden')

</script>
<template>

  <div class="fixed top-3 w-full z-40" :class="isTotalVisible">
    <div class="flex justify-center items-center">
      <span class="text-2xl bg-white py-0.5 w-auto px-3.5" :style="changeStyle" v-text="changeTimer">

      </span>
    </div>
  </div>


</template>
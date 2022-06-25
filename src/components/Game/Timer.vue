<script setup>
import { inject, computed } from 'vue'

const hour = inject('hourProv');
const minute = inject('minuteProv');
const second = inject('secondProv');
const millisecond = inject('milliProv');
const color = inject('fontColorProv')
const fontWeight = inject('fontWeightProv')
const bgColor = inject('bgColorProv')
const borderColor = inject('borderColorProv')
const borderWidth = inject('borderWidthProv')
const borderRadius = inject('borderRadiusProv')

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

let showTimer = computed(() => {
  const timHour = hour.value.toString().length == 1 ? '0' + hour.value : hour.value
  const timMinute = minute.value.toString().length == 1 ? '0' + minute.value : minute.value
  const timSecond = second.value.toString().length == 1 ? '0' + second.value : second.value
  const timMili = millisecond.value.toString().length == 1 ? '00' + millisecond.value : millisecond.value
  return `${timHour}:${timMinute}:${timSecond}:${timMili}`
})

</script>
<template>

  <div class="fixed bottom-3 w-full z-40">
    <div class="flex justify-center items-center">
      <span class="text-2xl bg-white py-0.5 w-auto px-3.5" :style="changeStyle" v-text="showTimer">
      </span>
    </div>
  </div>

</template>
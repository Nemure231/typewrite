<script setup>
import { inject, computed } from 'vue'


const list = inject('listProv')
const color = inject('fontColorProv')
const bgColor = inject('bgColorProv')
const fontSize = inject('fontSizeProv')
const fontWeight = inject('fontWeightProv')
const paddingY = inject('paddingYProv')
const paddingX = inject('paddingXProv')
const borderColor = inject('borderColorProv')
const borderWidth = inject('borderWidthProv')
const borderRadius = inject('borderRadiusProv')
const dirText = inject('dirTextProv')


let direction = (li) => {

  const dirRight = {
    right: `${li.dir}px`,
    top: `${li.top}px`
  }

  const dirLeft = {
    left: `${li.dir}px`,
    top: `${li.top}px`
  }

  if (dirText.value == 0) {

    return dirRight
  } else {
    return dirLeft
  }

}


const changeStyle = computed(() => {
  const text = {
    color: color.value,
    backgroundColor: bgColor.value,
    fontSize: `${fontSize.value}px`,
    fontWeight: fontWeight.value,
    paddingLeft: `${paddingX.value}px`,
    paddingRight: `${paddingX.value}px`,
    paddingTop: `${paddingY.value}px`,
    paddingBottom: `${paddingY.value}px`,
    borderColor: borderColor.value,
    borderWidth: `${borderWidth.value}px`,
    borderRadius: `${borderRadius.value}px`
  }
  return text
})

</script>

<template>

    <p v-for="li in list" :key="li.id" :id="li.id" class="p-1 z-50 bg-white text-md absolute"
      :style="[direction(li), changeStyle]">
       <div class=" fixed inset-0 z-10">
      </div>
      {{ li.name }}
    </p>

</template>
<script setup>
import Main from './components/Base/Main.vue'
import Footer from './components/Base/Footer.vue'
import Warning from './components/Base/Warning.vue'
import ReOff from './components/Reload/Index.vue'
import Offline from './components/Base/Offline.vue'
import { ref, provide, computed, watchEffect } from 'vue';
import { useOnline } from '@vueuse/core'
import { id } from 'https://nemure231.github.io/typewrite/data/words/id.js'
import { en } from 'https://nemure231.github.io/typewrite/data/words/en.js'


// Global Data
const list = ref([])
const pass = ref([])
const unpass = ref([])
const score = ref(0)
const life = ref(5)
const lose = ref(0)
const start = ref(false)
const bg = ref([]);
const showTime = ref(3000)
const moveTime = ref(50)
const color = ref('#000000')
const bgColor = ref(`#FFFFFF`)
const fontSize = ref(14)
const fontWeight = ref(400)
const paddingY = ref(4)
const paddingX = ref(6)
const borderColor = ref(`#FFFFFF`)
const borderWidth = ref(1)
const borderRadius = ref(0)
const previewType = ref('')
const countTimer = ref(0)
const bgOrYt = ref(true)
const ytLink = ref('')
const ytId = ref([])
const pauseProblem = ref([])
const loop = ref(false)
const ytRestart = ref(true)
const dirText = ref(0)
const selectLang = ref(0)
const allWords = ref([])
const typeText = ref(0)
const showEx = ref(false)
const listExTxt = ref([])
const online = useOnline()
const mute = ref(false)

//Highligh
const highlightColor = ref('#000000')
const highlightStyle = ref('solid')
const highlightThick = ref(2)


//Timer
const hour = ref(0);
const minute = ref(0);
const second = ref(0);
const milli = ref(0);

watchEffect(() => {
  var uma = []
  if (selectLang.value === 0) {
    uma = id
  }

  if (selectLang.value === 1) {
    uma = en
  }

  if (selectLang.value === 2) {
    if (showEx.value) {
      if (listExTxt.value.length > 0) {
        uma = listExTxt.value
      }
    }
  }
  allWords.value = uma
})



provide('muteProv', computed({
  get: () => mute.value,
  set: (val) => {
    mute.value = val
  }
}))

provide('highlightColorProv', computed({
  get: () => highlightColor.value,
  set: (val) => {
    highlightColor.value = val
  }
}))

provide('highlightStyleProv', computed({
  get: () => highlightStyle.value,
  set: (val) => {
    highlightStyle.value = val
  }
}))

provide('highlightThickProv', computed({
  get: () => highlightThick.value,
  set: (val) => {
    highlightThick.value = val
  }
}))


provide('allWordsProv', computed({
  get: () => allWords.value,
  set: (val) => {
    allWords.value = val
  }
}))

provide('hourProv', computed({
  get: () => hour.value,
  set: (val) => {
    hour.value = val
  }
}))

provide('minuteProv', computed({
  get: () => minute.value,
  set: (val) => {
    minute.value = val
  }
}))

provide('secondProv', computed({
  get: () => second.value,
  set: (val) => {
    second.value = val
  }
}))

provide('milliProv', computed({
  get: () => milli.value,
  set: (val) => {
    milli.value = val
  }
}))



provide('selectLangProv', computed({
  get: () => selectLang.value,
  set: (val) => {
    selectLang.value = val
  }
}))

provide('showExProv', computed({
  get: () => showEx.value,
  set: (val) => {
    showEx.value = val
  }
}))


provide('listExTxtProv', computed({
  get: () => listExTxt.value,
  set: (val) => {
    listExTxt.value = val
  }
}))


provide('typeTextProv', computed({
  get: () => typeText.value,
  set: (val) => {
    typeText.value = val
  }
}))


provide('dirTextProv', computed({
  get: () => dirText.value,
  set: (val) => {
    dirText.value = val
  }
}))


provide('dirTextProv', computed({
  get: () => dirText.value,
  set: (val) => {
    dirText.value = val
  }
}))


provide('ytRestartProv', computed({
  get: () => ytRestart.value,
  set: (val) => {
    ytRestart.value = val
  }
}))


provide('loopProv', computed({
  get: () => loop.value,
  set: (val) => {
    loop.value = val
  }
}))

provide('pauseProblemProv', computed({
  get: () => pauseProblem.value,
  set: (val) => {
    pauseProblem.value = val
  }
}))


provide('ytIdProv', computed({
  get: () => ytId.value,
  set: (val) => {
    ytId.value = val
  }
}))

provide('ytLinkProv', computed({
  get: () => ytLink.value,
  set: (val) => {
    ytLink.value = val
  }
}))


provide('bgOrYtProv', computed({
  get: () => bgOrYt.value,
  set: (val) => {
    bgOrYt.value = val
  }
}))


provide('countTimerProv', computed({
  get: () => countTimer.value,
  set: (val) => {
    countTimer.value = val
  }
}))

provide('lifeProv', computed({
  get: () => life.value,
  set: (val) => {
    life.value = val
  }
}))

provide('loseProv', computed({
  get: () => lose.value,
  set: (val) => {
    lose.value = val
  }
}))

provide('startProv', computed({
  get: () => start.value,
  set: (val) => {
    start.value = val
  }
}))

provide('lifeProv', computed({
  get: () => life.value,
  set: (val) => {
    life.value = val
  }
}))

provide('previewTypeProv', computed({
  get: () => previewType.value,
  set: (val) => {
    previewType.value = val
  }
}))


provide('moveTimeProv', computed({
  get: () => moveTime.value,
  set: (val) => {
    moveTime.value = val
  }
}))

provide('showTimeProv', computed({
  get: () => showTime.value,
  set: (val) => {
    showTime.value = val
  }
}))

provide('fontSizeProv', computed({
  get: () => fontSize.value,
  set: (val) => {
    fontSize.value = val
  }
}))

provide('fontColorProv', computed({
  get: () => color.value,
  set: (val) => {
    color.value = val
  }
}))
provide('fontWeightProv', computed({
  get: () => fontWeight.value,
  set: (val) => {
    fontWeight.value = val
  }
}))
provide('bgColorProv', computed({
  get: () => bgColor.value,
  set: (val) => {
    bgColor.value = val
  }
}))
provide('paddingYProv', computed({
  get: () => paddingY.value,
  set: (val) => {
    paddingY.value = val
  }
}))

provide('paddingXProv', computed({
  get: () => paddingX.value,
  set: (val) => {
    paddingX.value = val
  }
}))

provide('borderColorProv', computed({
  get: () => borderColor.value,
  set: (val) => {
    borderColor.value = val
  }
}))
provide('borderWidthProv', computed({
  get: () => borderWidth.value,
  set: (val) => {
    borderWidth.value = val
  }
}))
provide('borderRadiusProv', computed({
  get: () => borderRadius.value,
  set: (val) => {
    borderRadius.value = val
  }
}))

provide('bgProv', computed({
  get: () => bg.value,
  set: (val) => {
    bg.value = val
  }
}))


provide('countTimerProv', computed({
  get: () => countTimer.value,
  set: (val) => {
    countTimer.value = val
  }
}))

provide('listProv', computed({
  get: () => list.value,
  set: (val) => {
    list.value = val
  }
}))


provide('passProv', computed({
  get: () => pass.value,
  set: (val) => {
    pass.value = val
  }
}))


provide('unpassProv', computed({
  get: () => unpass.value,
  set: (val) => {
    unpass.value = val
  }
}))

provide('scoreProv', computed({
  get: () => score.value,
  set: (val) => {
    score.value = val
  }
}))


</script>


<template>

  <template v-if="online">
    <Main class="lg:block md:block sm:block hidden" />
    <Footer class="lg:block md:block sm:block hidden" />
    <ReOff />
    <Warning />
  </template>
  <template v-else>
    <Offline />
  </template>




</template>
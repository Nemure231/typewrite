<script setup>
import { ref, provide, computed, watchEffect, defineAsyncComponent } from 'vue';
import { useOnline } from '@vueuse/core'
import MainView from './components/Base/Main.vue'
import ReOffView from './components/Reload/Index.vue'
import { breakpointsTailwind, useBreakpoints, useStorage, useDark } from '@vueuse/core'


//vue use
const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.smaller('sm')
const online = useOnline()
var isDark = useDark()

// modal current tab
const currentTab = useStorage('typewrite_current_tab', 'Level')


// Global Data
const list = ref([])
const pass = ref([])
const unpass = ref([])
const allWords = ref([])
const showEx = ref(false)
const listExTxt = ref([])

//visiblity
const lifeToggle = useStorage('typewrite_life_toggle', false)
const scoreToggle = useStorage('typewrite_score_toggle', false)
const totalToggle = useStorage('typewrite_total_toggle', false)
const timeToggle = useStorage('typewrite_time_toggle', false)

//Game
const score = ref(0)
const life = ref(5)
const lose = ref(0)
const start = ref(false)
const showTime = useStorage('typewrite_text_show_time', 3000)
const moveTime = useStorage('typewrite_text_move_time', 50)
const previewType = ref('')
const selectLang = ref(0)
const typeText = ref(0)


//Bg
const bg = ref([]);
const bgTime = ref(10000)
const startBgTimer = ref(false)
const currentFilter = ref(0)

//Swiper
const swiper = ref()
const swiperEffect = ref('fade')

//Text
const dirText = useStorage('typewrite_direction_text', 0)

//score
const scoreList = useStorage('typewrite_score_list', [])

//Font
const color = useStorage('typewrite_font_color', '#000000')
const bgColor = useStorage('typewrite_bg_color', `#FFFFFF`)
const fontSize = useStorage('typewrite_font_size', 14)
const fontWeight =  useStorage('typewrite_font_weight', 400)
const paddingY = useStorage('typewrite_padding_y', 4)
const paddingX = useStorage('typewrite_padding_x', 6)
const borderColor = useStorage('typewrite_border_color', `#FFFFFF`)
const borderWidth = useStorage('typewrite_border_width', 1)
const borderRadius = useStorage('typewrite_border_radius', 0)

//Type
const testType = ref('')
const submitType = useStorage('typewrite_submit_type', 0)

//yOUTUBE
const mute = useStorage('typewrite_youtube_mute', false)
const loop = useStorage('typewrite_youtube_loop', false)
const bgOrYt = ref(true)
const ytLink = ref('')
const ytId = ref([])
const sound = useStorage('typewrite_youtube_sound', false)

//Highligh
const highlightColor = useStorage('typewrite_highlight_color', '#000000')
const highlightStyle = useStorage('typewrite_highlight_style', 'solid')
const highlightThick = useStorage('typewrite_highlight_thick', 2)

//Timer
const hour = ref(0);
const minute = ref(0);
const second = ref(0);
const milli = ref(0);

//language
const id = ref([])
const en = ref([])

let loadData = async (state, name, url) => {
  let emu = await import(/* @vite-ignore */ url);
  state.value = emu[name]
}

watchEffect(() => {
  var uma = []
  if (selectLang.value === 0) {

    if(online.value){
      uma = []
      loadData(id, 'id', 'https://nemure231.github.io/typewrite/data/words/id.min.js')
      uma = id.value
    }else{
      uma = []
    }
  }

  if (selectLang.value === 1) {

     if(online.value){
      uma = []
      loadData(en, 'en', 'https://nemure231.github.io/typewrite/data/words/en.min.js')
      uma = en.value

    }else{
      uma = []
    }
  }

  if (selectLang.value === 2) {
    uma = []
    if (showEx.value) {
      if (listExTxt.value.length > 0) {
        uma = listExTxt.value
      }
    }
  }
  allWords.value = uma
})

provide('currentTabProv', computed({
  get: () => currentTab.value,
  set: (val) => {
    currentTab.value = val
  }
}))

provide('currentFilterProv', computed({
  get: () => currentFilter.value,
  set: (val) => {
    currentFilter.value = val
  }
}))

provide('scoreListProv', computed({
  get: () => scoreList.value,
  set: (val) => {
    scoreList.value = val
  }
}))

provide('isDarkProv', computed({
  get: () => isDark,
  set: (val) => {
    isDark = val
  }
}))

provide('lifeToggleProv', computed({
  get: () => lifeToggle.value,
  set: (val) => {
    lifeToggle.value = val
  }
}))

provide('scoreToggleProv', computed({
  get: () => scoreToggle.value,
  set: (val) => {
    scoreToggle.value = val
  }
}))


provide('totalToggleProv', computed({
  get: () => totalToggle.value,
  set: (val) => {
    totalToggle.value = val
  }
}))


provide('timeToggleProv', computed({
  get: () => timeToggle.value,
  set: (val) => {
    timeToggle.value = val
  }
}))



provide('muteProv', computed({
  get: () => mute.value,
  set: (val) => {
    mute.value = val
  }
}))

provide('swiperEffectProv', computed({
  get: () => swiperEffect.value,
  set: (val) => {
    swiperEffect.value = val
  }
}))


provide('swiperProv', computed({
  get: () => swiper.value,
  set: (val) => {
    swiper.value = val
  }
}))


provide('startBgTimerProv', computed({
  get: () => startBgTimer.value,
  set: (val) => {
    startBgTimer.value = val
  }
}))


provide('bgTimeProv', computed({
  get: () => bgTime.value,
  set: (val) => {
    bgTime.value = val
  }
}))

provide('submitTypeProv', computed({
  get: () => submitType.value,
  set: (val) => {
    submitType.value = val
  }
}))

provide('testTypeProv', computed({
  get: () => testType.value,
  set: (val) => {
    testType.value = val
  }
}))

provide('soundProv', computed({
  get: () => sound.value,
  set: (val) => {
    sound.value = val
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


provide('loopProv', computed({
  get: () => loop.value,
  set: (val) => {
    loop.value = val
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

const isScreenSize = computed(() => {
  if (sm.value) {
    return defineAsyncComponent(() => import('./components/Base/Warning.vue'))
  }
})
</script>

<template>
    <MainView class="lg:block md:block sm:block hidden" />
    <ReOffView />
    <component :is="isScreenSize"></component>
</template>
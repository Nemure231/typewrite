<script setup>
import { ref, onMounted, onUpdated, watch, inject, watchEffect, defineProps, computed, defineComponent, provide } from 'vue';
import { OnClickOutside } from '@vueuse/components'
import ModalSetting from '../Setting/ModalSetting.vue'
import ModalGameOver from '../ModalGameOver.vue'
import Type from '../Type/Index.vue'
import PreviewType from '../Game/PreviewType.vue'
import Setting from '../Game/Setting.vue'
import Life from '../Game/Life.vue'
import Start from '../Game/Start.vue'
import Score from '../Game/Score.vue'

defineComponent({ OnClickOutside, ModalSetting, ModalGameOver, Type, Life, Start })

const allWords = inject('allWordsProv')
const pass = inject('passProv')
const unPass = inject('unpassProv')
const score = inject('scoreProv')
const list = inject('listProv')
const modalSettingButton = ref(false)
const modalGameOver = ref(false)
const life = inject('lifeProv')
const lose = inject('loseProv')
const start = inject('startProv')
const bg = inject('bgProv')
const showTime = inject('showTimeProv')
const moveTime = inject('moveTimeProv')
const color = inject('fontColorProv')
const bgColor = inject('bgColorProv')
const fontSize = inject('fontSizeProv')
const fontWeight = inject('fontWeightProv')
const paddingY = inject('paddingYProv')
const paddingX = inject('paddingXProv')
const borderColor = inject('borderColorProv')
const borderWidth = inject('borderWidthProv')
const borderRadius = inject('borderRadiusProv')
const countTimer = inject('countTimerProv')

let rightPlus = async () => {

  if (!start.value) {
    return;
  }

  list.value.forEach((e) => {
    e.right += 1
  })

  if (start.value) {
    setTimeout(rightPlus, moveTime.value);
  }
}

let addWord = async () => {
  if (!start.value) {
    return;
  }
  const random = Math.floor(Math.random() * (28307 - 1 + 1)) + 1
  let obj = allWords.value.find(o => o.id === random);

  let objFind = list.value.find(o => o.name === obj.name);

  if (!objFind) {
    list.value.push(obj)
  }
  if (start.value) {
    setTimeout(addWord, showTime.value)
  }
}

let startGame = () => {
  start.value = true
  addWord()
  rightPlus()
}

let pauseGame = () => {
  start.value = false
}

let openModalSetting = () => {
  modalSettingButton.value = !modalSettingButton.value
  pauseGame()
}

let closeModalSetting = () => {
  modalSettingButton.value = false
}

let gameOver = () => {
  list.value.forEach((e) => {
    const passId = pass.value.find(element => element == e.id);
    if (passId === undefined) {
      if (e.right == window.innerWidth) {
        unPass.value.push(
          e.id
        )
      }
    }
  })

  unPass.value.forEach(e => {
    lose.value = unPass.value.length
  })

}

watch(
  () => lose.value,
  (count, prevCount) => {
    setTimeout(() => {

      if (life.value <= 1) {
        start.value = false
        modalGameOver.value = true
        list.value = []
        life.value = 0

      } else {
        life.value -= 1
      }
    }, 500);
  }
)


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


onUpdated(() => {
  gameOver()
})

const changeBg = computed(() => {
  if (bg.value.length > 0) {
    return bg.value[countTimer.value].url
  }
})


</script>

<template>

  <main class="flex-1 w-full h-full mb-0 relative">
    <Type />

    <div class="fixed bg-cover bg-center bg-no-repeat inset-0" :style="{
      backgroundImage: `url(${changeBg})`,
    }">
    </div>

    <!-- <div style="position: fixed; z-index: -99; width: 100%; height: 100%">
      <iframe frameborder="0" height="100%" width="100%" 
        src="https://www.youtube.com/embed/35ijWSDlv18?autoplay=1&controls=0&showinfo=0&autohide=1">
      </iframe>
    </div> -->

    <p v-for="li in list" :key="li.id" :id="li.id" class="p-1 bg-white text-md absolute right-0" :style="[{
      right: `${li.right}px`,
      top: `${li.top}px`
    }, changeStyle]">
      {{ li.name }}
    </p>

    <Start v-if="!start" @childStartGame="() => startGame()" />
    <Score />
    <Life />

    <div class="fixed inset-x-0 bottom-0">
      <div class=" w-full h-20 p-3">
        <div class="flex items-center flex-row justify-between h-full gap-6">
          <PreviewType />
          <Setting @childOpenModalSetting="() => openModalSetting()" />
        </div>
      </div>
    </div>

    <Teleport to="body">
      <transition enter-from-class="transform opacity-0" enter-active-class="duration-300 ease-out"
        enter-to-class="opacity-100" leave-from-class="opacity-100" leave-active-class="duration-300 ease-in"
        leave-to-class="transform opacity-0 ">
        <template v-if="modalGameOver">
          <div class="fixed inset-0 bg-gray-900 opacity-50" aria-hidden="true"></div>
        </template>
      </transition>
      <transition enter-from-class="transform opacity-0 scale-75" enter-active-class="duration-300 ease-out"
        enter-to-class="opacity-100 scale-100" leave-from-class="opacity-100 scale-100"
        leave-active-class="duration-300 ease-in" leave-to-class="transform opacity-0 scale-75">
        <ModalGameOver v-if="modalGameOver" :scoreProp="score" class="lg:mt-0 md:mt-0 mt-12">
        </ModalGameOver>
      </transition>
    </Teleport>

    <Teleport to="body">
      <transition enter-from-class="transform opacity-0 scale-75" enter-active-class="duration-300 ease-out"
        enter-to-class="opacity-100 scale-100" leave-from-class="opacity-100 scale-100"
        leave-active-class="duration-300 ease-in" leave-to-class="transform opacity-0 scale-75">
        <keep-alive>

          <ModalSetting v-if="modalSettingButton" @childCloseModalSetting="() => closeModalSetting()"
            @childStartGame="() => startGame()">
          </ModalSetting>

        </keep-alive>

      </transition>
    </Teleport>
  </main>

</template>

<style>
input[type=range].custom-range {
  width: 100%;
  margin: -2.75px 0;
  background-color: transparent;
  -webkit-appearance: none;
}

input[type=range].custom-range:focus {
  outline: none;
}

input[type=range].custom-range::-webkit-slider-runnable-track {
  background: #0ea5e9;
  border: 0;
  border-radius: 23.9px;
  width: 100%;
  height: 24.5px;
  cursor: pointer;
}

input[type=range].custom-range::-webkit-slider-thumb {
  margin-top: 2.75px;
  width: 38px;
  height: 19px;
  background: #ffffff;
  border: 0.7px solid rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  cursor: pointer;
  -webkit-appearance: none;
}

input[type=range].custom-range:focus::-webkit-slider-runnable-track {
  background: #1fb0f2;
}

input[type=range].custom-range::-moz-range-track {
  background: #0ea5e9;
  border: 0;
  border-radius: 23.9px;
  width: 100%;
  height: 24.5px;
  cursor: pointer;
}

input[type=range].custom-range::-moz-range-thumb {
  width: 38px;
  height: 19px;
  background: #ffffff;
  border: 0.7px solid rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  cursor: pointer;
}

input[type=range].custom-range::-ms-track {
  background: transparent;
  border-color: transparent;
  border-width: 0.75px 0;
  color: transparent;
  width: 100%;
  height: 24.5px;
  cursor: pointer;
}

input[type=range].custom-range::-ms-fill-lower {
  background: #0d94d1;
  border: 0;
  border-radius: 47.8px;
}

input[type=range].custom-range::-ms-fill-upper {
  background: #0ea5e9;
  border: 0;
  border-radius: 47.8px;
}

input[type=range].custom-range::-ms-thumb {
  width: 38px;
  height: 19px;
  background: #ffffff;
  border: 0.7px solid rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  cursor: pointer;
  margin-top: 0px;
  /*Needed to keep the Edge thumb centred*/
}

input[type=range].custom-range:focus::-ms-fill-lower {
  background: #0ea5e9;
}

input[type=range].custom-range:focus::-ms-fill-upper {
  background: #1fb0f2;
}

/*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
how to remove the virtical space around the range input in IE*/
@supports (-ms-ime-align:auto) {

  /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
  input[type=range].custom-range {
    margin: 0;
    /*Edge starts the margin from the thumb, not the track as other browsers do*/
  }
}
</style>


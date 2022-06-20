<script setup>
import { ref, watch, inject, computed, watchEffect, provide, onMounted } from 'vue';
import { usePageLeave } from '@vueuse/core'
import ModalSetting from '../Setting/ModalSetting.vue'
import ModalGameOver from '../Game/ModalGameOver.vue'
import Type from '../Type/Index.vue'
import PreviewType from '../Game/PreviewType.vue'
import Setting from '../Game/Setting.vue'
import Life from '../Game/Life.vue'
import Start from '../Game/Start.vue'
import Score from '../Game/Score.vue'
import Text from '../Game/Text.vue'
import BgVue from '../Game/Bg.vue'
import YoutubeVue from '../Game/Youtube.vue'
import Timer from '../Game/Timer.vue'
import Total from '../Game/Total.vue';


const allWords = inject('allWordsProv')
const pass = inject('passProv')
const unPass = inject('unpassProv')
const list = inject('listProv')
const modalSettingButton = ref(false)
const modalGameOver = ref(false)
const life = inject('lifeProv')
const lose = inject('loseProv')
const start = inject('startProv')
const showTime = inject('showTimeProv')
const moveTime = inject('moveTimeProv')
const bgOrYtProv = inject('bgOrYtProv')
const ytIdProv = inject('ytIdProv')
const pauseProblemProv = inject('pauseProblemProv')
const loopProv = inject('loopProv')
const ytLinkProv = inject('ytLinkProv')
const player = ref(null)
const stateYt = ref(-1)
const ended = ref(false)
const nonrand = ref(0)
const typeText = inject('typeTextProv')
const hour = inject('hourProv');
const minute = inject('minuteProv');
const second = inject('secondProv');
const millisecond = inject('milliProv');
const stateTimer = ref();
const sound = inject('soundProv')

provide('playerProv', computed({
  get: () => player.value,
  set: (val) => {
    player.value = val
  }
}))

provide('endedProv', computed({
  get: () => ended.value,
  set: (val) => {
    ended.value = val
  }
}))

provide('stateYtProv', computed({
  get: () => stateYt.value,
  set: (val) => {
    stateYt.value = val
  }
}))

provide('modalGameOverProv', computed({
  get: () => modalGameOver.value,
  set: (val) => {
    modalGameOver.value = val
  }
}))


let rightPlus = async () => {

  if (!start.value) {
    return;
  }

  list.value.forEach((e) => {
    e.dir += 1

    if (pauseProblemProv.value.length > 0) {
      e.dir -= 1
      e.dir += 1
    }
  })

  if (start.value) {
    setTimeout(rightPlus, moveTime.value);
  }
}

let addWord = async () => {
  if (!start.value) {
    return;
  }

  var typeTxt

  if (allWords.value.length > list.value.length) {

    if (typeText.value == 0) {
      typeTxt = Math.floor(Math.random() * allWords.value.length)
    } else {
      typeTxt = nonrand.value++
    }

    let obj = allWords.value.find((o, index) => index === typeTxt);

    let objFind = list.value.find(o => o.name === obj.name);

    if (!objFind) {
      list.value.push(obj)
    }

    if (start.value) {
      setTimeout(addWord, showTime.value)
    }
  }


}

let startGame = () => {
  start.value = true

  addWord()
  rightPlus()
  startTimer()

  if (ytIdProv.value.length > 0) {
    player.value.player.play()
  }
}

let pauseGame = () => {
  start.value = false
  pauseProblemProv.value.push(1)
}

let openModalSetting = () => {
  modalSettingButton.value = !modalSettingButton.value
  pauseGame()
  pauseTimer()

  if (ytIdProv.value.length > 0) {
    player.value.player.pause()
  }
}

let closeModalSetting = () => {
  modalSettingButton.value = false
}

watchEffect(() => {
  list.value.forEach((e) => {
    const passId = pass.value.find(element => element == e.id);
    if (passId === undefined) {
      if (e.dir == window.innerWidth) {
        unPass.value.push(
          e.id
        )
      }
    }
  })

  unPass.value.forEach(e => {
    lose.value = unPass.value.length
  })
})

watchEffect(() => {
  const total = unPass.value.length + pass.value.length

  if (pass.value.length > 0) {
    if (total == allWords.value.length) {
      start.value = false
      modalGameOver.value = true
      lose.value = 0
      list.value = []
      pass.value = []
      unPass.value = []
      ytLinkProv.value = ''
      player.value.player.stop()
    }
  }
})

watch(
  () => lose.value,
  (count, prevCount) => {
    setTimeout(() => {
      if (life.value <= 1) {
        start.value = false
        modalGameOver.value = true
        lose.value = 0
        life.value = 0
        list.value = []
        pass.value = []
        unPass.value = []
        ytLinkProv.value = ''
        player.value.player.stop()
        pauseTimer()
      } else {
        life.value -= 1
      }
    }, 500);
  }
)


onMounted(() => {
  player.value.player.on('statechange', (event) => {
    stateYt.value = event.detail.code
  })

  var ameo = 0
  player.value.player.on('ended', () => {

    if (loopProv.value) {
      ameo++

      if (ameo >= ytIdProv.value.length) {
        ameo = 0
      }

      player.value.player.source = {
        type: 'video',
        sources: [
          {
            src: ytIdProv.value[ameo].src,
            provider: 'youtube',
          },
        ]
      }

      setTimeout(() => {
        player.value.player.play()

      }, 1000);
    }
  });
})

const plys = computed(() => {
  if (ytIdProv.value.length > 0) {
    return `https://www.youtube.com/embed/${ytIdProv.value[0].src}`
  } else {
    return `https://www.youtube.com/embed/`
  }
})

const options = computed(() => {
  const uu = {
    controls: [],
    loop: {
      active: false
    },
    youtube: {
      modestbranding: 0,
      rel: 1,
      showinfo: 0,
      controls: 0,
      fs: 0,
      enablejsapi: 1
    }
  }
  return uu
})

let startTimer = () => {
  pauseTimer();
  stateTimer.value = setInterval(() => { countDown() }, 10);
}

let pauseTimer = () => {
  clearInterval(stateTimer.value);
}

let countDown = () => {
  if ((millisecond.value += 10) == 1000) {
    millisecond.value = 0;
    second.value++;
  }
  if (second.value == 60) {
    second.value = 0;
    minute.value++;
  }
  if (minute.value == 60) {
    minute.value = 0;
    hour.value++
  }
}

const isLeft = usePageLeave();
watch(() => isLeft.value, () => {
  if (start.value) {
    if (isLeft.value) {
      openModalSetting()
    }

  }

})

const soundOnly = computed(() => {
  return sound.value ? 'hidden' : 'block'
})

</script>

<template>
  <main class="flex-1 w-full h-full mb-0 relative">
    <Type />
    <BgVue />
    <YoutubeVue v-show="!bgOrYtProv" :class="soundOnly">
      <template #vueplyr>
        <vue-plyr ref="player" :options="options">
          <div class="plyr__video-embed" style="position: fixed; width: 100%; height: 100%">
            <iframe width="100%" height="100%" :src="plys" title="YouTube video player" allowfullscreen
              allowtransparency mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
        </vue-plyr>
      </template>
    </YoutubeVue>

    <div class="relative" :class="!bgOrYtProv ? 'block' : 'hidden'">
      <div class=" fixed inset-0 z-10">
      </div>
    </div>

    <Text />
    <Start v-if="!start" @childStartGame="() => startGame()" />
    <Total />
    <Score />
    <Timer />
    <Life />
    <PreviewType />
    <Setting @childOpenModalSetting="() => openModalSetting()" />

    <Teleport to="body">
      <transition enter-from-class="transform opacity-0" enter-active-class="duration-300 ease-out"
        enter-to-class="opacity-100" leave-from-class="opacity-100" leave-active-class="duration-300 ease-in"
        leave-to-class="transform opacity-0 ">
        <template v-show="modalGameOver">
          <div class="fixed inset-0 bg-gray-900 opacity-50 z-20" aria-hidden="true"></div>
        </template>
      </transition>
      <transition enter-from-class="transform opacity-0 scale-75" enter-active-class="duration-300 ease-out"
        enter-to-class="opacity-100 scale-100" leave-from-class="opacity-100 scale-100"
        leave-active-class="duration-300 ease-in" leave-to-class="transform opacity-0 scale-75">
        <ModalGameOver v-if="modalGameOver" class="lg:mt-0 md:mt-0 mt-12 z-30">
        </ModalGameOver>
      </transition>
    </Teleport>

    <Teleport to="body">
      <transition enter-from-class="transform opacity-0 scale-75" enter-active-class="duration-300 ease-out"
        enter-to-class="opacity-100 scale-100" leave-from-class="opacity-100 scale-100"
        leave-active-class="duration-300 ease-in" leave-to-class="transform opacity-0 scale-75">
        <keep-alive>

          <ModalSetting class="z-50" v-show="modalSettingButton" @childCloseModalSetting="() => closeModalSetting()"
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


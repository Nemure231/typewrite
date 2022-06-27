<script setup>
import { ref, watch, inject, computed, watchEffect, provide, defineAsyncComponent } from 'vue';
import { usePageLeave } from '@vueuse/core'
import PreviewTypeView from '../Game/PreviewType.vue'
import SettingView from '../Game/Setting.vue'
import LifeView from '../Game/Life.vue'
import StartView from '../Game/Start.vue'
import ScoreView from '../Game/Score.vue'
import TextView from '../Game/Text.vue'
import TimerView from '../Game/Timer.vue'
import TotalView from '../Game/Total.vue'

const allWords = inject('allWordsProv')
const pass = inject('passProv')
const unPass = inject('unpassProv')
const list = inject('listProv')
const modalSettingButton = ref(false)
const modalGameOver = ref(false)
const life = inject('lifeProv')
const lose = inject('loseProv')
const start = inject('startProv')
const bg = inject('bgProv')
const showTime = inject('showTimeProv')
const moveTime = inject('moveTimeProv')
const bgOrYtProv = inject('bgOrYtProv')
const ytIdProv = inject('ytIdProv')
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
const isLeft = usePageLeave();
const stateMoveWord = ref()
const stateAddWord = ref()


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


let startMoveWord = () => {
  pauseMoveWord();

  if (start.value) {
    stateMoveWord.value = setInterval(() => { countMoveWord() }, moveTime.value);
  }
}

let pauseMoveWord = () => {
  clearInterval(stateMoveWord.value);
}

let countMoveWord = () => {
  list.value.forEach((e) => {
    e.dir += 1
  })
}


let startAddWord = () => {
  pauseAddWord();

  if (start.value) {
    stateAddWord.value = setInterval(() => { countAddWord() }, showTime.value);
  }
}

let pauseAddWord = () => {
  clearInterval(stateAddWord.value);
}

let countAddWord = () => {
  var typeTxt

  if (allWords.value.length > list.value.length) {

    if (typeText.value == 0) {
      typeTxt = Math.floor(Math.random() * allWords.value.length)
    } else {
      typeTxt = nonrand.value++
    }

    let obj = allWords.value.find((o, index) => index === typeTxt);

    let objPass = pass.value.find(o => o === obj.id);
    let objUnPass = unPass.value.find(o => o === obj.id);

    if (objPass === undefined) {
      if (objUnPass === undefined) {
        list.value.push(obj)
      }
    }
  }
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


let startGame = () => {
  start.value = true

  startMoveWord()
  startAddWord()
  startTimer()

  if (ytIdProv.value.length > 0) {
    player.value.player.play()
  }
}

let pauseGame = () => {
  start.value = false
  pauseMoveWord()
  pauseAddWord()
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


let startTimer = () => {
  pauseTimer();
  stateTimer.value = setInterval(() => { countDown() }, 10);
}

let pauseTimer = () => {
  clearInterval(stateTimer.value);
}

watchEffect(() => {
  if (!bgOrYtProv.value) {
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
  }
})


watchEffect(() => {
  list.value.forEach((e) => {
    const passId = pass.value.find(element => element == e.id);
    if (passId === undefined) {
      if (e.dir == window.innerWidth) {
        unPass.value.push(e.id)

        const isIndex = (element) => element.id == e.id
        const bb = list.value.findIndex(isIndex)
        list.value.splice(bb, 1)
      }
    }
  })

  unPass.value.forEach(e => {
    lose.value = unPass.value.length
  })

})

//win
watchEffect(() => {
  const total = unPass.value.length + pass.value.length
  setTimeout(() => {
    if (pass.value.length > 0) {
      if (total == allWords.value.length) {
        modalGameOver.value = true
        start.value = false
        lose.value = 0
        list.value = []
        nonrand.value = 0
        pauseAddWord()
        pauseMoveWord()
        pauseTimer()
        ytLinkProv.value = ''

        if (!bgOrYtProv.value) {
          player.value.player.stop()
        }
      }
    }
  }, 1000);

})

//lose
watch(
  () => lose.value,
  (count, prevCount) => {
    setTimeout(() => {
      if (life.value <= 1) {
        start.value = false
        modalGameOver.value = true
        lose.value = 0
        life.value = 0
        nonrand.value = 0
        list.value = []
        ytLinkProv.value = ''
        pauseAddWord()
        pauseMoveWord()
        pauseTimer()
        if (!bgOrYtProv.value) {
          player.value.player.stop()
        }
      } else {
        life.value -= 1
      }
    }, 500);
  }
)


const plys = computed(() => {
  if (ytIdProv.value.length > 0) {
    return `https://www.youtube.com/embed/${ytIdProv.value[0].src}`
  } else {
    return `https://www.youtube.com/embed/`
  }
})


watch(() => isLeft.value, () => {
  if (start.value) {
    if (isLeft.value) {
      openModalSetting()
    }
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


const soundOnly = computed(() => {
  return sound.value ? 'hidden' : 'block'
})


const isModalSetting = computed(() => {
  if (modalSettingButton.value) {
    return defineAsyncComponent(() => import('../Setting/ModalSetting.vue'))
  }
})

const isModalGameOver = computed(() => {
  const total = unPass.value.length + pass.value.length
  if (!start.value) {
    if (life.value == 0 || total == allWords.value.length) {
      return defineAsyncComponent(() => import('../Game/ModalGameOver.vue'))
    }
  }
})


const isYoutube = computed(() => {
  if (!bgOrYtProv.value) {
    return defineAsyncComponent(() => import('../Game/Youtube.vue'))
  }
})

const img = computed(() => {
  if (!bgOrYtProv.value) {

    if (sound.value) {
      return true
    } else {
      return false
    }
  } else {
    return true
  }
})

const isBg = computed(() => {
  if (bg.value.length > 1) {
    return defineAsyncComponent(() => import('../Game/BgSlide.vue'))
  } else {
    return defineAsyncComponent(() => import('../Game/BgOne.vue'))
  }
})

const isType = computed(() => {
  if (start.value) {
    return defineAsyncComponent(() => import('../Type/Index.vue'))
  }
})
</script>

<template>
  <main class="flex-1 w-full h-full mb-0 relative">
    <component :is="isType" v-show="img"></component>
    <KeepAlive>
      <component :is="isBg" v-show="img"></component>
    </KeepAlive>
    <KeepAlive>
      <component :is="isYoutube" :class="soundOnly">
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
      </component>
    </KeepAlive>

    <div class="relative" :class="!bgOrYtProv ? 'block' : 'hidden'">
      <div class=" fixed inset-0 z-10">
      </div>
    </div>

    <TextView />
    <template v-if="allWords.length != 0">
      <StartView v-if="!start" @childStartGame="() => startGame()" />
    </template>
    <TotalView />
    <ScoreView />
    <TimerView />
    <LifeView />
    <PreviewTypeView />
    <SettingView @childOpenModalSetting="() => openModalSetting()" />

    <Teleport to="body">
      <transition enter-from-class="transform opacity-0 scale-75" enter-active-class="duration-300 ease-out"
        enter-to-class="opacity-100 scale-100" leave-from-class="opacity-100 scale-100"
        leave-active-class="duration-300 ease-in" leave-to-class="transform opacity-0 scale-75">
        <component :is="isModalGameOver" v-if="modalGameOver" class="lg:mt-0 md:mt-0 mt-12 z-30">
        </component>
      </transition>
    </Teleport>

    <Teleport to="body">
      <transition enter-from-class="transform opacity-0 scale-75" enter-active-class="duration-300 ease-out"
        enter-to-class="opacity-100 scale-100" leave-from-class="opacity-100 scale-100"
        leave-active-class="duration-300 ease-in" leave-to-class="transform opacity-0 scale-75">
        <KeepAlive>
          <component :is="isModalSetting" class="z-50" v-show="modalSettingButton"
            @childCloseModalSetting="() => closeModalSetting()" @childStartGame="() => startGame()">
          </component>
        </KeepAlive>
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


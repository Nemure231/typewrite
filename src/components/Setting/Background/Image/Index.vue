
<script setup>
import { ref, inject, watchEffect, computed, provide, watch } from 'vue'
import { useOnline } from '@vueuse/core'
import DropZone from '../DropZone.vue'
import draggable from "vuedraggable";
import useFileList from '../../../../compositions/file-list'
import Timer from './Timer.vue';
import Button from './Button.vue';


const { files, addFiles } = useFileList()
const online = useOnline()
const bgRef = ref();
const bgProv = inject('bgProv')
const countTimerProv = inject('countTimerProv')
const bgTime = ref(1000)
const dragging = ref(false)
const enabled = ref(true)
const urlImg = ref('')

const currentPop = ref(0)
const bgRepeat = ref(bgProv.value)
const bgRepeatOption = ref([
	{
		id: 1,
		name: 'no-repeat',
	},
	{
		id: 2,
		name: 'repeat'
	},
	{
		id: 3,
		name: 'repeat-x'
	},
	{
		id: 4,
		name: 'repeat-y'
	},
	{
		id: 5,
		name: 'round'
	},
	{
		id: 6,
		name: 'space'
	}
])

const bgSize = ref(bgProv.value)
const bgSizeOption = ref([
	{
		id: 1,
		name: 'cover',
	},
	{
		id: 2,
		name: 'auto'
	},
	{
		id: 3,
		name: 'contain'
	}
])

const bgColor = ref(bgProv.value)


const bgPosition = ref(bgProv.value)
const bgPositionOption = ref([
	{
		id: 1,
		name: 'center',
	},
	{
		id: 2,
		name: 'top',
	},
	{
		id: 3,
		name: 'bottom'
	},
	{
		id: 4,
		name: 'left'
	},
	{
		id: 5,
		name: 'left-top'
	},
	{
		id: 6,
		name: 'left-bottom'
	},
	{
		id: 7,
		name: 'right'
	},
	{
		id: 8,
		name: 'right-top'
	},
	{
		id: 9,
		name: 'right-bottom'
	},
])


provide('bgTimeProv', computed({
	get: () => bgTime.value,
	set: (val) => {
		bgTime.value = val
	}
}))


let clickBg = () => {
	if (urlImg.value) {
		if (online.value) {
			const checkUrlType = checkUrlImg(urlImg.value);
			if (checkUrlType === true) {
				bgProv.value.push({
					id: Date.now(),
					url: urlImg.value,
					size: 'cover',
					repeat: 'no-repeat',
					color: '#FFFFFF',
					position: 'center'

				})
				urlImg.value = ''

			} else {
				alert('The url only accept https protocol, and with .jpg, .jpeg, .png, and svg. extension in the end of url!')
			}
		}
	} else {
		bgRef.value.click()
	}
}

let removeOneBg = (id) => {
	const idd = bgProv.value.findIndex((el) => el.id == id)

	bgProv.value.splice(idd, 1);
}

const stateBgTimer = ref()

let startTimerBg = () => {
	pauseTimerBg();
	stateBgTimer.value = setInterval(() => { countTimerBg() }, bgTime.value);
}

let pauseTimerBg = () => {
	clearInterval(stateBgTimer.value);
}

let countTimerBg = () => {
	countTimerProv.value++

	if (countTimerProv.value >= bgProv.value.length) {
		countTimerProv.value = 0
	}
}

let chooseBg = (e) => {
	addFiles(e.target.files)
	e.target.value = null
}

let checkMove = (e) => {
	window.console.log("Future index: " + e.draggedContext.futureIndex);
}

let checkUrlImg = (url) => {
	if (url.match(/^https:?:\/\/.+\/.+$/) && url.match(/\.(jpeg|jpg|png|gif|svg)$/) !== null) {
		return true
	} else {
		return false
	}
}

watchEffect(() => {
	if (files.value.length) {
		for (let idx = 0; idx < files.value.length; idx++) {
			bgProv.value.push(files.value[idx])
		}

		setTimeout(() => {
			files.value = []
		}, 1000);

	}
})

let openBgSetting = (index) => {
	if (currentPop.value !== 0) {
		currentPop.value = (currentPop.value == index) ? 0 : index;
	} else {
		currentPop.value = index;
	}
}


watch(() => bgRepeat.value, (newval, oldval) => {
	const el = bgProv.value.find(element => element.id == currentPop.value);
	const bgrep = bgRepeatOption.value.find(element => element.id == newval);
	const isIndex = (element) => element.id == currentPop.value
	const index = bgProv.value.findIndex(isIndex)

	bgProv.value.splice(index, 1, {
		id: el.id,
		url: el.url,
		size: el.size,
		repeat: bgrep.name,
		color: el.color,
		position: el.position
	})
})


watch(() => bgSize.value, (newval, oldval) => {

	const el = bgProv.value.find(element => element.id == currentPop.value)
	const bgsiz = bgSizeOption.value.find(element => element.id == newval)
	const isIndex = (element) => element.id == currentPop.value
	const index = bgProv.value.findIndex(isIndex)

	bgProv.value.splice(index, 1, {
		id: el.id,
		url: el.url,
		size: bgsiz.name,
		repeat: el.repeat,
		color: el.color,
		position: el.position

	})
})

watch(() => bgPosition.value, (newval, oldval) => {
	const el = bgProv.value.find(element => element.id == currentPop.value)
	const bgPos = bgPositionOption.value.find(element => element.id == newval)
	const isIndex = (element) => element.id == currentPop.value
	const index = bgProv.value.findIndex(isIndex)

	bgProv.value.splice(index, 1, {
		id: el.id,
		url: el.url,
		size: el.size,
		repeat: el.repeat,
		color: el.color,
		position: bgPos

	})
})

watch(() => bgColor.value, (newval, oldval) => {
	const el = bgProv.value.find(element => element.id == currentPop.value);
	const isIndex = (element) => element.id == currentPop.value
	const index = bgProv.value.findIndex(isIndex)

	bgProv.value.splice(index, 1, {
		id: el.id,
		url: el.url,
		size: el.size,
		repeat: el.repeat,
		color: newval,
		position: el.position
	})
})

const isOnlineInput = computed(() => online.value ? 'right-1 absolute' : 'relative')

</script>


<template>
	<div class="flex-1">
		<div class="flex flex-col justify-start gap-4">
			<div class="flex-1">
				<div class="flex flex-col flex-wrap gap-6">
					<div class="flex-1 mt-6">
						<DropZone class="drop-area" @files-dropped="addFiles" #default="{ dropZoneActive }">

							<div class="border-dashed border-4 mb-2 border-sky-500 w-full h-36 rounded-lg">
								<div
									class="flex flex-col h-full items-center justify-center bg-cover bg-center rounded-lg">
									<div class="flex items-center relative">
										<input v-if="online" v-model="urlImg" :disabled="!online && true"
											:readonly="!online && true"
											class="relative border w-96 font-normal border-sky-500 rounded-md pl-3 pr-[5.5rem] lg:py-3 md:py-3 py-3 focus:outline-none"
											type="url" placeholder="Link/Local Image ....">

										<button :class="isOnlineInput"
											class=" inline-flex justify-center items-center font-semibold px-6 py-2 text-white  rounded-md bg-sky-500"
											@click="clickBg()">
											<span class="pr-3" v-if="!online">
												Choose Image

											</span>
											<input class="hidden" type="file" ref="file" id="img-target"
												@change="loadImage($event)" accept="image/*">
											<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
												preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
												<g fill="none">
													<path fill="#ffffff"
														d="M44 24a2 2 0 1 0-4 0h4ZM24 8a2 2 0 1 0 0-4v4Zm15 32H9v4h30v-4ZM8 39V9H4v30h4Zm32-15v15h4V24h-4ZM9 8h15V4H9v4Zm0 32a1 1 0 0 1-1-1H4a5 5 0 0 0 5 5v-4Zm30 4a5 5 0 0 0 5-5h-4a1 1 0 0 1-1 1v4ZM8 9a1 1 0 0 1 1-1V4a5 5 0 0 0-5 5h4Z">
													</path>
													<path stroke="currentColor" stroke-linecap="round"
														stroke-linejoin="round" stroke-width="4"
														d="m6 35l10.693-9.802a2 2 0 0 1 2.653-.044L32 36m-4-5l4.773-4.773a2 2 0 0 1 2.615-.186L42 31M30 12h12m-6-6v12">
													</path>
												</g>
											</svg>
										</button>
									</div>

								</div>
							</div>

							<div for="file-input" class="font-normal">
								<template v-if="dropZoneActive">
									<span>Drop Them Here</span>
									<span> to add.</span>
								</template>
								<template v-else>
									<span>Drag Your Images </span>
									<span>
										or click<strong> Image Icon</strong>.
									</span>
								</template>
								<input class="hidden" type="file" ref="bgRef" multiple @change="chooseBg($event)"
									accept="image/*">
							</div>
						</DropZone>
					</div>
					<template v-if="bgProv.length > 0">
						<Timer @childStartTimerBg="() => startTimerBg()" />
						<Button @childStartTimerBg="() => startTimerBg()" @childPauseTimerBg="() => pauseTimerBg()" />
					</template>
				</div>
			</div>
			<div class="flex-1 mb-6">
				<draggable :list="bgProv" :disabled="!enabled" item-key="id" class="grid grid-cols-2 gap-6"
					ghost-class="ghost" :move="checkMove" @start="dragging = true" @end="dragging = false">
					<template #item="{ element, index }">
						<div class="relative cursor-move">
							<div class="absolute right-0 z-40">
								<div @click="removeOneBg(element.id)"
									class="cursor-pointer hover:bg-red-100 rounded-tr-xl">
									<svg class=" w-6 h-6" xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
										preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
										<path fill="#bb3535"
											d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z">
										</path>
									</svg>
								</div>

							</div>
							<div class="absolute left-0 z-40">
								<div @click="openBgSetting(element.id)" class="cursor-pointer rounded-tr-xl">

									<svg class=" w-6 h-6 relative z-40" xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
										preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
										<mask id="IconifyId1818f46953ad89b2e2326">
											<g fill="none" stroke-linejoin="round" stroke-width="4">
												<path fill="#fff" stroke="#fff"
													d="M36.686 15.171a15.37 15.37 0 0 1 2.529 6.102H44v5.454h-4.785a15.37 15.37 0 0 1-2.529 6.102l3.385 3.385l-3.857 3.857l-3.385-3.385a15.37 15.37 0 0 1-6.102 2.529V44h-5.454v-4.785a15.37 15.37 0 0 1-6.102-2.529l-3.385 3.385l-3.857-3.857l3.385-3.385a15.37 15.37 0 0 1-2.529-6.102H4v-5.454h4.785a15.37 15.37 0 0 1 2.529-6.102l-3.385-3.385l3.857-3.857l3.385 3.385a15.37 15.37 0 0 1 6.102-2.529V4h5.454v4.785a15.37 15.37 0 0 1 6.102 2.529l3.385-3.385l3.857 3.857l-3.385 3.385Z">
												</path>
												<path fill="#000" stroke="#000"
													d="M24 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></path>
											</g>
										</mask>
										<path fill="#0ea5e9" d="M0 0h48v48H0z"
											mask="url(#IconifyId1818f46953ad89b2e2326)"></path>
									</svg>
								</div>

							</div>
							<div class="absolute w-[15.9rem] inset-0 z-20 backdrop-blur-sm bg-white/25 rounded-xl"
								v-show="currentPop === element.id">
								<div class="cursor-pointer relative rounded-tr-xl">
									<div class="absolute inset-0 z-10">
										<div class="rounded-md px-3 py-6 h-auto">
											<div class="flex flex-row flex-wrap justify-start">
												<div class="basis-1/2 px-1">
													<label class="block text-sm font-semibold" for="">Size</label>
													<select v-model="bgSize[index].size"
														class="cursor-pointer font-normal w-full rounded-md py-1 px-2 text-xs"
														name="" id="">
														<option v-for="bs in bgSizeOption" :key="bs.id"
															class="py-1 px-2" :value="bs.name">
															{{ bs.name }}
														</option>
													</select>
												</div>
												<div class="basis-1/2 px-1">
													<label class="block text-sm font-semibold" for="">Position</label>
													<select v-model="bgSize[index].position"
														class="cursor-pointer font-normal w-full rounded-md py-1 px-2 text-xs"
														name="" id="">
														<option v-for="bp in bgPositionOption" :key="bp.id"
															class="py-1 px-2" :value="bp.name">
															{{ bp.name }}
														</option>
													</select>
												</div>
												<div class="basis-1/2 px-1 pt-2">
													<label class="block text-sm font-semibold" for="">Repeat</label>
													<select v-model="bgSize[index].repeat"
														class="cursor-pointer font-normal w-full rounded-md py-1 px-2 text-xs"
														name="" id="">
														<option v-for="br in bgRepeatOption" :key="br.id"
															class="py-1 px-2" :value="br.name">
															{{ br.name }}
														</option>
													</select>

												</div>
												<div class="basis-1/2 px-1 pt-2">
													<label class="block text-sm font-semibold" for="">Color</label>
													<input v-model="bgSize[index].color" class="cursor-pointer w-full"
														type="color" name="" id="">
												</div>


											</div>

										</div>

									</div>
								</div>


							</div>
							<div class="w-67 rounded-xl shadow-md h-40 bg-cover bg-center" :style="{
								backgroundImage: `url(${element.url})`,
							}">
							</div>
						</div>
					</template>
				</draggable>
			</div>
		</div>
	</div>
</template>

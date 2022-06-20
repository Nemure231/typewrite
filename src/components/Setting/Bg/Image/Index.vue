
<script setup>
import { ref, inject, defineComponent, watchEffect, computed, provide } from 'vue'
import DropZone from '../DropZone.vue'
import draggable from "vuedraggable";
import useFileList from '../../../../compositions/file-list'
import Timer from './Timer.vue';
import Button from './Button.vue';

const { files, addFiles } = useFileList()

defineComponent({ DropZone, draggable })

const bgRef = ref();
const bgProv = inject('bgProv')
const countTimerProv = inject('countTimerProv')
const bgTime = ref(1000)
const loopBg = ref(false)
const dragging = ref(false)
const enabled = ref(true)


provide('bgTimeProv', computed({
	get: () => bgTime.value,
	set: (val) => {
		bgTime.value = val
	}
}))

provide('loopBgProv', computed({
	get: () => loopBg.value,
	set: (val) => {
		loopBg.value = val
	}
}))

const urlImg = ref('')


let clickBg = () => {

	if (urlImg.value) {
		const checkUrlType = checkUrlImg(urlImg.value);
		if (checkUrlType === true) {
			bgProv.value.push({
				id: new Date(),
				url: urlImg.value
			})
		} else {
			alert('The url only accept https protocol, and with .jpg, .jpeg, .png, and svg. extension in the end of url!')
		}
	} else {
		bgRef.value.click()
	}
}

let removeOneBg = (id) => {
	const idd = bgProv.value.findIndex((el) => el.id == id)

	bgProv.value.splice(idd, 1);
}

let timerBg = async () => {
	if (!loopBg.value) {
		return;
	}

	countTimerProv.value++
	if (countTimerProv.value >= bgProv.value.length) {
		countTimerProv.value = 0
	}
	if (loopBg.value) {
		setTimeout(timerBg, bgTime.value);
	}
}


let chooseBg = (e) => {
	addFiles(e.target.files)
	e.target.value = null
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
</script>

<template>
	<div class="flex-1">
		<div class="flex flex-col justify-start gap-4">
			<div class="flex-1">
				<div class="flex flex-col flex-wrap gap-6">
					<div class="flex-1 mt-6">
						<DropZone class="drop-area" @files-dropped="addFiles" #default="{ dropZoneActive }">

							<div class="border-dashed border-4 mb-2 border-sky-500 w-full h-36 rounded-lg">
								<div class="flex h-full items-center justify-center bg-cover bg-center rounded-lg">
									<div class="flex items-center relative">
										<input v-model="urlImg"
											class="relative border w-96 font-normal border-sky-500 rounded-md pl-3 pr-[5.5rem] lg:py-3 md:py-3 py-3 focus:outline-none"
											type="url" placeholder="Link/Local Image ....">

										<button
											class="absolute inline-flex justify-center items-center  right-1 font-semibold px-6 py-2 text-white  rounded-md bg-sky-500"
											@click="clickBg()">
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
									<span>to add.</span>
								</template>
								<template v-else>
									<span>Drag Your Images </span>
									<span>
										or click<strong> Choose Images</strong>.
									</span>
								</template>
								<input class="hidden" type="file" ref="bgRef" multiple @change="chooseBg($event)"
									accept="image/*">
							</div>
						</DropZone>
					</div>
					<template v-if="bgProv.length > 0">
						<Timer @childTimerBg="() => timerBg()" />
						<Button @childTimerBg="() => timerBg()" />
					</template>
				</div>
			</div>
			<div class="flex-1 mb-6">
				<draggable :list="bgProv" :disabled="!enabled" item-key="id" class="grid grid-cols-2 gap-6"
					ghost-class="ghost" :move="checkMove" @start="dragging = true" @end="dragging = false">
					<template #item="{ element }">
						<div class="relative cursor-move">
							<div class="absolute right-0">
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
							<img class="w-64 rounded-xl shadow-md h-36 object-cover object-center" :src="element.url"
								alt="">
						</div>
					</template>
				</draggable>
			</div>
		</div>
	</div>
</template>

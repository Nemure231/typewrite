<script setup>
import { inject, watchEffect } from 'vue'

const ytIdProv = inject('ytIdProv')
const loopProv = inject('loopProv')
const player = inject('playerProv')
const mute = inject('muteProv')
const sound = inject('soundProv')


let useYtBg = () => {
	player.value.player.source = {
		type: 'video',
		sources: [
			{
				src: ytIdProv.value[0].src,
				provider: 'youtube',
			},
		],
	};
}

watchEffect(() => {
	player.value.player.muted = mute.value
})


</script>

<template>
	<div class="flex flex-row flex-nowrap items-center justify-between gap-4 mb-3">
		<div class="flex-1">
			<div class="flex flex-row flex-nowrap gap-6">

				<div class="flex items-center gap-2">
					<label for="loop-toggle" class="inline-flex relative items-center cursor-pointer">
						<input type="checkbox" v-model="loopProv" id="loop-toggle" class="sr-only peer">
						<div
							class="w-11 h-6 bg-sky-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-500">
						</div>
					</label>
					<div class="">
						<span class="text-sm font-medium text-gray-900">Loop?</span>
					</div>
				</div>
				<div class="flex items-center gap-2">
					<label for="mute-toggle" class="inline-flex relative items-center cursor-pointer">
						<input type="checkbox" v-model="mute" id="mute-toggle" class="sr-only peer">
						<div
							class="w-11 h-6 bg-sky-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-500">
						</div>
					</label>
					<div class="">
						<span class="text-sm font-medium text-gray-900">Mute?</span>
					</div>
				</div>
				<div class="flex items-center gap-2">
					<label for="sound-toggle" class="inline-flex relative items-center cursor-pointer">
						<input type="checkbox" v-model="sound" id="sound-toggle" class="sr-only peer">
						<div
							class="w-11 h-6 bg-sky-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-500">
						</div>
					</label>
					<div class="">
						<span class="text-sm font-medium text-gray-900">Sound only?</span>
					</div>
				</div>
			</div>

		</div>

		<div class="flex-none">
			<button @click="useYtBg()" class="bg-sky-500 text-white font-semibold px-6 py-1 rounded-md">
				Use
			</button>
		</div>
	</div>

</template>

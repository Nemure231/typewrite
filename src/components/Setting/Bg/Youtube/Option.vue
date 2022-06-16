<script setup>
import { inject } from 'vue'

const ytIdProv = inject('ytIdProv')
const loopProv = inject('loopProv')
const player = inject('playerProv')


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


</script>

<template>
	<div class="flex flex-row flex-nowrap items-center justify-between gap-4 mb-3">

		<div class="flex items-center gap-2">
			<label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
				<input type="checkbox" v-model="loopProv" id="default-toggle" class="sr-only peer">
				<div
					class="w-11 h-6 bg-sky-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-500">
				</div>
			</label>
			<div class="">
				<span class="text-sm font-medium text-gray-900">Loop?</span>
			</div>
		</div>

		<div>
			<button @click="useYtBg()" class="bg-sky-500 text-white font-semibold px-6 py-1 rounded-md">
				Use
			</button>
		</div>
	</div>

</template>

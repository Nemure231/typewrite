
<script setup>
import { inject, ref } from 'vue'

const swipr = inject('swiperProv');
const startSwiper = ref(true)

const swiperEffect = inject('swiperEffectProv')


let startStop = () => {
	startSwiper.value = !startSwiper.value

	if (startSwiper.value) {
		swipr.value.autoplay.start()
	} else {
		swipr.value.autoplay.stop()
	}
}

const listEffect = ref([
	{
		id: 1,
		name: 'fade'
	},
	{
		id: 2,
		name: 'coverflow'
	},

	{
		id: 3,
		name: 'flip',
	},
	{
		id: 4,
		name: 'cube'
	},
	{
		id: 5,
		name: 'card'
	}
])
</script>

<template>
	<div class="flex-1">
		<div class="flex flex-row justify-center items-center gap-6">
			<div class="relative flex-1">

				<button @click="startStop()" :class="startSwiper ? 'bg-sky-500 text-white' : 'bg-white text-sky-500'"
					class="font-semibold w-full text-lg py-2 px-4 rounded-3xl">
					{{ startSwiper ? 'Stop' : 'Start' }}
				</button>
			</div>
			<div class="relative flex-1 ">
				<select v-model="swiperEffect"
					class="font-semibold w-full capitalize text-center focus:outline-none  text-lg appearance-none relative  text-white py-2.5 px-4 bg-sky-500 rounded-3xl">
					<option class="text-sky-500 bg-white" v-for="le in listEffect" :key="le.id" :value="le.name">
						{{ le.name }}
					</option>
				</select>
				<div class="absolute text-white right-2 top-2">
					<svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<polyline points="6 9 12 15 18 9"></polyline>
					</svg>
				</div>

			</div>
		</div>
	</div>

</template>

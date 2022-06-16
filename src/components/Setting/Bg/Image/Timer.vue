
<script setup>
import { inject, computed, defineEmits } from 'vue'

const bgTime = inject('bgTimeProv')

const emit = defineEmits(["childTimerBg"]);

let timerBg = () => {
    emit("childTimerBg")

}

let convertMillis = computed(() => {
	const minutes = Math.floor((bgTime.value / 1000 / 60) % 60);
	const seconds = Math.floor((bgTime.value / 1000) % 60);

	const formattedTime = [
		minutes.toString().padStart(2, "0"),
		seconds.toString().padStart(2, "0")
	].join(":");

	return formattedTime
})

</script>

<template>

	<div class="flex-1">
		<span class="text-2xl font-bold block mb-4">Timer</span>
		<label class="inline font-semibold" for="">Show / </label>
		<small class="inline text-sm font-medium" v-text="convertMillis"> </small>
		<input type="range" @change="timerBg()" class="custom-range mt-4" v-model="bgTime" min="1000" step="1000"
			max="1000000" name="" id="">
	</div>

</template>

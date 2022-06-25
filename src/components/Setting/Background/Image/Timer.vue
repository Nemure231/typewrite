
<script setup>
import { inject, computed, defineEmits, watchEffect } from 'vue'

const bgTime = inject('bgTimeProv')
const bg = inject('bgProv')

const emit = defineEmits(["childStartTimerBg"]);

let start = () => {
    emit("childStartTimerBg")

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


watchEffect(() => {
	if(bg.value.length > 1){
		start()
	}
})
</script>

<template>

	<div class="flex-1">
		<span class="text-2xl font-bold block mb-4">Timer</span>
		<label class="inline font-semibold" for="">Show / </label>
		<small class="inline text-sm font-medium" v-text="convertMillis"> </small>
		<input @change="start()" type="range" class="custom-range mt-4" v-model="bgTime" min="1000" step="1000"
			max="1000000" name="" id="">
	</div>

</template>

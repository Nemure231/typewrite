
<script setup>
import { defineEmits, inject } from 'vue'

const loopBg = inject('loopBgProv')

const emit = defineEmits(["childTimerBg"]);

let timerBg = () => {
    emit("childTimerBg")

}

let startBg = () => {
	loopBg.value = true
	timerBg()
}

let stopBg = () => {
	loopBg.value = false
}

</script>

<template>
	<div class="flex-1">
		<div class="flex flex-row justify-center items-center gap-8">
			<button @click="startBg()"
				class="font-semibold flex-1 text-lg text-white py-2 px-4 bg-sky-500 rounded-3xl">start</button>
			<button @click="stopBg()"
				class="font-semibold flex-1 text-lg text-white py-2 px-4 bg-sky-500 rounded-3xl">stop</button>
		</div>
	</div>

</template>

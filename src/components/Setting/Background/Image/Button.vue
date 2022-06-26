
<script setup>
import { defineEmits, inject} from 'vue'

const emit = defineEmits(["childStartTimerBg", "childPauseTimerBg"]);

const startBgTimer = inject('startBgTimerProv')

let start = () => {
    emit("childStartTimerBg")
}

let pause = () => {
    emit("childPauseTimerBg")
}

let startBg = () => {
	start()
	startBgTimer.value = true
}

let stopBg = () => {
	pause()
	startBgTimer.value = false
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

<script setup>
import {inject } from 'vue'

const ytLinkProv = inject('ytLinkProv')
const ytIdProv = inject('ytIdProv')


let addBgYt = () => {

	const checkUrlType = checkUrlImg(ytLinkProv.value);

	if (checkUrlType === true) {
		const link = ytLinkProv.value.split('/')


		if (link[2] != 'www.youtube.com' && link[2] != 'youtube.com' && link[2] != 'youtu.be') {
			alert(`The domain isn't from youtube!`)
		} else {
			const idLink = link[3].replace('watch?v=', '')
			// const idPlaylist = link[3].replace('playlist?list=', '')

			ytIdProv.value.push({
				id: new Date(),
				src: idLink,
				provider: 'youtube',
			})

			ytLinkProv.value = ''
		}

	} else {
		alert('The url only accept https protocol!')
	}
}


let checkUrlImg = (url) => {
	if (url.match(/^https:?:\/\/.+\/.+$/) !== null) {
		return true
	} else {
		return false
	}
}




</script>

<template>
	<div class="relative mt-2">
		<input v-model.trim="ytLinkProv"
			class="py-2.5 pl-4 pr-24 focus:outline-none w-full font-normal border-2 border-sky-500 rounded-lg" type="url" />

		<button type="submit" @click="addBgYt()"
			class="absolute top-1 right-1 py-2 px-4 bg-sky-500 text-white font-semibold rounded-lg">
			Submit
		</button>
	</div>
</template>

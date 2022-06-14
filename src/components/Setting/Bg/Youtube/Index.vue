
<script setup>
import { ref, inject, defineComponent} from 'vue'
import DropZone from '../DropZone.vue'
import draggable from "vuedraggable";


defineComponent({ DropZone, draggable })


const bgProv = inject('bgProv')
const countTimerProv = inject('countTimerProv')
const ytLinkProv = inject('ytLinkProv')
const ytIdProv = inject('ytIdProv')
const loopProv = inject('loopProv')
const bgTime = ref(1000)
const loopBg = ref(false)
const dragging = ref(false)
const enabled = ref(true)
const player = inject('playerProv')


let removeOneYt = (id) => {
    const idd = ytIdProv.value.findIndex((el) => el.id == id)

    ytIdProv.value.splice(idd, 1);
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

let checkMove = (e) => {
    window.console.log("Future index: " + e.draggedContext.futureIndex);
}

let addBgYt = () => {

    const checkUrlType = checkUrlImg(ytLinkProv.value);

    if (checkUrlType === true) {
        const link = ytLinkProv.value.split('/')

        console.log(link)

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
	<div class="flex-1">
		<div class="flex flex-col justify-start mt-6 space-y-3">
			<div class="flex-1">
				<label for="exmaple" class="block">Example:</label>
				<div class="inline font-light bg-sky-100 w-max rounded-lg py-1 px-2 mb-2 text-xs">
					https://youtu.be/beqCLV4-_jo
				</div>
				<small class="inline mx-2">Or</small>
				<div class="inline font-light bg-sky-100 w-max rounded-lg py-1 px-2 mb-2 text-xs">
					https://www.youtube.com/watch?v=-rfFIiHKrG0
				</div>
				<div class="relative mt-2">
					<input v-model="ytLinkProv"
						class="py-2.5 pl-4 pr-24 focus:outline-none w-full border-2 border-sky-500 rounded-lg"
						type="url" />

					<button type="submit" @click="addBgYt()"
						class="absolute top-1 right-1 py-2 px-4 bg-sky-500 text-white font-semibold rounded-lg">
						Submit
					</button>
				</div>

			</div>
			<div class="flex-1">

				<div class="flex flex-row flex-nowrap items-center justify-between gap-4 mb-3">
					<template v-if="ytIdProv.length > 0">

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
					</template>
				</div>
				<draggable :list="ytIdProv" :disabled="!enabled" item-key="id" class="grid grid-cols-2 gap-6"
					ghost-class="ghost" :move="checkMove" @start="dragging = true" @end="dragging = false">
					<template #item="{ element }">
						<div class="relative cursor-move">
							<div class="absolute -right-1 z-10">
								<div @click="removeOneYt(element.id)"
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
							<div class="">
								<div class="absolute inset-0 rounded-xl">
								</div>
								<iframe width="256" height="144" class="aspect-video rounded-xl"
									:src="`https://www.youtube.com/embed/${element.src}`" title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen></iframe>

							</div>
						</div>
					</template>
				</draggable>


			</div>

		</div>



	</div>
</template>

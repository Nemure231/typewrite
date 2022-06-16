
<script setup>
import { ref, inject, defineComponent} from 'vue'
import DropZone from '../DropZone.vue'
import draggable from "vuedraggable";
import Example from './Example.vue';
import Form from './Form.vue';
import OptionVue from './Option.vue';


defineComponent({ DropZone, draggable })

const ytIdProv = inject('ytIdProv')
const dragging = ref(false)
const enabled = ref(true)


let removeOneYt = (id) => {
    const idd = ytIdProv.value.findIndex((el) => el.id == id)

    ytIdProv.value.splice(idd, 1);
}

let checkMove = (e) => {
    window.console.log("Future index: " + e.draggedContext.futureIndex);
}



</script>

<template>
	<div class="flex-1">
		<div class="flex flex-col justify-start mt-6 space-y-3">
			<div class="flex-1">
				<Example/>
				<Form />
			</div>
			<div class="flex-1">
				<OptionVue v-if="ytIdProv.length > 0" />
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

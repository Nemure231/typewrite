<script setup>
defineProps({
    file: { type: Object, required: true },
    tag: { type: String, default: 'li' },
})
</script>

<template>
	<component :is="tag" class="file-preview">
		<button @click="$emit('remove', file)" class="close-icon">&times;</button>
		<img :src="file.url" :alt="file.id" />
	</component>
</template>

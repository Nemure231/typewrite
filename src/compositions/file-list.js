import { ref } from 'vue'

export default function () {
	const files = ref([])

	function addFiles(newFiles) {

		let newUploadableFiles = [...newFiles].map((file) => new UploadableFile(file)).filter((file) => !fileExists(file.id))

		newUploadableFiles.forEach((element, index) => {
			const fileType = element.file.type
			const fileSize = element.file.size
			const validImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/jpg', 'image/svg+xml'];
			// TYPE IMAGE VALIDATION
			if (!validImageTypes.includes(fileType)) {
				alert(`Error BG ${index + 1}: Please, choose the right format image! The avaiable format is JPG, JPEG, PNG, and SVG!`);
			}
			//SIZE IMAGE VALIDATION
			else if (fileSize >= 1045301) {
				alert(`Error BG ${index + 1}: The maximum size image to upload is 2MB, please reduce your image size before upload again!`);
			} else {

					files.value.push({
						id: element.url.split('/')[3],
						url: element.url,
						size: 'cover',
						repeat: 'no-repeat',
						color: '#FFFFFF',
						position: 'center',
						brightness: 1,
						blur: 0,
						contrast: 1,
						grayscale: 0,
						hue: 0,
						invert: 0,
						saturate: 1,
						sepia: 0
					})
					
			}
		});


	}

	function fileExists(otherId) {
		return files.value.some(({ id }) => id === otherId)
	}

	function removeFile(file) {
		const index = files.value.indexOf(file)
		if (index > -1) files.value.splice(index, 1)
	}

	return { files, addFiles, removeFile }
}

class UploadableFile {
	constructor(file) {
		this.file = file
		this.id = `${file.name}-${file.size}-${file.lastModified}-${file.type}`
		this.url = URL.createObjectURL(file)
		this.status = null
	}
}
import { ref } from 'vue'

export default function () {
	const files = ref([])

	function addFiles(newFiles) {

		let newUploadableFiles = [...newFiles].map((file) => new UploadableFile(file)).filter((file) => !fileExists(file.id))

		newUploadableFiles.forEach((element, index) => {
			const fileType = element.file.type
			const fileSize = element.file.size
			const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
			// TYPE IMAGE VALIDATION
			if (!validImageTypes.includes(fileType)) {
				alert(`Error BG ${index + 1}: Please, choose the right format image! The avaiable format is JPG, JPEG, and PNG!`);
			}
			//SIZE IMAGE VALIDATION
			else if (fileSize >= 1045301) {
				alert(`Error BG ${index + 1}: The maximum size image to upload is 2MB, please reduce your image size before upload again!`);
			} else {
				files.value.push({
					id: Date.now(),
					url: element.url
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
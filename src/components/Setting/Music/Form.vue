<script setup>
import { inject } from "vue";

const spotify = inject('spotifyProv');
const spotifyVal = inject('spotifyValProv')

let addSpotify = () => {
    const checkUrlType = checkUrlImg(spotify.value);

    if (spotify.value == '') {
        alert('The url cannot be empty!')
    } else if (checkUrlType === true) {
        const link = spotify.value.split('/')
        if (link[2] != 'open.spotify.com') {
            alert(`The domain isn't from spotify!`)
        } else {
            spotifyVal.value = link[4]
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
        <input v-model="spotify" class="py-2.5 pl-4 pr-24 focus:outline-none w-full border-2 border-sky-500 rounded-lg"
            type="url" />
        <button type="submit" @click="addSpotify()"
            class="absolute top-1 right-1 py-2 px-4 bg-sky-500 text-white font-semibold rounded-lg">
            Submit
        </button>
    </div>
</template>
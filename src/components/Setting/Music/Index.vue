<script setup>
import { ref } from "vue";

const spotify = ref('');
const spotifyVal = ref('')

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
    <div class="flex-1">
        <div class="flex flex-col gap-6">
            <div class="flex-1">
                <span class="text-2xl font-bold">Spotify Playlist</span>
                <div class="flex flex-col gap-3 mt-6">
                    <div>
                        <label for="exmaple" class="block">Example:</label>
                        <div class="inline font-light bg-sky-100 w-max rounded-lg py-1 px-2 mb-2 text-xs">
                          https://open.spotify.com/playlist/37i9dQZF1DX78L8foCBod1
                        </div>
                    </div>
                    <div class="relative mt-2">
                        <input v-model="spotify"
                            class="py-2.5 pl-4 pr-24 focus:outline-none w-full border-2 border-sky-500 rounded-lg"
                            type="url" />

                        <button type="submit" @click="addSpotify()"
                            class="absolute top-1 right-1 py-2 px-4 bg-sky-500 text-white font-semibold rounded-lg">
                            Submit
                        </button>
                    </div>
                </div>
                <div v-if="spotifyVal" class="flex gap-3 mt-6">
                    <iframe style="border-radius:12px"
                        :src="`https://open.spotify.com/embed/playlist/${spotifyVal}?utm_source=generator`" width="100%"
                        height="380" frameBorder="0" allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </div>
            </div>

        </div>
    </div>
</template>
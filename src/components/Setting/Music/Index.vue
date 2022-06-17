<script setup>
import { ref, provide, computed } from "vue";
import Example from "./Example.vue";
import Form from "./Form.vue";
import Spotify from "./Spotify.vue";

const spotify = ref('');
const spotifyVal = ref('')

provide('spotifyProv', computed({
    get: () => spotify.value,
    set: (val) => {
        spotify.value = val
    }
}))

provide('spotifyValProv', computed({
    get: () => spotifyVal.value,
    set: (val) => {
        spotifyVal.value = val
    }
}))

</script>

<template>
    <div class="flex-1">
        <div class="flex flex-col gap-6">
            <div class="flex-1">
                <span class="text-2xl font-bold">Spotify Playlist</span>
                <div class="flex flex-col gap-3 mt-3">
                    <Example />
                    <Form />
                </div>
                <Spotify v-if="spotifyVal"/>
            </div>

        </div>
    </div>
</template>
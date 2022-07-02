<script setup>
import { ref, provide, computed, defineAsyncComponent } from "vue";
import { useOnline } from '@vueuse/core'
import ExampleView from "./Example.vue";
import FormView from "./Form.vue";
import SpotifyView from "./Spotify.vue";

const online = useOnline()
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

const isOffline = computed(() => {
    if (!online.value) {
        return defineAsyncComponent(() => import('../Offline/Index.vue'))
    }
})
</script>

<template>
    <div class="flex-1">
        <div class="flex flex-col gap-6">
            <div class="flex-1">
                <span class="text-2xl font-bold">Spotify Playlist</span>
                <template v-if="online">
                    <div class="flex flex-col gap-3 mt-3">
                        <ExampleView />
                        <FormView />
                    </div>
                    <SpotifyView v-if="spotifyVal" />
                </template>
                <component :is="isOffline"></component>
            </div>

        </div>
    </div>
</template>

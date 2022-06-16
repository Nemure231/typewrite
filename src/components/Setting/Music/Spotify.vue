<script setup>
import { inject } from "vue";

const spotifyVal = inject('spotifyValProv')
</script>


<template>
    <div  class="flex gap-3 mt-6">
        <iframe style="border-radius:12px"
            :src="`https://open.spotify.com/embed/playlist/${spotifyVal}?utm_source=generator`" width="100%"
            height="380" frameBorder="0" allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    </div>
</template>
<script setup>
import { inject } from "vue";
import { useOnline } from '@vueuse/core'
import DirectionView from "./Direction.vue";
import TypeView from "./Type.vue";
import LanguageView from "./Language.vue";
import ListView from "./List.vue";

const online = useOnline()
const selectLangProv = inject('selectLangProv')

</script>


<template>
    <div class="flex-1">
        <div class="flex flex-col gap-3">
            <DirectionView />
            <TypeView />
            <LanguageView />
            <ListView v-if="selectLangProv === 2 || !online" />
        </div>
    </div>
</template>
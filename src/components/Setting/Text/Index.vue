<script setup>
import { inject } from "vue";
import { useOnline } from '@vueuse/core'
import Direction from "./Direction.vue";
import Type from "./Type.vue";
import Language from "./Language.vue";
import List from "./List.vue";

const online = useOnline()
const selectLangProv = inject('selectLangProv')

</script>


<template>
    <div class="flex-1">
        <div class="flex flex-col gap-3">
            <Direction />
            <Type />
            <Language />
            <List v-if="selectLangProv === 2 || !online" />
        </div>
    </div>
</template>
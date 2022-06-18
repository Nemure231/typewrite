<script setup>
import { inject } from "vue";
const selectLangProv = inject('selectLangProv')
import Direction from "./Direction.vue";
import Type from "./Type.vue";
import Language from "./Language.vue";
import List from "./List.vue";


</script>


<template>
    <div class="flex-1">
        <div class="flex flex-col gap-3">
            <Direction />
            <Type />
            <Language />
            <List v-if="selectLangProv === 2" />
        </div>
    </div>
</template>
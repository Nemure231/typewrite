<script setup>
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
            <List />
        </div>
    </div>
</template>
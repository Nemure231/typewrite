<script lang="ts">
import { defineComponent } from "vue";
import { useRegisterSW } from "virtual:pwa-register/vue";
const { updateServiceWorker } = useRegisterSW();
export default defineComponent({
    name: "ReloadPWA",
    setup() {
        const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();
        const close = async () => {
            offlineReady.value = false;
            needRefresh.value = false;
        };
        return { offlineReady, needRefresh, updateServiceWorker, close };
    },
    methods: {
        async updateServiceWorker() {
            await updateServiceWorker();
        },
    },
});
</script>
<template>
    <div  v-if="offlineReady || needRefresh"
        class="fixed right-3 dark:text-gray-300 text-black bottom-3 text-left p-4 rounded-lg shadow-lg z-50 dark:bg-gray-800 bg-white border dark:border-gray-300/25 border-secondary/25" role="alert">
        <div class="mb-3">
            <span class="font-semibold" v-if="offlineReady">
                App ready to install
            </span>
            <span class="font-semibold" v-else>
                New content available, please reload your app.
            </span>
        </div>
        <button class="py-0 px-4 bg-gray-300 dark:bg-gray-800 dark:border rounded-xl border-2 border-sky-500/50 dark:border-gray-300/50" v-if="needRefresh"
            @click="updateServiceWorker()">
            Reload
        </button>
        <button class="py-0 px-4 bg-gray-300 dark:bg-gray-800 dark:borde rounded-xl border-2 border-sky-500/50 dark:border-gray-300/50" @click="close">
            Close
        </button>
    </div>
</template>


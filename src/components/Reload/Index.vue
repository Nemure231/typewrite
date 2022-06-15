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
        async close() {
            this.offlineReady.value = false;
            this.needRefresh.value = false;
        },
        async updateServiceWorker() {
            await updateServiceWorker();
        },
    },
});
</script>
<template>
    <div   v-if="offlineReady || needRefresh"
        class="fixed right-3 bottom-3 text-left p-4 rounded-lg shadow-lg z-50 dark:bg-secondary bg-light border dark:border-light/25 border-secondary/25" role="alert">
        <div class="mb-3">
            <span class="font-semibold text-primary dark:text-light" v-if="offlineReady">
                App ready to install
            </span>
            <span class="font-semibold text-primary dark:text-light" v-else>
                New content available, click on reload button to update.
            </span>
        </div>
        <button class="py-0 px-4 bg-light dark:bg-dark dark:border  text-primary dark:text-light rounded-xl border-2 border-primary/50 dark:border-light/50" v-if="needRefresh"
            @click="updateServiceWorker()">
            Reload
        </button>
        <button class="py-0 px-4 bg-light dark:bg-dark dark:border text-primary dark:text-light rounded-xl border-2 border-primary/50 dark:border-light/50" @click="close">
            Close
        </button>
    </div>
</template>


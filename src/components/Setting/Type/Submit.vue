<script setup>
import { watch, inject } from 'vue';
import { useMagicKeys } from '@vueuse/core'

const testType = inject('testTypeProv')
const submitType = inject('submitTypeProv')


const { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, Enter, Backspace, space, Delete, Minus } = useMagicKeys()

watch(() => [a.value, b.value, c.value, d.value, e.value, f.value, g.value, h.value, i.value, j.value, k.value, l.value, m.value, n.value, o.value, p.value, q.value, r.value, s.value, t.value, u.value, v.value, w.value, x.value, y.value, z.value, Minus.value, space.value, Backspace.value, Enter.value, Delete.value],
    () => {
        a.value ? testType.value = 'a' : ''
        b.value ? testType.value = 'b' : ''
        c.value ? testType.value = 'c' : ''
        d.value ? testType.value = 'd' : ''
        e.value ? testType.value = 'e' : ''
        f.value ? testType.value = 'f' : ''
        g.value ? testType.value = 'g' : ''
        h.value ? testType.value = 'h' : ''
        i.value ? testType.value = 'i' : ''
        j.value ? testType.value = 'j' : ''
        k.value ? testType.value = 'k' : ''
        l.value ? testType.value = 'l' : ''
        m.value ? testType.value = 'm' : ''
        n.value ? testType.value = 'n' : ''
        o.value ? testType.value = 'o' : ''
        p.value ? testType.value = 'p' : ''
        q.value ? testType.value = 'q' : ''
        r.value ? testType.value = 'r' : ''
        s.value ? testType.value = 's' : ''
        t.value ? testType.value = 't' : ''
        u.value ? testType.value = 'u' : ''
        v.value ? testType.value = 'v' : ''
        w.value ? testType.value = 'w' : ''
        x.value ? testType.value = 'x' : ''
        y.value ? testType.value = 'y' : ''
        z.value ? testType.value = 'z' : ''
        Minus.value ? testType.value = 'Minus' : ''
        space.value ? testType.value = 'Space' : ''
        Enter.value ? testType.value = 'Enter' : ''
        Backspace.value ? testType.value = 'Backspace' : ''
        Delete.value ? testType.value = 'Delete' : ''

        setTimeout(() => {
            testType.value = ''
        }, 1000);

    })

</script>


<template>
    <div class="flex-1">
        <span class="text-2xl font-bold">Submit Type</span>
        <div class="flex gap-3 mt-3">
            <button :class="submitType == 0 && 'bg-sky-100'" @click="submitType = 0"
                class="flex-1 py-2 px-3 rounded-md border-2 border-sky-500">
                <div class="inline-flex justify-center items-center gap-2">
                    <span class="text-lg">
                        Auto
                    </span>
                    <svg class="w-6 h-6 " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
                        <g fill="none" stroke="#0ea5e9" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                            <path d="M13 35H7v6m34 0h-6v-6m0-22h6V7M7 7h6v6"></path>
                            <path
                                d="M13 7.294C7.578 10.871 4 17.018 4 24c0 1.02.076 2.021.223 3M27 43.776A20.16 20.16 0 0 1 24 44c-6.982 0-13.129-3.578-16.706-9m36.482-14c.148.979.224 1.98.224 3c0 6.982-3.578 13.129-9 16.706M21 4.223A20.16 20.16 0 0 1 24 4c6.982 0 13.129 3.578 16.706 9">
                            </path>
                        </g>
                    </svg>
                    <input class="hidden" type="radio" v-model="submitType" value="0" />
                </div>
            </button>
            <button :class="submitType == 1 && 'bg-sky-100'" @click="submitType = 1"
                class="flex-1 py-0.25 px-3 rounded-md border-2 border-sky-500">
                <div class="inline-flex justify-center items-center gap-2">
                    <span class="text-lg">
                        Enter
                    </span>
                    <svg class="w-6 h-6 " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
                        <g fill="none" stroke="#0ea5e9" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                            <path d="M44 44V4H24v16H4v24h40Z"></path>
                            <path d="m21 28l-4 4l4 4"></path>
                            <path d="M34 23v9H17"></path>
                        </g>
                    </svg>
                    <input class="hidden" type="radio" v-model="submitType" value="1" />
                </div>
            </button>
        </div>
    </div>

</template>
<script setup>
import { watch, inject, ref } from 'vue';
import { useMagicKeys } from '@vueuse/core'

const testType = inject('testTypeProv')

const ava = ref([
    {
        "id": 1,
        "name": "a"
    },
    {
        "id": 2,
        "name": "b"
    },
    {
        "id": 3,
        "name": "c"
    },
    {
        "id": 4,
        "name": "d"
    },
    {
        "id": 5,
        "name": "e"
    },
    {
        "id": 6,
        "name": "f"
    },
    {
        "id": 7,
        "name": "g"
    },
    {
        "id": 8,
        "name": "h"
    },
    {
        "id": 9,
        "name": "i"
    },
    {
        "id": 10,
        "name": "j"
    },
    {
        "id": 11,
        "name": "k"
    },
    {
        "id": 12,
        "name": "l"
    },
    {
        "id": 13,
        "name": "m"
    },
    {
        "id": 14,
        "name": "n"
    },
    {
        "id": 15,
        "name": "o"
    },
    {
        "id": 16,
        "name": "p"
    },
    {
        "id": 17,
        "name": "q"
    },
    {
        "id": 18,
        "name": "r"
    },
    {
        "id": 19,
        "name": "s"
    },
    {
        "id": 20,
        "name": "t"
    },
    {
        "id": 21,
        "name": "u"
    },
    {
        "id": 22,
        "name": "v"
    },
    {
        "id": 23,
        "name": "w"
    },
    {
        "id": 24,
        "name": "x"
    },
    {
        "id": 25,
        "name": "y"
    },
    {
        "id": 26,
        "name": "z"
    },
    {
        "id": 27,
        "name": "Enter"
    },
    {
        "id": 28,
        "name": "Backspace"
    },
    {
        "id": 29,
        "name": "Space"
    },
    {
        "id": 30,
        "name": "Delete"
    },
    {
        "id": 31,
        "name": "Minus"
    }
])


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
        <div class="flex flex-col gap-6">
            <div class="flex-1">
                <span class="text-2xl font-bold">Available Type</span>
                <div class="flex flex-row flex-wrap gap-3 mt-3 font-normal justify-center">
                    <span v-for="als in ava" :key="als.id" 
                    :class="testType == als.name && 'bg-sky-100'"
                        class="py-1 px-3 rounded-md border border-sky-500 shadow-md text-lg text-center">
                        {{ als.name }}
                    </span>


                </div>
            </div>


        </div>
    </div>
</template>
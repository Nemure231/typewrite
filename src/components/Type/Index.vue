<script setup>
import { watchEffect, ref, inject } from 'vue';
import { useMagicKeys } from '@vueuse/core'

const start = inject('startProv')
const life = inject('lifeProv')
const score = inject('scoreProv')
const list = inject('listProv')
const previewType = inject('previewTypeProv')
const pass = inject('passProv')

const { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, Enter, Backspace, space, Delete, Minus } = useMagicKeys()
const storeAbjad = ref([])
const storedAbjadJoin = ref([])

watchEffect(() => {
    if (start.value) {
        a.value && storeAbjad.value.push('a')
        b.value && storeAbjad.value.push('b')
        c.value && storeAbjad.value.push('c')
        d.value && storeAbjad.value.push('d')
        e.value && storeAbjad.value.push('e')
        f.value && storeAbjad.value.push('f')
        g.value && storeAbjad.value.push('g')
        h.value && storeAbjad.value.push('h')
        i.value && storeAbjad.value.push('i')
        j.value && storeAbjad.value.push('j')
        k.value && storeAbjad.value.push('k')
        l.value && storeAbjad.value.push('l')
        m.value && storeAbjad.value.push('m')
        n.value && storeAbjad.value.push('n')
        o.value && storeAbjad.value.push('o')
        p.value && storeAbjad.value.push('p')
        q.value && storeAbjad.value.push('q')
        r.value && storeAbjad.value.push('r')
        s.value && storeAbjad.value.push('s')
        t.value && storeAbjad.value.push('t')
        u.value && storeAbjad.value.push('u')
        v.value && storeAbjad.value.push('v')
        w.value && storeAbjad.value.push('w')
        x.value && storeAbjad.value.push('x')
        y.value && storeAbjad.value.push('y')
        z.value && storeAbjad.value.push('z')
        Minus.value && storeAbjad.value.push('-')
        space.value && storeAbjad.value.push(' ')

        if (Backspace.value) {
            if (storeAbjad.value.length == 1) {
                storeAbjad.value = []
            } else {
                storeAbjad.value.pop()
            }
        }

        if(Delete.value){
            storeAbjad.value = [];
        }
        var stored = storeAbjad.value.join('')

        previewType.value = stored

        if (storeAbjad.value.length > 0) {
            if (Enter.value) {
                storedAbjadJoin.value.push(stored)
                storeAbjad.value = []
                previewType.value = ''

                var au = ''
                if (storedAbjadJoin.value.length > 1) {
                    au = storedAbjadJoin.value.splice(0, 1)
                }

                const storedName =storedAbjadJoin.value[0]

                console.log(storedName)
                // const storedName = storedAbjadJoin.value[0].replace(au, '')

                let obj = list.value.find(o => o.name === storedName);
                if (obj) {
                    if (obj.name) {
                        let passFind = pass.value.find(e => e === obj.id);

                        if (passFind === undefined) {

                            if (storedName == obj.name) {

                                previewType.value = ''

                                pass.value.push(obj.id)

                                score.value += 10

                                document.getElementById(obj.id).remove()

                                for (let lif = 1; lif < 100; lif++) {

                                    const liff = lif * 100

                                    if (score.value == liff) {
                                        life.value += 1
                                    }

                                }
                            }
                        }
                    }
                }

            }
        }

    }

})



</script>

<template>

</template>
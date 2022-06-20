<script setup>
import { watchEffect, ref, inject, watch } from 'vue';
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


const highlightColor = inject('highlightColorProv')
const highlightStyle = inject('highlightStyleProv')
const highlightThick = inject('highlightThickProv')


watchEffect(() => {
    if (start.value) {
        if (a.value || b.value || c.value || d.value || e.value || f.value || g.value || h.value || i.value || j.value || k.value || l.value || m.value || n.value || o.value || p.value || q.value || r.value || s.value || t.value || u.value || v.value || w.value || x.value || y.value || z.value || Minus.value || space.value || Backspace.value) {
            list.value.forEach((element, index) => {
                element.name = element.name.replace(`<div class="underline underline-offset-4 inline" style="text-decoration-color:${highlightColor.value};text-decoration-style:${highlightStyle.value};text-decoration-thickness:${highlightThick.value}">`, '');
                element.name = element.name.replace('</div>', '');

                if (element.name.indexOf(previewType.value) !== -1) {
                    const convertedString = `<div class="underline underline-offset-4 inline" style="text-decoration-color:${highlightColor.value};text-decoration-style:${highlightStyle.value};text-decoration-thickness:${highlightThick.value}">${previewType.value}</div>`
                    const highligh = element.name.replace(previewType.value, convertedString);
                    list.value.splice(index, 1, {
                        id: element.id,
                        name: highligh,
                        dir: element.dir,
                        top: element.top
                    })
                } else {
                    list.value.splice(index, 1, {
                        id: element.id,
                        name: element.name,
                        dir: element.dir,
                        top: element.top
                    })
                }
            });

        }
    }
})

watchEffect(() => {
    if (start.value) {
        a.value && storeAbjad.value.push('a')
    }
})

watchEffect(() => {
    if (start.value) {
        b.value && storeAbjad.value.push('b')
    }
})


watchEffect(() => {
    if (start.value) {
        c.value && storeAbjad.value.push('c')
    }
})

watchEffect(() => {
    if (start.value) {
        d.value && storeAbjad.value.push('d')
    }
})


watchEffect(() => {
    if (start.value) {
        e.value && storeAbjad.value.push('e')
    }
})


watchEffect(() => {
    if (start.value) {
        f.value && storeAbjad.value.push('f')
    }
})

watchEffect(() => {
    if (start.value) {
        g.value && storeAbjad.value.push('g')
    }
})

watchEffect(() => {
    if (start.value) {
        h.value && storeAbjad.value.push('h')
    }
})

watchEffect(() => {
    if (start.value) {
        i.value && storeAbjad.value.push('i')
    }
})



watchEffect(() => {
    if (start.value) {
        j.value && storeAbjad.value.push('j')
    }
})

watchEffect(() => {
    if (start.value) {
        k.value && storeAbjad.value.push('k')
    }
})


watchEffect(() => {
    if (start.value) {
        l.value && storeAbjad.value.push('l')
    }
})

watchEffect(() => {
    if (start.value) {
        m.value && storeAbjad.value.push('m')
    }
})

watchEffect(() => {
    if (start.value) {
        n.value && storeAbjad.value.push('n')
    }
})

watchEffect(() => {
    if (start.value) {
        o.value && storeAbjad.value.push('o')
    }
})

watchEffect(() => {
    if (start.value) {
        p.value && storeAbjad.value.push('p')
    }
})

watchEffect(() => {
    if (start.value) {
        q.value && storeAbjad.value.push('q')
    }
})

watchEffect(() => {
    if (start.value) {
        r.value && storeAbjad.value.push('r')
    }
})

watchEffect(() => {
    if (start.value) {
        s.value && storeAbjad.value.push('s')
    }
})

watchEffect(() => {
    if (start.value) {
        t.value && storeAbjad.value.push('t')
    }
})

watchEffect(() => {
    if (start.value) {
        u.value && storeAbjad.value.push('u')
    }
})

watchEffect(() => {
    if (start.value) {
        v.value && storeAbjad.value.push('v')
    }
})

watchEffect(() => {
    if (start.value) {
        w.value && storeAbjad.value.push('w')
    }
})

watchEffect(() => {
    if (start.value) {
        x.value && storeAbjad.value.push('x')
    }
})

watchEffect(() => {
    if (start.value) {
        y.value && storeAbjad.value.push('y')
    }
})

watchEffect(() => {
    if (start.value) {
        z.value && storeAbjad.value.push('z')
    }
})


watchEffect(() => {
    if (start.value) {
        Minus.value && storeAbjad.value.push('-')
    }
})

watchEffect(() => {
    if (start.value) {
        space.value && storeAbjad.value.push(' ')
    }
})

watchEffect(() => {
    if (start.value) {
        if (Backspace.value) {
            if (storeAbjad.value.length == 1) {
                storeAbjad.value = []
            } else {
                storeAbjad.value.pop()
            }
        }
    }
})

watchEffect(() => {
    if (start.value) {
        if (Delete.value) {
            storeAbjad.value = [];
        }
    }
})


watchEffect(() => {
    if (start.value) {
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

                const storedName = storedAbjadJoin.value[0]

                const regStoredName = `<div class="underline underline-offset-4 inline" style="text-decoration-color:${highlightColor.value};text-decoration-style:${highlightStyle.value};text-decoration-thickness:${highlightThick.value}">${storedName}</div>`

                let obj = list.value.find(o => o.name === regStoredName);
                if (obj) {
                    if (obj.name) {
                        let passFind = pass.value.find(e => e === obj.id);

                        if (passFind === undefined) {

                            if (regStoredName == obj.name) {

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

}, { immediate: true })



</script>

<template>

</template>
<script setup>
import { inject, computed } from "vue";
import FontView from "./Font.vue";
import BgView from "./Bg.vue";
import PaddingView from "./Padding.vue";
import BorderView from "./Border.vue";
import HighlightView from "./Highlight.vue";

const fontSize = inject('fontSizeProv')
const color = inject('fontColorProv')
const fontWeight = inject('fontWeightProv')
const bgColor = inject('bgColorProv')
const paddingX = inject('paddingXProv')
const paddingY = inject('paddingYProv')
const borderColor = inject('borderColorProv')
const borderWidth = inject('borderWidthProv')
const borderRadius = inject('borderRadiusProv')
const highlightColor = inject('highlightColorProv')
const highlightStyle = inject('highlightStyleProv')
const highlightThick = inject('highlightThickProv')

const changeStyle = computed(() => {
    const text = {
        color: color.value,
        backgroundColor: bgColor.value,
        fontSize: `${fontSize.value}px`,
        fontWeight: fontWeight.value,
        paddingLeft: `${paddingX.value}px`,
        paddingRight: `${paddingX.value}px`,
        paddingTop: `${paddingY.value}px`,
        paddingBottom: `${paddingY.value}px`,
        borderColor: borderColor.value,
        borderWidth: `${borderWidth.value}px`,
        borderRadius: `${borderRadius.value}px`,
        textDecorationColor: `${highlightColor.value}`,
        textDecorationStyle: `${highlightStyle.value}`,
        textDecorationThickness: `${highlightThick.value}px`,
    }
    return text

})


</script>


<template>
    <div class="flex-1 space-y-3">
        <div class="flex flex-row flex-wrap gap-4">
            <FontView />
            <BgView />
            <PaddingView />
            <BorderView />
            <HighlightView />
        </div>
        <div class="text-center pb-10">
            <span class="text-2xl font-bold ">Preview</span>
            <div class="w-full flex justify-center">
                <p class="mt-6 underline inline underline-offset-4" :style="changeStyle">
                    Example
                </p>
            </div>
        </div>
    </div>
</template>
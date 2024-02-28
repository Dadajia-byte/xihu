<template>
    <div class="screen-box">
        <div class="cir-outside">
            <div class="cir-inner">
                <div class="letters">
                    <span v-for="lettter in letters" :style="{
                        'font-size': letters.length > 4 ? '0.8rem' : '1rem'
                    }">{{ lettter }}</span>
                    <div class="let-after"></div>
                </div>
            </div>
            <FloatCard class="f-c" content="主论坛" style="left: 0; top: 0; --i: 0s;"></FloatCard>
            <FloatCard class="f-c" content="平行论坛" style="left: 0; bottom: 0; --i: 1s;"></FloatCard>
            <FloatCard class="f-c" content="科普论坛" style="right: 0; bottom: 0; --i: 2s;"></FloatCard>
            <FloatCard class="f-c" content="掌上论剑" style="right: 0; top: 0; --i: 3s;"></FloatCard>
        </div>
    </div>
</template>


<script setup>
import { onMounted, ref } from 'vue'
import FloatCard from './FloatCard.vue'
import { wait } from '@/utils/time.js'

const title = ['大会议程', '西湖论剑·数字安全大会']
let titleIndex = 0
let titleItemIndex = 0
const letters = ref([])

const runTitle = async () => {
    while (true) {

        if (titleItemIndex === title[titleIndex].length) {
            titleItemIndex = 0
            titleIndex += 1
            await wait(1500)
            while (letters.value.length > 0) {
                letters.value.pop()
                await wait(100)
            }
        }
        if (titleIndex === title.length) {
            titleIndex = 0
            await wait(1000)
            while (letters.value.length > 0) {
                letters.value.pop()
                await wait(100)
            }
        }

        const spaceList = title[titleIndex].split('')
        await wait(200)
        letters.value.push(spaceList[titleItemIndex])
        titleItemIndex += 1
    }
}



onMounted(() => {
    runTitle()
})


</script>


<style scoped lang="scss">
.screen-box {
    width: 100vw;
    height: calc(100vh - $layout-header-height);
    background: linear-gradient(to right, $theme-color-blue, $theme-color-green);
    padding: 5% 18% 5%;

    .cir-outside {
        @include cover;
        border: .0167rem solid rgba(222, 222, 222, 0.588);
        border-radius: 100% / 100%;
        padding: 15%;
        position: relative;

        .cir-inner {
            @include cover;
            border: .0167rem solid rgba(222, 222, 222, 0.588);
            border-radius: 100% / 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
            color: white;
            font-weight: 300;
            position: relative;

            span {
                transition: font-size 0.5s ease-in-out;
                line-height: 100%;
            }

            .letters {
                width: fit-content;
                position: relative;
                display: flex;
                align-items: center;
            }

            .let-after {
                position: absolute;
                content: '';
                right: -0.1667rem;
                // bottom: 0;
                // height: 90%;
                width: .0367rem;
                background-color: white;
                animation: hei 0.9s ease-in-out infinite;
            }

            @keyframes hei {
                0% {
                    height: 0%;
                }

                50% {
                    height: 90%;
                }

                100% {
                    height: 0%;
                }
            }

        }
    }
    .f-c {
        --i: 0s;
        position: absolute;
        animation: move calc(2s + var(--i) * 1.1) ease infinite;
        animation-delay: var(--i);
    }
    @keyframes move {
        0% {
            transform: translate(0, 0);
        }

        50% {
            transform: translate(.0467rem, .0867rem);
        }
        100% {
            transform: translate(0, 0);
        }
    }
}</style>
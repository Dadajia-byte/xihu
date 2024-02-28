<template>
    <div class="card-item-box" :style="cardStyle">
        <div class="card-left c-i">
            <p class="en">{{ cardData.enTitle }}</p>
            <p class="ch">{{ cardData.chTitle }}</p>
            <p class="content">{{ cardData.content }}</p>
            <div class="down">立即下载</div>
        </div>
        <div class="card-right c-i">
            <img :src="cardData.bgUrl" alt="">
        </div>
    </div>
</template>


<script setup>
import { computed } from 'vue';


const props = defineProps({
    cardData: {
        type: Object,
        default: () => { }
    },
    reverse: {
        type: Boolean,
        default: false
    }
})

const cardStyle = computed(() => {
    return {
        flexDirection: props.reverse ? 'row-reverse' : 'row'
    }
})

</script>



<style scoped lang="scss">
.card-item-box {
    width: 100%;
    height: 9rem;
    display: flex;
    flex-wrap: nowrap;
    border-radius: .3333rem;
    .card-right {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .c-i {
        flex: 1;
        padding: .5rem;
        img {
            height: 100%;
            border-radius: .2333rem;
        }
        .en {
            color: #bbb;
            font-size: .5rem;
            line-height: 1.1;
        }
        .ch {
            margin-top: .3333rem;
            @include linear-txt;
            font-size: .55rem;
            text-align: center;
        }
        .content {
            background-color: #f7f7f7;
            line-height: 2;
            padding: .3333rem;
            margin-top: .6667rem;
            color: grey;
        }
        .down {
            margin-top: .3333rem;
            width: fit-content;
            background: linear-gradient(to left, $theme-color-green, $theme-color-blue);
            color: white;
            cursor: pointer;
            padding: .1167rem .1667rem;
            font-size: .2167rem;
            border-radius: .0833rem;
        }
    }
}
</style>
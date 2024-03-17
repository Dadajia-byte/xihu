<template>
    <div class="container">
        <div class="tag">
            精彩活动
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
    background-color: white;
    width: 100vw;
    height: 25vh;
    padding-top: 3vh;
    .tag {
            margin-left: 5vw;
            position: relative;
            font-size: 5vw;
            padding-left: 2vw;
            line-height: 6vw;
            color: #353535;
            &::before {
                content: '';
                height: 100%;
                width: 0.6vw;
                position: absolute;
                left: 0;
                background: linear-gradient(to top,#2a76c3,#3ec9d2);
            }
        }
}
</style>
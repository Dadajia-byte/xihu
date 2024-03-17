<template>
    <div class="container">
        <section class="sec1">
            <el-carousel trigger="click">
                <el-carousel-item style="background-color: red;">
                    <h1>item1</h1>
                </el-carousel-item>
                <el-carousel-item style="background-color: blue;">
                    <h1>item2</h1>
                </el-carousel-item>
                <el-carousel-item style="background-color: green;">
                    <h1>item3</h1>
                </el-carousel-item>
            </el-carousel>
        </section>
        <section class="sec2">
            <div class="tag">直播回放</div>
            <el-carousel trigger="click">
                <el-carousel-item style="background-color: red;">
                    <h1>item1</h1>
                </el-carousel-item>
                <el-carousel-item style="background-color: blue;">
                    <h1>item2</h1>
                </el-carousel-item>
                <el-carousel-item style="background-color: green;">
                    <h1>item3</h1>
                </el-carousel-item>
            </el-carousel>
        </section>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
    height: 70vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    .sec1 {
        height: 60%;
        .el-carousel {
            height: 100%;
        }
    }
    .sec2 {
        margin-top: 4vh;
        height: 31.5%;
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
        .el-carousel {

            margin: 0 auto;
            margin-top: 5vw;
            height: 70%;
            width: 80%;
        }
    }

}
</style>
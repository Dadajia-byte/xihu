<template>
    <div class="container">
        <div class="tag">大会亮点</div>
        <div class="num">
            <div class="num_item">
                <div class="num_item_num">500+</div>
                <div class="num_item_text">主题演讲</div>
            </div>
            <div class="num_item">
                <div class="num_item_num">550+</div>
                <div class="num_item_text">合作伙伴</div>
            </div>
            <div class="num_item">
                <div class="num_item_num">10000+</div>
                <div class="num_item_text">与会嘉宾</div>
            </div>
            <div class="num_item">
                <div class="num_item_num">10万+</div>
                <div class="num_item_text">行业从业者</div>
            </div>
            <div class="num_item">
                <div class="num_item_num">2500万+</div>
                <div class="num_item_text">直播观看</div>
            </div>
        </div>
        <div class="car">
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
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
    height: 30vh;
    display: flex;
    flex-direction: column;
    margin-top: 3vh;
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
    .num {
        display: flex;
        margin-top: 2vh;
        justify-content: space-around;
        .num_item {
            display: flex;
            flex-direction: column;
            align-items: center;
            .num_item_num {
                font-size: 4vw;
                background: linear-gradient(to top, #2a76c3, #3ec9d2);
                /*设置渐变的方向从左到右 颜色从ff0000到ffff00*/
                -webkit-background-clip: text;
                /*将设置的背景颜色限制在文字中*/
                -webkit-text-fill-color: transparent;
                /*给文字设置成透明*/
                font-weight: 400;
            }
            .num_item_text {
                margin-top: 1vw;
                font-size: 2.5vw;
                font-weight: 200;
            }
        }
    }
    .car {
        margin-top: 2vh;
        display: flex;
        justify-content: center;
        .el-carousel {
            width: 93vw;
            height: 29vw;
        }
    }
}
</style>
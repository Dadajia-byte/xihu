<template>
    <div class="main">
        <div class="top">
            <div class="content">
                <div style="font-size: 36px;font-weight: 700;">大会议程</div>
                <div style="margin-top: 20px;font-size: 18px;">CONFERENCE AGENDA</div>
            </div>
        </div>
        <div class="mid">
            <div class="isMe">
                <div class="big" :class="{ isChoose: chosenItem === '全部', noChoose: chosenItem !== '全部' }"
                    @click="chooseItem('全部')">全部议程</div>
                <div class="big" :class="{ isChoose: chosenItem === '我的日程', noChoose: chosenItem !== '我的日程' }"
                    @click="chooseItem('我的日程')">我的日程</div>
            </div>
            <div class="date">
                <div class="small" v-for="item in filterItem.date"
                    :class="{ isChoose: chosenItem === item, noChoose: chosenItem !== item }" @click="chooseItem(item)">
                    {{ item }}
                </div>
            </div>
            <div class="type">
                <div class="small" v-for="item in filterItem.type"
                    :class="{ isChoose: chosenItem === item, noChoose: chosenItem !== item }" @click="chooseItem(item)">
                    {{ item }}
                </div>
            </div>
        </div>
        <div class="then">
            <div class="item">
                <div class="time">5月5日上午</div>
                <div class="box-card">
                    <div class="item1">
                        <div>
                            18:00-21:00
                        </div>
                        <div>杭州市滨江区文化中心副院一层</div>
                    </div>
                    <div class="item2">
                        <span>格致论道@西湖论剑</span>
                    </div>
                    <div class="item3">
                        <el-button icon="Plus" type="primary" style="width: 100px; height: 33px; font-size: 18px" @click="">
                            订阅
                        </el-button>
                        <!-- <div class="subbed" v-show="item.isSub == 1" @click="cancelSub(item.id)">已订阅</div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const chosenItem = ref(''); // 初始未选择任何项目


let filterItem = reactive({
    date: [
        '全部',
        '5月5日',
        '5月6日',
        '5月7日',
        '5月8日'
    ],
    type: [
        '全部类型',
        '主论坛',
        '平行论坛',
        '科普论坛',
        '掌上论剑',
        '生态合作论坛'
    ]
})

const chooseItem = () => {

}
</script>
<script lang="ts">
export default {
    name: 'meeting'
}
</script>
<style lang="scss" scoped>
.main {
    .top {
        width: 100%;
        height: 600px;
        background: url(../../assets/images/bg_images/meeting.jpg) no-repeat;
        background-size: 100% 100%;
        position: relative;

        .content {
            position: absolute;
            left: 200px;
            bottom: 280px;
            color: white;
        }
    }

    .mid {
        margin: 20px auto;
        cursor: pointer;
        width: 1200px;

        .isMe {
            width: 1200px;

            .big {
                display: inline-block;
                text-align: center;
                width: 600px;
                height: 80px;
                font-size: 20px;
                line-height: 80px;
                margin: 30px auto 10px;
                font-weight: 700;

            }
        }

        .small {
            display: inline-block;
            text-align: center;
            width: 125px;
            height: 50px;
            margin: 20px 25px 15px 0px;
            line-height: 50px;
        }

        transition: all 0.3s;
    }

    .then {
        width: 1200px;
        margin: 20px auto;

        .item {
            margin: 50px auto;

            .time {
                font-size: 24px;
                font-style: italic;
                padding-bottom: 5px;
                margin-bottom: 10px;
                border-bottom: 2px solid #218de5;
                color: #333333;

                .box-card {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-direction: row;
                    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
                    border-radius: 5px;
                    margin: 10px auto 20px;
                    width: 1200px;
                    height: 90px;

                    .item1 {
                        flex: 3;

                        div {
                            margin-left: 25px;

                            &:nth-child(1) {
                                padding-left: 7px;
                                font-size: 26px;
                                font-weight: 700;
                                border-left: #1185e4 solid 3px;
                            }

                            &:nth-child(2) {
                                padding-top: 8px;
                                text-align: center;
                                font-size: 10px;
                                color: black;
                            }
                        }
                    }

                    .item2 {
                        flex: 7;

                        span {
                            display: inline-block;
                            margin-left: 40px;
                            height: 40px;
                            line-height: 40px;
                            padding: 0px 25px 0px 15px;
                            font-size: 26px;
                            font-weight: 700;
                            background: linear-gradient(to right, #84bded, #fafafa);
                            border-radius: 20px;
                        }
                    }

                    .item3 {
                        flex: 2;
                        justify-self: right;

                        .subbed {
                            width: 100px;
                            height: 33px;
                            line-height: 29px;
                            text-align: center;
                            border-radius: 5px;
                            border: #fafafa 2px solid;
                        }
                    }
                }
            }
        }
    }
}

.isChoose,
.noChoose {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, .15);
}

.isChoose {
    background: linear-gradient(to left, #4AA3EB, #79C3FF);
    color: white;
    font-weight: 700;
}

.noChoose {
    color: black;
}
</style>
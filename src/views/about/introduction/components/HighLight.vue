<template>
  <div>
    <div class="divider">
        <span  style="font-family: Source Han Sans CN;">大会亮点</span>
        <span  class="divider-tip" style="font-family: Source Han Sans CN;">Conference Highlights</span>
    </div>
    
    <div class="highlight-contanier wow ">
        <el-row justify="space-around" style="margin-top: 0.1429rem">
            <el-col :span="4">
              <ul>
                <li class="li1">
                    <div class="number">{{ num1 }}</div>+
                </li>
                <li class="li2">参会嘉宾</li>
              </ul>
            </el-col>
            <el-col :span="4">
              <ul>
                <li class="li1">
                    <div class="number">{{ num2 }}</div>万+
                </li>
                <li class="li2">直播观看</li>
              </ul>
            </el-col>
            <el-col :span="4">
              <ul>
                <li class="li1">
                    <div class="number">{{ num3 }}</div>+
                </li>
                <li class="li2">主题演讲</li>
              </ul>
            </el-col>
            <el-col :span="4">
              <ul>
                <li class="li1">
                    <div class="number">{{ num4 }}</div>+
                </li>
                <li class="li2">合作伙伴</li>
              </ul>
            </el-col>
            <el-col :span="4">
              <ul>
                <li class="li1">
                    <div class="number">10</div>万+
                </li>
                <li class="li2">行业从业者</li>
              </ul>
            </el-col>
          </el-row>
    </div>
    <div class="characteristic-container">
        <el-row :gutter="20">
            <el-col :span="12">
            <div class="card">
                <div class="character-content">
                    <div class="title">议题更前沿</div>
                    <div class="detail">大会主题及议题、展览锚定数字中国建设要求，助力政企单位从政策、技术、人才、产业等各层面落实工作。</div>
                </div>
                <div class="img"></div>
            </div>
            </el-col>
            <el-col :span="12">
            <div class="card">
                    <div class="character-content">
                        <div class="title">线上更精彩</div>
                        <div class="detail">“掌上论剑”将进一步丰富内容，增强互动性、趣味性，线上持续精彩。</div>
                    </div>
                <div class="img"></div>
            </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
            <div class="card">
                <div class="character-content">
                    <div class="title">成果更显著</div>
                    <div class="detail">将推出国内首份《2023中国数字安全能力洞察报告》，报告涵盖趋势、科技、人才、实践等多部分内容，引领行业发展方向。</div>
                </div>
                <div class="img"></div>
            </div>
            </el-col>
            <el-col :span="12">
            <div class="card">
                <div class="character-content">
                    <div class="title">国际化更深入</div>
                    <div class="detail">峰会将通过引入国际组织、设置国际话题等，从全球角度研判数字化进程和趋势。</div>
                </div>
                <div class="img"></div>
            </div>
            </el-col>
        </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted,ref } from "vue";
import WOW from 'wow.js'

let num1 = ref(1)
let finalNum1 = ref(10000)
let num2 = ref(1)
let finalNum2 = ref(2500)
let num3 = ref(1)
let finalNum3 = ref(500)
let num4 = ref(1)
let finalNum4 = ref(550)
import incraeseNum from '@/utils/incraeseNum'

const initWOW = () => {
  const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
  })
  wow.init()
}

onMounted(() => {
  incraeseNum((num) => (num1.value = num), finalNum1.value, 5000)
  incraeseNum((num) => (num2.value = num), finalNum2.value, 2500)
  incraeseNum((num) => (num3.value = num), finalNum3.value, 2000)
  incraeseNum((num) => (num4.value = num), finalNum4.value, 2000)
  initWOW()
})


</script>

<style lang="scss" scoped>
@import "../../../../styles/mixin";
.highlight-contanier{
    margin-bottom: .85rem;
    .el-col {
    text-align: center;

    .li1 {
      font-size: 0.3571rem;
      font-weight: 400;
      @include linear-txt;
    }
    .number{
        display: inline-block;
        font-size: .875rem;
    }
  }

  .li2 {
    font-size: 0.2286rem;
    line-height: 0.4286rem;
    color: black;
  }
}

.characteristic-container{
    margin: 0 auto;
    width: 15.425rem;
}
.card{
    height: 2.9125rem;
    width:7.2875rem;
    position: relative;
    margin-bottom: .5rem;
    .character-content{
        padding:.35rem .525rem  .3875rem .2125rem;
        box-shadow: -.025rem 0.125rem .125rem #D5D5D5;
        width: 6.5rem;
        height: 2.3rem;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: rgba(#fff,0.6);
        z-index: 1;
        .title{
            font-size: .45rem;
            color: #1185E4;
            padding-bottom: .25rem;
            line-height: .625rem;
            font-weight: bold;
        }
        .detail{
            font-size: .2rem;
            line-height: .3125rem;
        }
    }
    .img{
        
        height: 2.9125rem;
        width: 3.6rem;
        position: absolute;
        right: 0;
        bottom: 0;
        background: url(https://images.unsplash.com/photo-1682685797736-dabb341dc7de?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        z-index: 0;

    }
}

.divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #1185e4;
  font-size: 0.4286rem;
  margin: 0.5714rem auto;
  font-weight: 700;
  
    .divider-tip{
        margin-top: .125rem;
        font-size: .175rem;
        font-weight: 500;
    }
  
  
}
</style>


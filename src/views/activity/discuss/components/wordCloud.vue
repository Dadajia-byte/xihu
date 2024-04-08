<template>
  <div ref="wordCloud" style="width: 10rem; height: 7rem"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import 'echarts-wordcloud'
import { onMounted, ref } from 'vue'

onMounted(() => {
  init()
  //随着屏幕大小调节图表
})

const wordCloud = ref()
const init = () => {
  const myChart = echarts.init(wordCloud.value)

  const option = {
    series: [
      {
        type: 'wordCloud',

        // 要绘制云的形状,默认是 circle，可选的参数有 cardioid 、 diamond 、 triangle-forward 、 triangle 、 star
        shape: 'circle',

        // 保持maskImage的纵横比或1:1的形状
        // 从echarts-wordcloud@2.1.0开始支持该选项
        keepAspect: false,
        // 左/上/宽/高/右/下用于字云的定位
        // 默认放置在中心，大小为75% x 80%。
        left: 'center',
        top: 'center',
        width: '85%',
        height: '100%',
        right: null,
        bottom: null,

        // 数据中的值将映射到的文本大小范围。
        // 默认值为最小12px，最大60px。
        sizeRange: [10, 50],

        // 文字旋转范围和步进程度。文本将通过rotationStep 45在[- 90,90]范围内随机旋转
        rotationRange: [0, 0],

        // 网格大小(以像素为单位)，用于标记画布的可用性
        // 网格大小越大，单词之间的间隔就越大
        gridSize: 10,

        // 设置为true允许文字部分地绘制在画布之外。
        // 允许画比画布大的字
        // 从echarts-wordcloud@2.1.0开始支持该选项
        drawOutOfBound: false,

        // 如果字体太大，无法显示文本，是否缩小文本。如果设置为false，则文本将不被渲染。如果设置为true，文本将被缩小。
        shrinkToFit: true,

        // 是否执行布局动画。
        //当单词较多时禁用会导致UI阻塞。
        layoutAnimation: true,

        // 全局文本样式
        textStyle: {
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          // Color可以是回调函数或颜色字符串
          color: () =>
            'rgb(' +
            [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
            ].join(',') +
            ')',
        },
        emphasis: {
          focus: 'self',
          textStyle: {
            textShadowBlur: 5,
            textShadowColor: '#999',
          },
        },
        data: data,
      },
    ],
  }

  myChart.setOption(option)
  window.addEventListener('resize', () => {
    myChart.resize()
  })
}

const data = [
  { value: 67, name: '红腹角雉' },
  { value: 98, name: '麝牛' },
  { value: 97, name: '山舌鱼' },
  { value: 100, name: '羚羊' },
  { value: 37, name: '非洲王子' },
  { value: 83, name: '麋鹿' },
  { value: 60, name: '中华鲟' },
  { value: 42, name: '鮪鱼' },
  { value: 96, name: '射水鱼' },
  { value: 54, name: '果子狸' },
  { value: 33, name: '小春鱼' },
  { value: 84, name: '水獭' },
  { value: 86, name: '刺猬' },
  { value: 98, name: '麝牛' },
  { value: 97, name: '山舌鱼' },
  { value: 100, name: '羚羊' },
  { value: 37, name: '非洲王子' },
  { value: 83, name: '麋鹿' },
  { value: 60, name: '中华鲟' },
  { value: 42, name: '鮪鱼' },
  { value: 96, name: '射水鱼' },
  { value: 54, name: '果子狸' },
  { value: 33, name: '小春鱼' },
  { value: 84, name: '水獭' },
  { value: 86, name: '刺猬' },
]
</script>

<style scoped></style>

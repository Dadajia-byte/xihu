<template>
  <div class="main">
    <div class="bg"></div>
    <!-- header -->
    <div class="header">
      <div class="title">话题风向标</div>

      <div class="wordle" id="wordle">
        <div class="time">{{ time }}更新</div>
      </div>

      <!-- 主体相关 -->
    </div>
    <div class="body">
      <div class="comment-container">
        <div class="topic-detail">
          <div class="topic-title">
            <div class="title-icon">
              <svgIcon
                name="hot"
                style="width: 0.5625rem; height: 0.5625rem"
              ></svgIcon>
            </div>

            <span>当前话题:</span>
          </div>
          <div class="title">
            <div class="icon">
              <svgIcon
                name="topic2"
                style="width: 0.675rem; height: 0.675rem"
              ></svgIcon>
            </div>
            <span>
              {{ topicList[activeIndex].topicName }}
            </span>
          </div>

          <div class="topic-desc">
            {{ topicList[activeIndex].topicDesc }}
          </div>
        </div>
        <div class="my-reply">
          <el-avatar
            class="header-img"
            :size="40"
            :src="userStore.userData.avatar"
          ></el-avatar>
          <div class="reply-info">
            <el-input
              v-model="inputReply"
              style="width: 95%"
              placeholder="输入评论..."
              @focus="showReplyBtn"
            />
          </div>
          <div class="reply-btn-box">
            <el-button
              class="reply-btn"
              size=""
              @click="sendComment"
              type="primary"
            >
              发表评论
            </el-button>
          </div>
        </div>
        <div
          v-for="(item, i) in comment.comments"
          :key="i"
          class="author-title reply-father"
        >
          <el-avatar
            class="header-img"
            :size="40"
            :src="`${getImg(item.headImg)}`"
          ></el-avatar>
          <div class="author-info">
            <span class="author-name">{{ item.name }}</span>
            <span class="author-time">{{ item.time }}</span>
          </div>
          <div class="icon-btn" style="right: 0.25rem">
            <div class="comment" @click="replyMainComment(i)">
              <svgIcon name="comment"></svgIcon>
            </div>
            <div class="like" @click="commentLike(i)">
              <svgIcon
                :name="comment.comments[i].isLike ? 'liked' : 'like'"
              ></svgIcon>

              {{ item.like }}
            </div>
          </div>
          <div class="talk-box">
            <p>
              <span class="reply">{{ item.content }}</span>
            </p>
          </div>
          <div class="reply-box">
            <div v-for="(reply, j) in item.reply" :key="j" class="author-title">
              <el-avatar
                class="header-img"
                :size="40"
                :src="`${getImg(reply.fromHeadImg)}`"
              ></el-avatar>
              <div class="author-info">
                <span class="author-name">{{ reply.from }}</span>
                <span class="author-time">{{ reply.time }}</span>
              </div>
              <div class="icon-btn">
                <div class="comment" @click="replyMainComment(i)">
                  <svgIcon name="comment"></svgIcon>
                </div>
                <div class="like" @click="replyLike(i, j)">
                  <svgIcon
                    :name="
                      comment.comments[i].reply[j].isLike ? 'liked' : 'like'
                    "
                  ></svgIcon>

                  {{ reply.like }}
                </div>
              </div>
              <div class="talk-box">
                <p>
                  <span>回复 {{ reply.to }}:</span>
                  <span class="reply">{{ reply.content }}</span>
                </p>
              </div>
              <div class="reply-box"></div>
            </div>
          </div>
          <div v-show="replyCommentShow(i)" class="my-reply my-comment-reply">
            <el-avatar
              class="header-img"
              :size="40"
              :src="userStore.userData.avatar"
            ></el-avatar>
            <div class="reply-info">
              <el-input
                v-model="commentReply"
                style="width: 95%"
                placeholder="输入评论..."
                @focus="showReplyBtn"
              />
            </div>
            <div class="reply-btn-box" v-show="btnShow">
              <el-button
                class="reply-btn"
                size=""
                @click="sendReply(i, tempbranch)"
                type="primary"
              >
                发表评论
              </el-button>
            </div>
          </div>
        </div>
      </div>

      <!-- 侧边话题栏 -->
      <div class="topic-panel">
        <div class="topic-title">话题</div>
        <div class="topic-item" v-for="(item, index) in topicList" :key="index">
          <div class="topic-icon">
            <svgIcon
              name="topic"
              style="width: 0.3125rem; height: 0.3125rem"
            ></svgIcon>
          </div>
          <div class="topic-content">
            <div class="content" @click="selectTopic(index)">
              {{ item.topicName }}
            </div>
            <div class="data">
              {{ item.viewNum }}万浏览·{{ item.commentNum }}讨论
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getImg } from '@/utils/img'
import commentList from './data/index'
import { ref, computed, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import useUserStore from '@/store/modules/user'
import judgeLog from '@/utils/judgeLog'
import * as echarts from 'echarts'
// 更新时间
const time = ref(
  new Date().toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }),
)
let userStore = useUserStore()

const activeIndex = ref(0)
const inputReply = ref('')
const commentReply = ref('')
const btnShow = ref(false)
const tempbranch = ref(0) //-1为主评论，大于0为子评论
const topicList = ref([
  {
    topicId: '0',
    topicName: ' 国家数字安全战略',
    commentNum: '25',
    viewNum: '100',
    topicDesc:
      '考察中国如何在全球范围内推进其数字安全战略，并应对复杂的国际环境。案例分析会聚焦于中国与美国在5G网络建设中的竞争，特别是华为在全球市场中的挑战和机遇，探讨中国如何加强其数字基础设施的安全，保护国家利益，同时推动全球数字经济的发展。',
  },
  {
    topicId: '1',
    topicName: ' 人工智能安全',
    commentNum: '25',
    viewNum: '100',
    topicDesc:
      '人工智能技术快速进步引发的安全问题不容忽视。以微软的聊天机器人“Tay”因错误学习而发布不当内容的事件为例，讨论AI技术的潜在风险及其对社会的影响。探讨如何在促进技术创新的同时确保人工智能的安全使用，以及如何制定有效的监管政策来防范这些风险。',
  },
  {
    topicId: '2',
    topicName: ' 网络安全教育与人才培养',
    commentNum: '25',
    viewNum: '100',
    topicDesc:
      '网络安全的重要性日益凸显，需要有策略地培养专业人才。以“蓝莲花”APT攻击事件为背景，探讨中国如何通过加强网络安全教育和实践训练，提高对网络威胁的防御能力，培养出能够应对复杂网络攻击的高级安全专家。',
  },
  {
    topicId: '3',
    topicName: ' 数据泄露与应急响应',
    commentNum: '25',
    viewNum: '100',
    topicDesc:
      '数据泄露事件频发，对企业和用户造成重大影响。通过分析“雅虎数据泄露”事件，讨论数据泄露的严重性及企业应对策略，包括如何建立有效的风险评估和应急响应计划，以及如何通过技术和管理措施降低未来泄露的风险',
  },
  {
    topicId: '4',
    topicName: ' 云安全与混合云策略',
    commentNum: '25',
    viewNum: '100',
    topicDesc:
      '云计算的普及带来了新的安全挑战。结合“Dropbox云存储服务的安全漏洞”事件，讨论企业在采用云服务时面临的安全威胁和挑战，以及如何设计和实施混合云策略来优化安全性和业务灵活性。',
  },
  {
    topicId: '5',
    topicName: ' 网络安全法律与合规',
    commentNum: '25',
    viewNum: '100',
    topicDesc:
      ' 网络安全法律和合规要求对企业运营至关重要。通过分析“Equifax数据泄露”事件及其对公司法律责任和合规要求的影响，探讨企业如何应对日益严格的数据保护法规，保障用户隐私和数据安全',
  },
  {
    topicId: '6',
    topicName: ' 数字货币与金融安全',
    commentNum: '25',
    viewNum: '100',
    topicDesc:
      '数字货币的兴起引发了对其安全性的广泛关注。通过“Mt.Gox比特币交易所破产”事件，探讨数字货币市场的风险因素，以及如何在金融科技的快速发展中保护投资者和确保交易安全。',
  },
])

const comment = computed(() => commentList[activeIndex.value])
// 选择议题
const selectTopic = (index: number) => {
  comment.value.comments.forEach((item: any) => (item.inputShow = false))
  activeIndex.value = index
}
const commentLike = (main: number) => {
  comment.value.comments[main].isLike
    ? comment.value.comments[main].like--
    : comment.value.comments[main].like++
  comment.value.comments[main].isLike = !comment.value.comments[main].isLike
}
const replyLike = (main: number, branch: number) => {
  comment.value.comments[main].reply[branch].isLike
    ? comment.value.comments[main].reply[branch].like--
    : comment.value.comments[main].reply[branch].like++
  comment.value.comments[main].reply[branch].isLike =
    !comment.value.comments[main].reply[branch].isLike
}
// 主用户增添评论
const sendComment = () => {
  let res = judgeLog()
  if (res) {
    if (!inputReply.value) {
      ElMessage({
        type: 'error',
        message: '评论不能为空',
      })
    } else {
      comment.value.comments.push({
        name: userStore.userData.username,
        id: 111, //userStore.userData.id,
        headImg: userStore.userData.avatar,
        content: inputReply.value,
        time: new Date().toLocaleString(),
        commentNum: 0,
        like: 0,
        isLike: false,
        inputShow: false,
        reply: [],
      })

      inputReply.value = ''
    }
  }
}
// 按钮相关
const showReplyBtn = () => {
  btnShow.value = true
}

// 回复主评论
const replyMainComment = (index: number) => {
  comment.value.comments.forEach((item: any) => (item.inputShow = false))
  comment.value.comments[index].inputShow = true
  tempbranch.value = -1
}
// 回复次评论
const replyCommentShow = (index: number) => {
  return comment.value.comments[index].inputShow
}

// 发送次评论
const sendReply = (main: number, branch: number) => {
  let res = judgeLog()
  if (res) {
    if (!commentReply.value) {
      ElMessage({
        type: 'error',
        message: '评论不能为空',
      })
    } else {
      comment.value.comments[main].reply.push({
        from: userStore.userData.username,
        fromId: 111, //userStore.userData.id
        fromHeadImg: userStore.userData.avatar,
        to:
          branch === -1
            ? comment.value.myName
            : comment.value.comments[main].reply[branch].from,
        toId:
          branch === -1
            ? comment.value.myId
            : comment.value.comments[main].reply[branch].fromId,
        content: commentReply.value,
        time: new Date().toLocaleString('zh-CN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }),
        commentNum: 0,
        like: 0,
        isLike: false,
        inputShow: false,
      })
      branch === -1
        ? comment.value.comments[main].commentNum++
        : comment.value.comments[main].reply[branch].commentNum++
      commentReply.value = ''
    }
  }
}
onMounted(() => {
  userStore.userInfo()
  DrawWordCloud()
})
// const dateStr = (date: any) => {
//   let time = new Date().getTime()
//   //去掉 js 时间戳后三位，与php 时间戳保持一致
//   time = Math.floor((time - date) / 1000)
//   //存储转换值
//   let s
//   if (time < 60 * 10) {
//     //十分钟内
//     return '刚刚'
//   } else if (time < 60 * 60 && time >= 60 * 10) {
//     //超过十分钟少于1小时
//     s = Math.floor(time / 60)
//     return s + '分钟前'
//   } else if (time < 60 * 60 * 24 && time >= 60 * 60) {
//     //超过1小时少于24小时
//     s = Math.floor(time / 60 / 60)
//     return s + '小时前'
//   } else if (time < 60 * 60 * 24 * 30 && time >= 60 * 60 * 24) {
//     //超过1天少于30天内
//     s = Math.floor(time / 60 / 60 / 24)
//     return s + '天前'
//   } else {
//     //超过30天ddd
//     date = new Date(parseInt(date))
//     return (
//       date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
//     )
//   }
// }
const defaultSeries = [
  {
    type: 'wordCloud',
    /**
     * 绘制词云的形状, 值为回调函数 或 关键字, 默认 circle
     *  关键字:
     *
     * circle（圆形）  词的数量不太多的时候，效果不明显，它会趋向于画一个椭圆
     * cardioid（苹果形或心形曲线）
     * diamond（菱形 正方形）
     * triangle-forward（三角形-向前）
     * triangle（三角形-直立）
     * pentagon（五边形）
     * star（星形）
     */
    shape: 'circle',
    // 保持 maskImage 的纵横比或形状的纵横比为 1：1
    keepAspect: false,
    /**
     * 词云轮廓图，支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串, 不包含白色区域; 可选选项
     * shape选项将随着云的形状增长而继续应用
     * 有形状限制的时候，最好用背景图来实现，而且这个背景图一定要放base64的，不然词云画不出来
     */
    // maskImage: maskImage,

    // 词云整个图表放置的位置 和 尺寸大小
    left: 'center',
    top: 'center',
    width: '100%',
    height: '100%',
    right: null,
    bottom: null,
    // 词云文本大小范围,  默认为最小12像素，最大60像素
    sizeRange: [12, 60],
    // 词云文字旋转范围和步长。 文本将通过旋转在[-90，90]范围内随机旋转步骤45
    // 如果都设置为 0 , 则是水平显示
    rotationRange: [0, 0],
    rotationStep: 45,
    /**
     * 词间距, 距离越大，单词之间的间距越大, 单位像素
     * 这里间距太小的话，会出现大词把小词套住的情况，比如一个大的口字，中间会有比较大的空隙，这时候他会把一些很小的字放在口字里面，这样的话，鼠标就无法选中里面的那个小字
     */
    gridSize: 16,
    // 设置为true可以使单词部分在画布之外绘制, 允许绘制大于画布大小的单词
    drawOutOfBound: false,
    /**
     * 布局的时候是否有动画
     * 注意：禁用时，当单词较多时，将导致UI阻塞。
     */
    layoutAnimation: true,
    // 这是全局的文字样式，相对应的还可以对每个词设置字体样式
    textStyle: {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      // 颜色可以用一个函数来返回字符串
      color: function () {
        // 随机颜色
        return (
          'rgb(' +
          [
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160),
          ].join(',') +
          ')'
        )
      },
    },
    // 鼠标hover的特效样式
    emphasis: {
      focus: 'self',
      textStyle: {
        textShadowBlur: 10,
        textShadowColor: '#999',
      },
    },

    /**
	 * 词云数据，必须是一个数组，每个数组项必须有name和value属性
	 * 设置单个文本的样式：  textStyle 
	 * 
	 * 例：{
					name: '',
					value: 40,
					textStyle: {
					}
				},
	 */
    data: [
      { name: '5G技术', value: 10000 },
      { name: '加密货币', value: 9600 },
      { name: '网络侵权', value: 9200 },
      { name: '云计算安全', value: 8800 },
      { name: '数据隐私', value: 8400 },
      { name: '身份验证', value: 8000 },
      { name: '网络攻击', value: 7600 },
      { name: '风险管理', value: 7200 },
      { name: '合规标准', value: 6800 },
      { name: '加密技术', value: 6400 },
      { name: '人才培养', value: 6000 },
      { name: '云服务供应商', value: 5600 },
      { name: '黑客行为', value: 5200 },
      { name: '安全漏洞', value: 4800 },
      { name: '混合云', value: 4400 },
      { name: '网络审计', value: 4000 },
      { name: '教育培训', value: 3600 },
      { name: '安全政策', value: 3200 },
      { name: '法律法规', value: 2800 },
      { name: '国际合作', value: 2400 },
      { name: '金融风险', value: 2000 },
      { name: '智能合约', value: 1600 },
      { name: 'AI伦理', value: 1200 },
      { name: '恶意软件', value: 800 },
      { name: '网络监管', value: 400 },
      { name: '信息泄露', value: 3600 },
      { name: '安全协议', value: 3200 },
      { name: '应急措施', value: 2800 },
      { name: '技术创新', value: 2400 },
      { name: '防御策略', value: 2000 },
      { name: '数字化转型', value: 1600 },
    ],
  },
]
function DrawWordCloud() {
  // 词云
  let mychart = echarts.init(document.getElementById('wordle')) // 可以设置主题色'dark'
  mychart.setOption({
    series: defaultSeries,
  })
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  .bg {
    z-index: 0;
    position: absolute;
    top: 20%;
    right: 0;
    width: 100%;
    height: 100%;
    background: url('/src/assets/images/bg_images/huati_bg2.png') no-repeat
      center/cover;
  }
}
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  .title {
    @include linear-txt;

    margin: 0.25rem auto;
    font-size: 0.7rem;
    font-weight: bold;
    line-height: 0.875rem;
    height: 0.875rem;
  }

  .wordle {
    width: 80%;
    margin: 0 auto;
    height: 5.8625rem;
    position: relative;

    .time {
      width: 3rem;
      position: absolute;
      bottom: 0;
      right: -3.25rem;
      color: #abaaaa;
    }
  }
}

.body {
  position: relative;
  z-index: 1;
  display: flex;
  margin-top: 0.25rem;

  .comment-container {
    flex: 8;
    margin-left: 1.25rem;
  }

  .topic-panel {
    align-self: start;
    margin-left: 0.25rem;
    margin-right: 0.75rem;
    width: 2.5rem;
    flex: 2;
    background-color: #fff;
    border-radius: 0.0625rem;
    box-shadow: 0px 0px 0.125rem 0.0125rem rgba(0, 0, 0, 0.1);
    padding: 0.25rem;

    .topic-title {
      height: 0.7rem;
      line-height: 0.7rem;
      font-size: 0.45rem;
      font-weight: 600;
    }

    .topic-item {
      height: 0.875rem;
      padding: 0.125rem 0;
      margin-bottom: 0.1875rem;
      display: flex;

      .topic-icon {
        width: 0.3125rem;
        text-align: center;
        margin-right: 0.125rem;
      }

      .content {
        cursor: pointer;
        font-size: 0.25rem;
        line-height: 0.3125rem;
        height: 0.3125rem;
        margin-bottom: 0.0625rem;

        &:hover {
          color: #1fb7ed;
          transition: color 0.3s ease-in-out;
        }
      }

      .data {
        font-size: 0.2rem;
        line-height: 0.375rem;
        height: 0.375rem;
        color: #abaaaa;
      }

      &:hover {
        background-color: #f6f7f8;
      }
    }
  }
}

.comment-container {
  background-color: #fff;
  box-shadow: 0px 0px 0.125rem 0.025rem rgba(0, 0, 0, 0.1);
  border-radius: 0.0625rem;

  .topic-detail {
    padding: 0.375rem;

    .topic-title {
      display: flex;
      font-size: 0.45rem;
      font-weight: 700;
      line-height: 0.5625rem;
      height: 0.625rem;
      color: #1185e4;
    }

    .topic-desc {
      color: #807e7e;
      line-height: 0.375rem;
      font-size: 0.225rem;
    }

    .title {
      display: flex;
      font-size: 0.475rem;

      line-height: 0.675rem;
      height: 0.675rem;
    }
  }

  .my-reply {
    padding: 0.25rem;
    display: flex;
    background-color: #fafbfc;

    .header-img {
      display: inline-block;
      vertical-align: top;
    }

    .reply-info {
      display: flex;
      align-items: center;
      margin-left: 0.0625rem;
      width: 90%;

      @media screen and (max-width: 1200px) {
        width: 80%;
      }
    }

    .reply-btn-box {
      display: flex;
      align-items: center;
    }
  }

  .my-comment-reply {
    margin-left: 50px;

    .reply-input {
      width: flex;
    }
  }

  .author-title:not(:last-child) {
    border-bottom: 1px solid rgba(178, 186, 194, 0.3);
  }

  .author-title {
    padding: 0.25rem;
    position: relative;

    .header-img {
      display: inline-block;
      vertical-align: top;
    }

    .author-info {
      display: inline-block;
      margin-left: 5px;
      width: 60%;
      height: 40px;
      line-height: 20px;

      > span {
        display: block;
        cursor: pointer;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .author-name {
        color: #000;
        font-size: 18px;
        font-weight: bold;
      }

      .author-time {
        font-size: 14px;
      }
    }

    .icon-btn {
      width: 1.25rem;
      position: absolute;
      display: flex;
      top: 0.25rem;
      right: 0;
      padding: 0 !important;

      @media screen and (max-width: 1200px) {
        width: 20%;
        padding: 7px;
      }

      .comment {
        flex: 1;
        cursor: pointer;
      }

      .like {
        flex: 1;
        cursor: pointer;
      }
    }

    .talk-box {
      margin: 0 0.625rem;

      > p {
        margin: 0;
        font-size: 0.25rem;
      }

      .reply {
        font-size: 0.25rem;
        color: #000;
      }
    }

    .reply-box {
      margin: 10px 0 0 50px;
      // background-color: #efefef;
    }
  }
}
</style>

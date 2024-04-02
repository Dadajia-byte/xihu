<template>
  <div>
    <!-- header -->
    <div class="header">
      <div class="title">话题风向标</div>

      <div class="wordle">
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
                style="width: 0.75rem; height: 0.75rem"
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
            &nbsp;&nbsp;{{ topicList[activeIndex].topicDesc }}
          </div>
        </div>
        <div class="my-reply">
          <el-avatar
            class="header-img"
            :size="40"
            :src="comment.myHeader"
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
            :src="item.headImg"
          ></el-avatar>
          <div class="author-info">
            <span class="author-name">{{ item.name }}</span>
            <span class="author-time">{{ item.time }}</span>
          </div>
          <div class="icon-btn" style="right: 0.25rem">
            <div class="comment" @click="replyMainComment(i)">
              <el-icon>
                <ChatDotRound />
              </el-icon>
            </div>
            <div class="like">
              <el-icon>
                <Star />
              </el-icon>
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
                :src="reply.fromHeadImg"
              ></el-avatar>
              <div class="author-info">
                <span class="author-name">{{ reply.from }}</span>
                <span class="author-time">{{ reply.time }}</span>
              </div>
              <div class="icon-btn">
                <div class="comment" @click="replyMainComment(i)">
                  <el-icon>
                    <ChatDotRound />
                  </el-icon>
                </div>
                <div class="like">
                  <el-icon>
                    <Star />
                  </el-icon>
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
              :src="comment.myHeader"
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
import commentList from './data/index'
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'
const time = ref(
  new Date().toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }),
)
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
const selectTopic = (index: number) => {
  comment.value.comments.forEach((item: any) => (item.inputShow = false))
  activeIndex.value = index
}
// 主用户增添评论
const sendComment = () => {
  if (!inputReply.value) {
    ElMessage({
      type: 'error',
      message: '评论不能为空',
    })
  } else {
    comment.value.comments.push({
      name: comment.value.myName,
      id: comment.value.myId,
      headImg: comment.value.myHeader,
      content: inputReply.value,
      time: new Date().toLocaleString(),
      commentNum: 0,
      like: 0,
      inputShow: false,
      reply: [],
    })

    inputReply.value = ''
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
// const replyComment = (main: number, branch: number) => {
//   comment.value.comments.forEach((item: any) => (item.inputShow = false))
//   comment.value.comments[main].inputShow = true
//   tempbranch.value = branch
// }
// 发送次评论
const sendReply = (main: number, branch: number) => {
  if (!commentReply.value) {
    ElMessage({
      type: 'error',
      message: '评论不能为空',
    })
  } else {
    comment.value.comments[main].reply.push({
      from: comment.value.myName,
      fromId: comment.value.myId,
      fromHeadImg: comment.value.myHeader,
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
      inputShow: false,
    })
    branch === -1
      ? comment.value.comments[main].commentNum++
      : comment.value.comments[main].reply[branch].commentNum++
    commentReply.value = ''
  }
}

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
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    margin: 0.25rem auto;
    font-size: 0.7rem;
    font-weight: bold;
    line-height: 0.875rem;
    height: 0.875rem;
    color: #1185e4;
  }

  .wordle {
    width: 9.65rem;
    height: 5.8625rem;
    background-color: skyblue;
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
  display: flex;
  margin-top: 0.25rem;

  .comment-container {
    flex: 7;
    margin-left: 0.625rem;
  }

  .topic-panel {
    align-self: start;
    margin-left: 0.25rem;
    margin-right: 0.625rem;
    width: 2.5rem;
    flex: 3;
    background-color: #fff;
    border-radius: 0.25rem;
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
      margin-bottom: 0.25rem;
      display: flex;

      .topic-icon {
        width: 0.3125rem;
        text-align: center;
        margin-right: 0.125rem;
      }

      .content {
        cursor: pointer;
        font-size: 0.3125rem;
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
  border-radius: 0.25rem;

  .topic-detail {
    padding: 0.25rem;

    .topic-title {
      display: flex;
      font-size: 0.675rem;
      font-weight: 700;
      line-height: 0.75rem;
      height: 0.875rem;
      color: #1185e4;
    }

    .topic-desc {
      line-height: 0.3125rem;
      font-size: 0.25rem;
    }

    .title {
      display: flex;
      font-size: 0.5rem;
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
      }
    }

    .talk-box {
      margin: 0 0.625rem;

      > p {
        margin: 0;
      }

      .reply {
        font-size: 16px;
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

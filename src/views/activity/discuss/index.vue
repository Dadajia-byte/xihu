<template>
  <div>
    <div class="comment-container">
      <div class="my-reply">
        <el-avatar class="header-img" :size="40" :src="myHeader"></el-avatar>
        <div class="reply-info">
          <el-input
            v-model="inputReply"
            style="width: 95%"
            placeholder="输入评论..."
            @focus="showReplyBtn"
            :prefix-icon="Comment"
          />
        </div>
        <div class="reply-btn-box" v-show="btnShow">
          <el-button
            class="reply-btn"
            size="medium"
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
        <div class="icon-btn">
          <span @click="replyMainComment(i)">
            <el-icon>
              <Comment />
            </el-icon>
            {{ item.commentNum }}
          </span>
          <el-icon>
            <Star />
          </el-icon>
          {{ item.like }}
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
              <span @click="replyComment(i, j)">
                <el-icon>
                  <Comment />
                </el-icon>
                {{ reply.commentNum }}
              </span>
              <el-icon>
                <Star />
              </el-icon>
              {{ reply.like }}
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
          <el-avatar class="header-img" :size="40" :src="myHeader"></el-avatar>
          <div class="reply-info">
            <el-input
              v-model="commentReply"
              style="width: 95%"
              placeholder="输入评论..."
              @focus="showReplyBtn"
              :prefix-icon="Comment"
            />
          </div>
          <div class="reply-btn-box" v-show="btnShow">
            <el-button
              class="reply-btn"
              size="medium"
              @click="sendReply(i, tempbranch)"
              type="primary"
            >
              发表评论
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import comment from './data/index'
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
const inputReply = ref('')
const commentReply = ref('')
const replyInput = ref()
const btnShow = ref(false)
const tempbranch = ref(0) //-1为主评论，大于0为子评论
// 主用户增添评论
const sendComment = () => {
  if (!inputReply.value) {
    ElMessage({
      type: 'error',
      message: '评论不能为空',
    })
  } else {
    comment.comments.push({
      name: comment.myName,
      id: comment.myId,
      headImg: comment.myHeadImg,
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
const closeReplyBtn = () => {
  btnShow.value = false
}
// 回复主评论
const replyMainComment = (index: number) => {
  comment.comments.forEach((item: any) => (item.inputShow = false))
  comment.comments[index].inputShow = true
  tempbranch.value = -1
}
// 回复次评论
const replyCommentShow = (index: number) => {
  return comment.comments[index].inputShow
}
const replyComment = (main: number, branch: number) => {
  comment.comments.forEach((item: any) => (item.inputShow = false))
  comment.comments[main].inputShow = true
  tempbranch.value = branch
}
// 发送次评论
const sendReply = (main: number, branch: number) => {
  if (!commentReply.value) {
    ElMessage({
      type: 'error',
      message: '评论不能为空',
    })
  } else {
    comment.comments[main].reply.push({
      from: comment.myName,
      fromId: comment.myId,
      fromHeadImg: comment.myHeader,
      to:
        branch === -1
          ? comment.myName
          : comment.comments[main].reply[branch].from,
      toId:
        branch === -1
          ? comment.myId
          : comment.comments[main].reply[branch].fromId,
      content: commentReply.value,
      time: new Date().toLocaleString(),
      commentNum: 0,
      like: 0,
      inputShow: false,
    })
    commentReply.value = ''
  }
}

const dateStr = (date: any) => {
  let time = new Date().getTime()
  //去掉 js 时间戳后三位，与php 时间戳保持一致
  time = parseInt((time - date) / 1000)
  //存储转换值
  let s
  if (time < 60 * 10) {
    //十分钟内
    return '刚刚'
  } else if (time < 60 * 60 && time >= 60 * 10) {
    //超过十分钟少于1小时
    s = Math.floor(time / 60)
    return s + '分钟前'
  } else if (time < 60 * 60 * 24 && time >= 60 * 60) {
    //超过1小时少于24小时
    s = Math.floor(time / 60 / 60)
    return s + '小时前'
  } else if (time < 60 * 60 * 24 * 30 && time >= 60 * 60 * 24) {
    //超过1天少于30天内
    s = Math.floor(time / 60 / 60 / 24)
    return s + '天前'
  } else {
    //超过30天ddd
    let date = new Date(parseInt(date))
    date = new Date(parseInt(date))
    return (
      date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
    )
  }
}
</script>

<style lang="scss" scoped>
.my-reply {
  padding: 10px;
  display: flex;
  background-color: #fafbfc;

  .header-img {
    display: inline-block;
    vertical-align: top;
  }

  .reply-info {
    display: flex;
    align-items: center;
    margin-left: 5px;
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
  padding: 10px;

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
    width: 30%;
    padding: 0 !important;
    float: right;

    @media screen and (max-width: 1200px) {
      width: 20%;
      padding: 7px;
    }

    > span {
      cursor: pointer;
    }

    .iconfont {
      margin: 0 5px;
    }
  }

  .talk-box {
    margin: 0 50px;

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
    background-color: #efefef;
  }
}
</style>

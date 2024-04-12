<template>
  <div class="common-layout">
    <el-card>
      <el-container>
        <el-aside width="6.5rem">
          <el-form :model="form" label-width="1.5rem" style="width: 6rem">
            <div class="book">
              <div class="container" @mouseenter="show" @mouseleave="hid">
                <div class="card_container">
                  <div class="star" v-show="isStar">
                    <el-icon color="#adafb0"><StarFilled /></el-icon>
                  </div>
                  <div class="round">
                    <el-icon color="#ee8900"><List /></el-icon>
                  </div>
                  <div class="b_card">宣传文案</div>
                  <div class="g_card">快速生成指定风格宣传文案</div>
                </div>
              </div>
              <div class="back1" ref="back1"></div>
              <div class="back2" ref="back2"></div>
            </div>
            <el-form-item label="大会名称">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="大会区域">
              <el-select v-model="form.region" placeholder="请选择大会区域">
                <el-option
                  v-for="region in regions"
                  :key="region"
                  :label="region"
                  :value="region"
                />
              </el-select>
            </el-form-item>

            <el-form-item label="大会时间">
              <el-col :span="11">
                <el-date-picker
                  v-model="form.date1"
                  type="date"
                  placeholder="开始时间"
                  style="width: 100%"
                />
              </el-col>
              <el-col :span="2" class="text-center">
                <span class="text-gray-500">-</span>
              </el-col>
              <el-col :span="11">
                <el-date-picker
                  v-model="form.date2"
                  type="date"
                  placeholder="结束时间"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
            <el-form-item label="大会类型">
              <el-checkbox-group v-model="form.type">
                <el-checkbox value="网络安全" name="type" label="网络安全">
                  网络安全
                </el-checkbox>
                <el-checkbox value="人工智能" name="type" label="人工智能">
                  人工智能
                </el-checkbox>
                <el-checkbox value="物联网" name="type" label="物联网">
                  物联网
                </el-checkbox>
                <el-checkbox value="金融" name="type" label="金融">
                  金融
                </el-checkbox>
                <el-checkbox value="其他" name="type" label="其他">
                  其他
                </el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="描述">
              <el-input v-model="form.description" type="textarea" />
            </el-form-item>
            <el-form-item>
              <div style="text-align: center">
                <el-button
                  class="create-button"
                  type="primary"
                  @click="onSubmit"
                >
                  生成内容
                </el-button>
              </div>
            </el-form-item>
          </el-form>
        </el-aside>
        <el-main>
          <div class="chat-container">
            <h2 class="title">生成文案</h2>
            <div class="messages" id="messageContainer" ref="messageContainer">
              <div class="content" style="white-space: pre-line">
                {{ messages }}
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue'
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()

const back1 = ref()
const back2 = ref()
const isStar = ref(false)
const show = () => {
  back1.value.style.rotate = '-4deg'
  back2.value.style.rotate = '-8deg'
  isStar.value = true
}

const hid = () => {
  back1.value.style.rotate = '0deg'
  back2.value.style.rotate = '0deg'
  isStar.value = false
}

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  type: [],
  description: '',
})

const regions = [
  '上海',
  '北京',
  '广州',
  '深圳',
  '杭州',
  '成都',
  '天津',
  '重庆',
  '武汉',
  '西安',
  '长沙',
  '青岛',
  '大连',
  '苏州',
]
const ws = ref()
const sendmessage = ref('')
const messages = ref('')
const userid = userStore.userData.account // 请替换为您的实际用户ID

const connect = () => {
  const url = `ws://8.130.145.109:8080/dev-api/websocket/${userid}`
  // const url = `ws://localhost:8080/dev-api/websocket/${userid}`;
  ws.value = new WebSocket(url)

  ws.value.onmessage = onMessage
}

const scrollToBottom = () => {
  const messageContainer: any = document.getElementById('messageContainer')
  messageContainer.scrollTop = messageContainer.scrollHeight
}

const onMessage = (event: any) => {
  messages.value = messages.value + event.data
  // 滚动到底部的操作
  scrollToBottom()
}

/* const sendMessage = () => {
      if (sendmessage.value.trim() !== '') {
        ws.value.send(sendmessage.value.trim());
        sendmessage.value = ''; // 清空消息输入框
      }
    }; */

const onSubmit = () => {
  sendmessage.value =
    '写一份大会的宣传文案:' +
    form.date1 +
    '到' +
    form.date2 +
    ',大会名称' +
    form.name +
    ',大会区域' +
    form.region +
    ',大会类型' +
    form.type +
    ',大会描述' +
    form.description
  // sendmessage.value = form.name
  if (sendmessage.value.trim() !== '') {
    ws.value.send(sendmessage.value.trim())
    sendmessage.value = '' // 清空消息输入框
    messages.value = '' //清空之前的文案
  }
}
onMounted(() => {
  connect()
})
</script>

<style scoped lang="scss">
.common-layout {
  background: url('/src/assets/images/bg_images/imgwall.png') no-repeat
    center/cover;
  padding-bottom: 0.375rem;
}
.el-card {
  width: 90%;
  margin: 1.25rem auto;
}

.el-aside {
  background-color: #fbfbfa;
  text-align: center;
  line-height: 90px;
  display: flex;
}
.book {
  height: 5rem;
  margin-left: 0.625rem;
  position: relative;
  .container {
    z-index: 2;
    position: absolute;
    width: 5rem;
    height: 2.5rem;
    margin: 0 auto;
    top: 0.875rem;
    border-radius: 0.125rem;
    background-color: white;
    overflow: hidden;
    transition: all 0.2s;
    box-shadow: 0.0625rem 0.0625rem 0.0625rem rgba(0, 0, 0, 0.1);
    .star {
      position: absolute;
      height: 0.375rem;
      width: 0.375rem;
      top: -0.375rem;
      right: 0.0625rem;
    }
    &:hover {
      background-color: #f8fafc;
      transform: translateY(-0.025rem) translateX(0.025rem);
      &::after {
        background: linear-gradient(to right, #adc9fd, #f8fafc);
      }
    }
    .back2 {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 0.125rem;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 0.1875rem;
      height: 100%;
      background-color: #0091ff;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0.175rem;
      height: 100%;
      width: 0.375rem;
      background-color: rgba(#0091ff, 0.04);
    }
    .card_container {
      .round {
        position: absolute;
        top: 0.25rem;
        left: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: #fbe8ca;
      }
      .b_card {
        position: absolute;
        top: 0.3125rem;
        left: 1rem;
        font-size: 0.275rem;
        font-weight: 700;
      }
      .g_card {
        position: absolute;
        top: 0.6875rem;
        left: 1rem;
        font-weight: 300;
        color: #9f849a;
        font-size: 0.175rem;
      }
    }
  }
  .back1,
  .back2 {
    position: absolute;
    width: 5rem;
    height: 2.5rem;
    margin: 0 auto;
    top: 0.875rem;
    border-radius: 0.125rem;
    background-color: #ffffff;
    box-shadow: 0.0625rem 0.0625rem 0.0625rem rgba(0, 0, 0, 0.1);
    transition: all 0.2s;
    transform-origin: top right;
  }
  .back1 {
    z-index: 1;
  }
  .back2 {
    z-index: 0;
  }
}
.el-main {
  background-color: #f3f3f3;
}

.chat-container {
  /* background-color: blue; */
  color: #00182e;
  /* 设置文字颜色为白色 */
  font-family: Arial, sans-serif;
  /* 设置字体为Arial */
}

.create-button {
  display: inline-block;
  vertical-align: middle;
}

.messages {
  overflow-y: auto;
  max-height: 8.75rem;
  flex: 2;
  font-size: 0.3rem; /* 添加字体大小样式 */
}
.content {
  font-size: 0.275rem;
  line-height: 0.4rem;
}
.title {
  text-align: center;
  color: #cac9c8;
  line-height: 0.625rem;
  font-size: 0.4rem;
  font-weight: 400;
  margin-bottom: 0.25rem;
}
</style>

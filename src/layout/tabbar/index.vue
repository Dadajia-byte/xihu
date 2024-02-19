<template>
  <div class="underframe" :style="`background-color: ${props.bgc};`">
    <el-menu
      default-active="1"
      class="el-menu-demo"
      mode="horizontal"
      background-color="transparent"
      font-size="16px"
      :text-color="props.textColor"
      style="font-weight: 700; border-bottom: none"
      :ellipsis="false"
      active-text-color="white"
    >
      <el-menu-item index="0">
        <img
          :src="setting.logo(props.logoNum)"
          alt=""
          style="width: 197px; height: 39px"
        />
      </el-menu-item>
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">大会云集</el-menu-item>
      <el-menu-item index="3">精彩活动</el-menu-item>
      <el-menu-item index="4">成果展示</el-menu-item>
      <el-menu-item index="5">大咖云集</el-menu-item>
      <el-sub-menu index="6">
        <template #title>合作伙伴</template>
        <el-menu-item index="6-1" style="color: #606266">展商合作</el-menu-item>
        <el-menu-item index="6-2" style="color: #606266">媒体合作</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="7">
        <template #title>关于大会</template>
        <el-menu-item index="7-1" style="color: #606266">大会介绍</el-menu-item>
        <el-menu-item index="7-2" style="color: #606266">参会指南</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="8" style="color: #ff0020">
        直播
        <!-- 直播图标 -->
        <el-icon
          style="
            width: 10px;
            height: 9px;
            color: #ff0000;
            transform: translateY(-5px);
          "
        >
          <Histogram />
        </el-icon>
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="9" style="padding: 0px">
        <el-icon>
          <Search color="#838383" />
        </el-icon>
      </el-menu-item>
      <el-sub-menu
        index="10"
        style="border-left: 2px solid #838383; margin: 12px 0px"
      >
        <template #title>{{ choosedLan }}</template>
        <el-menu-item
          index="10-1"
          @click="chooseLan('中文')"
          style="color: #606266"
        >
          中文
        </el-menu-item>
        <el-menu-item
          index="10-2"
          @click="chooseLan('ENG')"
          style="color: #606266"
        >
          ENG
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item style="padding: 0px">
        <el-button
          style="
            width: 120px;
            height: 42px;
            border-radius: 7px;
            color: #0d49df;
            padding-left: 5px;
            font-size: 15px;
          "
          @click="layoutSettingStore.dialogFormVisible = true"
        >
          <el-icon :size="22">
            <UserFilled />
          </el-icon>
          登录|注册
        </el-button>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting'
import { ref } from 'vue'
import useLayoutSettingStore from '@/store/setting'
let layoutSettingStore = useLayoutSettingStore()

const choosedLan = ref('中文')
let props = defineProps(['bgc', 'logoNum', 'textColor'])

const chooseLan = (Lan: string) => {
  return (choosedLan.value = Lan)
}
</script>
<script lang="ts">
export default {
  name: 'Tabbar',
}
</script>
<style scoped lang="scss">
.underframe {
  height: 62px;
  width: $tabbar-width;
  border-radius: 30px;

  .el-menu {
    margin-left: 60px;
    width: calc(1346px - 93px);
  }
}

.flex-grow {
  flex-grow: 1;
}
</style>

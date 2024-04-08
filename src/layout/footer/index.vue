<template>
  <div class="footer">
    <el-row class="row1">
      <el-col :span="2"></el-col>
      <el-col :span="5">
        <ul>
          <li class="firli"><a href="">指导单位</a></li>
          <li><a href="">浙江省互联网信息办公室</a></li>
          <li><a href="">浙江省经济与信息化厅</a></li>
          <li><a href="">浙江省公安厅</a></li>
          <li><a href="">浙江省发展与改革委员会</a></li>
          <li><a href="">浙江省通信管理局</a></li>
        </ul>
      </el-col>
      <el-col :span="5">
        <ul>
          <li class="firli"><a href="">主办单位</a></li>
          <li><a href="">杭州市人民政府</a></li>
        </ul>
      </el-col>
      <el-col :span="5">
        <ul>
          <li class="firli"><a href="">联合主办单位</a></li>
          <li><a href="">中国信息通信研究院</a></li>
          <li><a href="">中国网络空间研究院</a></li>
          <li><a href="">国家工业信息安全发展研究中心</a></li>
          <li><a href="">中国电子技术标准化研究院</a></li>
          <li><a href="">工业与信息化部教育与考试中心</a></li>
          <li><a href="">杭州市滨江区人民政府</a></li>
        </ul>
      </el-col>
      <el-col :span="5">
        <ul>
          <li class="firli"><a href="">主办单位</a></li>
          <li><a href="">杭州市互联网信息办公室</a></li>
          <li><a href="">杭州市经济与信息化局</a></li>
          <li><a href="">杭州市公安局</a></li>
          <li><a href="">杭州市发展与改革委员会</a></li>
          <li><a href="">浙江省网络与空间安全协会</a></li>
          <li><a href="">安恒信息</a></li>
        </ul>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
    <el-row class="row2">
      <el-col :span="2"></el-col>
      <el-col :span="6">
        <img :src="setting.logo(3)" alt="" />
      </el-col>
      <el-col :span="10">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="transparent"
          font-size=".2286rem"
          text-color="white"
          style="font-weight: 700; border-bottom: none"
          :ellipsis="false"
          active-text-color="white"
        >
          <div class="flex-grow" />
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">大会云集</el-menu-item>
          <el-menu-item index="3">精彩活动</el-menu-item>
          <el-menu-item index="4">成果展示</el-menu-item>
          <el-menu-item index="5">大咖云集</el-menu-item>
          <el-sub-menu index="6">
            <template #title>合作伙伴</template>
            <el-menu-item index="6-1" style="color: #606266">
              展商合作
            </el-menu-item>
            <el-menu-item index="6-2" style="color: #606266">
              媒体合作
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="7">
            <template #title>关于大会</template>
            <el-menu-item index="6-1" style="color: #606266">
              大会介绍
            </el-menu-item>
            <el-menu-item index="6-2" style="color: #606266">
              参会指南
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item index="8">
            直播
            <!-- 直播图标 -->
            <el-icon
              style="
                width: 0.1429rem;
                height: 0.1286rem;
                color: #ff0000;
                transform: translateY(-0.0714rem);
              "
            >
              <Histogram />
            </el-icon>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <el-row class="row3" style="font-size: 0.1714rem">
      <el-col :span="2"></el-col>
      <el-col :span="6"><a href="">隐私协议/服务条款</a></el-col>
      <el-col :span="3"><a href="">杭州安恒信息技术股份有限公司</a></el-col>
      <el-col :span="3"><a href="">浙ICP备09102757号-28</a></el-col>
      <el-col :span="3"><a href="">浙公网安备 33010802009170号</a></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting'
</script>
<script lang="ts">
export default {
  name: 'Footer',
}
</script>

<style scoped lang="scss">
.footer {
  height: 6.7rem;
  width: 100%;
  background: linear-gradient(to right, #457fca, #48c6ef);

  .row1 {
    padding-top: 0.6571rem;

    li {
      font-size: 0.1714rem;
      padding: 0.1rem 0rem;
    }

    .firli {
      padding-bottom: 0.3429rem;
      font-size: 0.3429rem;
    }
  }

  .row2 {
    padding-top: calc(67.2857rem - 66.5714rem);
  }

  .row3 {
    padding-top: calc(1.2714rem - 1.0143rem);
  }
}

.flex-grow {
  flex-grow: 1;
}
</style>

<template>
  <div>
    <div class="activity">
      <span class="divider">精彩活动</span>
      <div class="whole-content">
        <img src="" alt="" />
        <div class="activity-content">
          <div class="title">
            让“圈外人”关注网络安全，让“冷”科普做到“热”传播
          </div>
          <div class="content">
            5月5日 18:30
            “格致论道”是中国科学院计算机网络信息中心和中国科学院科学传播局联合主办的科学文化讲坛。致力于非凡思想的跨界交流，提倡以"格物致知"的精神探讨科技、教育、生活、未来的发展。
          </div>
          <div class="more">了解详情>></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.divider {
  display: flex;
  width: 280px;
  align-items: center;
  text-align: center;
  color: #fff;
  font-size: 30px;
  margin: 40px auto;
  font-weight: 700;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 3px solid #fff;
    margin: 0 10px;
  }
}

.activity {
  overflow: hidden; // 解决外边距合并
  width: 1440px;
  height: 600px;
  margin: 100px auto;
  background-color: #090a36;

  .whole-content {
    display: flex;
    justify-content: space-around;

    img {
      width: 684px;
      height: 442px;
      padding: 10px;
    }

    .activity-content {
      width: 684px;
      padding: 10px;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .title {
        width: 650px;
        font-weight: 700;
        font-size: 25px;
      }

      .content {
        width: 500px;
        padding-left: 10px;
        font-size: 20px;
        line-height: 35px;
        text-align: left;
      }

      .more {
        font-size: 15px;
        font-weight: 700;

        cursor: pointer;

        &:hover {
          color: #409eff;
        }
      }
    }
  }
}
</style>

<template>
  <div class="main">

    <div class="imgwall">
      <div class="header">
        <div class="left">
          <div class="icon">
            <svgIcon name="camera" style="height:.45rem;width: .45rem;"></svgIcon>
          </div>
          <div class="title">打卡拍照墙</div>
        </div>
        <div class="right">
          <el-upload class="upload-demo" action="/dev-api/images/save" :before-upload="beforeUpload"
            :show-file-list="false" :on-success="handleImgUpload">
            <el-button type="primary" style="height: .45rem; ">点击上传</el-button>
          </el-upload>
        </div>

      </div>
      <div class="img_container">
        <div class="img_item" v-for="(item, index) in PictureStore.imgList" :key="index"
          :style="`background:url(${item.imageUrl}) no-repeat center/cover`">
          <div class="overlay" @click="preview(index)">
            <el-icon>
              <ZoomIn />
            </el-icon>
          </div>
        </div>
      </div>
      <el-dialog v-model="dialogVisible" :show-close="false">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
    <div class="bg"></div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import usePictureStore from '@/store/modules/picture';
import { ElMessage } from 'element-plus';
import type { UploadProps } from 'element-plus'
let PictureStore = usePictureStore()

// 预览窗格相关
const dialogVisible = ref(false)
const dialogImageUrl = ref('')
const preview = (index: any) => {
  dialogImageUrl.value = PictureStore.imgList[index].imageUrl
  dialogVisible.value = true
}
//图片上传之前的校验
const beforeUpload: UploadProps['beforeUpload'] = (rawFile: any) => {
  if (
    rawFile.type == 'image/png' ||
    rawFile.type == 'image/jpeg' ||
    rawFile.type == 'image/jpg'
  ) {
    if (rawFile.size / 1024 / 1024 < 4) {
      return true
    } else {
      ElMessage({
        type: 'error',
        message: '上传图片大小不能超过 4MB!',
      })
      return false
    }
  }
}
//图片上传成功后
const handleImgUpload: UploadProps['onSuccess'] = async (response: any) => {
  // response:即为上传图片post请求服务器返回的数据
  console.log(response);
  if (response.code === 0) {

    ElMessage({
      type: 'success',
      message: '上传成功',
    })
    await PictureStore.getPictureList()
  }

}
// 初始化图片store
const initImg = async () => {
  PictureStore.getPictureData.num = '-1'
  PictureStore.getPictureData.type = ''
  await PictureStore.getPictureList()
}
onMounted(async () => {
  await initImg()

})


</script>

<style lang="scss">
.main {
  min-height: 18.75rem;
  position: relative;
  background: url('/src/assets/images/bg_images/imgwall.png') no-repeat center/cover;

  .bg {

    z-index: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}

.imgwall {
  position: relative;
  z-index: 5;
  width: 22.5rem;
  box-shadow: 0px 0px .125rem .025rem rgba(0, 0, 0, 0.1);
  border-radius: .0625rem;
  margin: .3125rem auto;
  background-color: #fff;

  .header {
    padding: .25rem .25rem 0 .25rem;
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
    }

    .icon {
      margin-left: .3125rem;
      position: relative;

      &::before {
        position: absolute;
        left: -0.25rem;
        content: '';
        width: .125rem;
        height: .45rem;
        background: linear-gradient(to bottom, $theme-color-blue, $theme-color-green);
      }


    }

    .title {
      margin-left: .125rem;
      @include linear-txt;
      font-size: .45rem;
      font-weight: bold;
    }
  }

  .img_container {
    width: 22.5rem;
    padding: .25rem;
    display: flex;
    flex-wrap: wrap;

    .img_item {
      box-sizing: border-box;
      width: 5.1875rem;
      height: 6.875rem;
      margin-right: .3125rem;
      margin-bottom: .3125rem;
      background: skyblue;
      box-shadow: 0px 0px .0625rem .025rem rgba(0, 0, 0, 0.1);
      position: relative;


    }

    .overlay {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: .45rem;
      cursor: pointer;
      transition: opacity .3s ease-out;

      &:hover {
        opacity: 1;
      }
    }

  }
}
</style>
<template>
  <div>
    <el-card class="box-card">
      <el-form
        label-width="2.14rem"
        ref="form"
        style="width: 7rem"
        :model="userStore.userData"
      >
        <el-upload
          class="avatar-uploader"
          action="http://8.130.145.109:8080/dev-api/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          style="margin-left: 3.125rem; margin-bottom: 0.25rem"
          :disabled="!isEdit"
        >
          <img
            v-if="userStore.userData.avatar"
            :src="userStore.userData.avatar"
            class="avatar"
          />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
        <el-form-item label="账号:">
          <div v-show="!isEdit">{{ userStore.userData.account }}</div>
          <div class="gray" v-show="isEdit">
            {{ userStore.userData.account }}
          </div>
        </el-form-item>
        <el-form-item label="手机号:">
          <div v-show="!isEdit">{{ userStore.userData.phone }}</div>
          <div class="gray" v-show="isEdit">{{ userStore.userData.phone }}</div>
        </el-form-item>
        <el-form-item label="用户名:">
          <div v-show="!isEdit">{{ userStore.userData.username }}</div>
          <el-input
            v-if="isEdit"
            v-model="userStore.userData.username"
          ></el-input>
        </el-form-item>
        <el-form-item label="性别:">
          <el-radio-group v-model="userStore.userData.sex" :disabled="!isEdit">
            <el-radio label="男">
              <el-icon>
                <Male color="#019dff" />
              </el-icon>
              男
            </el-radio>
            <el-radio label="女">
              <el-icon>
                <Female color="#fc5561" />
              </el-icon>
              女
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="生日:">
          <el-date-picker
            v-model="userStore.userData.birth"
            type="date"
            placeholder="Pick a date"
            style="width: 100%"
            :disabled="!isEdit"
          />
        </el-form-item>
        <el-form-item label="职业">
          <div v-show="!isEdit">
            {{ userStore.userData.position || '暂无信息' }}
          </div>
          <el-select
            v-show="isEdit"
            placeholder="请选择你的职业"
            v-model="userStore.userData.position"
          >
            <el-option label="政府机构工作人员" value="政府机构工作人员" />
            <el-option label="企业职员" value="企业职员" />
            <el-option label="教育工作者" value="教育工作者" />
            <el-option label="学生" value="学生" />
            <el-option label="媒体工作者" value="媒体工作者" />
            <el-option label="科研工作者" value="科研工作者" />
            <el-option label="医务工作者" value="医务工作者" />
            <el-option label="自由职业" value="自由职业" />
            <el-option label="其他" value="其他" />
          </el-select>
        </el-form-item>
        <el-form-item label="公司/单位:">
          <div v-show="!isEdit">
            {{ userStore.userData.company || '暂无信息' }}
          </div>
          <el-input
            v-if="isEdit"
            v-model="userStore.userData.company"
            placeholder="请填写公司/单位"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱:">
          <div v-show="!isEdit">
            {{ userStore.userData.email || '暂无信息' }}
          </div>
          <el-input
            v-model="userStore.userData.email"
            v-if="isEdit"
            placeholder="请填写你的邮箱"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button
        v-show="!isEdit"
        @click="isEdit = true"
        style="margin-left: 3.75rem"
      >
        更改信息
      </el-button>
      <el-button v-show="isEdit" style="margin-left: 3.75rem" @click="cancel">
        取消
      </el-button>
      <el-button v-show="isEdit" @click="save">保存</el-button>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useUserStore from '@/store/modules/user'
import { ElMessage, UploadProps } from 'element-plus'
let userStore = useUserStore()
let form = ref()
let isEdit = ref(false)
const cancel = async () => {
  await userStore.userInfo()
  isEdit.value = false
}
const save = async () => {
  isEdit.value = false
  await userStore
    .updateUser()
    .then(() => {
      ElMessage.success('修改成功')
    })
    .catch((err) => {
      ElMessage.error(err)
    })
}
// 上传图片组件->上传图片之前触发的钩子函数
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile: any) => {
  // 钩子是在图片上传成功之前触发，上传文件之前可以约束文件的大小
  // 要求：上传文件格式png|jpg|gif 4M
  if (
    rawFile.type == 'image/png' ||
    rawFile.type == 'image/jpeg' ||
    rawFile.type == 'image/gif'
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
  } else {
    ElMessage({
      type: 'error',
      message: '上传图片只能是 png、jpg、gif 格式之一！',
    })
    return false
  }
}
// 图片上传成功之后的钩子
const handleAvatarSuccess: UploadProps['onSuccess'] = (response: any) => {
  // response:即为上传图片post请求服务器返回的数据
  userStore.userData.avatar = response
  // 图片上传成功，清除对应图片校验结果
  form.value.clearValidate()
}
</script>

<style scoped>
.box-card {
  width: 140%;
  margin-top: 0.125rem;
}

.gray {
  color: #999;
}

.avatar-uploader .avatar {
  width: 2.225rem;
  height: 2.225rem;
  display: block;
}

.avatar-uploader .el-upload {
  border: 0.0125rem dashed var(--el-border-color);
  border-radius: 0.075rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 0.35rem;
  color: #8c939d;
  width: 2.225rem;
  height: 2.225rem;
  text-align: center;
}
</style>

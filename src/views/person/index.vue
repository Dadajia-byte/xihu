<template>
    <div class="container">
        <el-card class="box-card">
            <el-row>
                <el-col class="left" :span="5">
                    <el-card>
                        <img class="avatar" :src="userStore.userData.avatar" />
                        <div class="username">{{ userStore.userData.username }}</div>
                        <el-menu class="el-menu-vertical" style="border: none;" router>
                            <el-menu-item index="/home">
                                <el-icon>
                                    <House />
                                </el-icon>
                                首页
                            </el-menu-item>
                            <el-menu-item index="/person/setting">
                                <el-icon>
                                    <User />
                                </el-icon>个人信息</el-menu-item>
                            <el-menu-item index="/person/calendar">
                                <el-icon>
                                    <Calendar />
                                </el-icon>
                                我的日程
                            </el-menu-item>
                            <el-menu-item index="/person/subscribe">
                                <el-icon>
                                    <EditPen />
                                </el-icon>
                                我的订阅</el-menu-item>
                            <el-menu-item index="/person/point">
                                <el-icon>
                                    <Postcard />
                                </el-icon>
                                我的积分
                            </el-menu-item>
                            <el-menu-item index="/person/history">
                                <el-icon>
                                    <Memo />
                                </el-icon>
                                观看历史
                            </el-menu-item>
                        </el-menu>
                        <el-button plain round class="logout" @click="Logout">退出登录</el-button>
                    </el-card>
                </el-col>
                <el-col :span="1"></el-col>
                <el-col class="right" :span="12">
                    <Main></Main>
                </el-col>
            </el-row>

        </el-card>
    </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import useUserStore from '@/store/modules/user';
import useLayoutSettingStore from '@/store/setting';
import Main from './main/index.vue'
let userStore = useUserStore()
let layoutSettingStore = useLayoutSettingStore()
let $router = useRouter()
onMounted(() => {
    userStore.userInfo()
})
const Logout = async () => {
    // 退出登录成功后返回首页
    layoutSettingStore.isLog = false
    await userStore.logout().then(() => {
        $router.push('/home')
        ElMessage.success('退出登录成功')
    })
}
</script>

<style lang="scss" scoped>
body {
    background-color: #f9f9f9;
}

.box-card {
    width: 80%;
    margin: 1.875rem auto 0;
    height: 37.5rem;

    .left {
        display: flex;
        justify-content: center;

        .avatar {
            width: 1.875rem;
            height: 1.875rem;
            border-radius: 50%;
        }

        .username {
            width: fit-content;
            margin: .1875rem auto .375rem;
        }

        .logout {
            margin: .25rem .375rem 0;
        }
    }
}
</style>

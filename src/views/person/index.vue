<template>
    <div class="container">
        <el-card class="box-card">
            <el-col class="left" :span="5">
                <el-card>
                    <img class="avatar" :src="userStore.regForm.avatar" />
                    <div class="username">用户名</div>
                    <el-menu class="el-menu-vertical">

                    </el-menu>
                </el-card>
            </el-col>
            <el-col class="right" :span="13"></el-col>
        </el-card>
    </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import useUserStore from '@/store/modules/user';
let userStore = useUserStore();

onMounted(() => {
    userStore.checkUser();
})
</script>

<style lang="scss" scoped>
body {
    background-color: #f9f9f9;

}

.box-card {
    width: 80%;
    margin: 1.25rem auto 0;
    height: 37.5rem;

    .left {
        display: flex;
        justify-content: center;

        .avatar {
            width: 2.3125rem;
            height: 2.3125rem;
            border-radius: 50%;
        }

        .username {
            width: fit-content;
            margin: .125rem auto .0625rem;
        }
    }
}
</style>
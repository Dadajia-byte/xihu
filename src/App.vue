<script setup lang="ts">
import '@/styles/index.scss'
import useLayoutSettingStore from './store/setting'
let layoutSettingStore = useLayoutSettingStore()
</script>

<template>
  <div>
    <router-view v-if="!layoutSettingStore.isLoading"></router-view>
  </div>
  <Load v-if="layoutSettingStore.isLoading"></Load>
</template>

<style scoped></style>

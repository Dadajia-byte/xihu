<template>
  <div class="subItem">
    <activitycard
      v-for="item in activityStore.lists"
      :key="item.id"
      :data="item"
    ></activitycard>
  </div>
</template>
<script setup lang="ts">
import activitycard from './activitycard.vue'
import { onMounted } from 'vue'
import useActivityStore from '@/store/modules/activity'

let activityStore = useActivityStore()
const { getActivty } = activityStore

onMounted(async () => {
  activityStore.filterItem.pageSize = 1000
  await getActivty()
  activityStore.lists = activityStore.lists.filter((item) => item.isSub == 1)
})
</script>

<style scoped>
.subItem {
  display: flex;
  flex-wrap: wrap;
}
</style>

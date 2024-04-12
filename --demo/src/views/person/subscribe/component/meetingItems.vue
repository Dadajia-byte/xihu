<template>
  <div class="subItem">
    <meetingcard
      v-for="item in meetingStore.agendaItems"
      :key="item.id"
      :data="item"
    ></meetingcard>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import meetingcard from './meetingcard.vue'
import useMeetingStore from '@/store/modules/meeting'

let meetingStore = useMeetingStore()
const { getAgenda } = meetingStore

onMounted(async () => {
  meetingStore.reqData.date = ''
  await getAgenda()
  meetingStore.agendaItems = meetingStore.agendaItems?.filter(
    (item) => item.isSub == 1,
  )
  meetingStore.meetingNum = meetingStore.agendaItems.length
})
</script>

<style scoped>
.subItem {
  display: flex;
  flex-wrap: wrap;
}
</style>

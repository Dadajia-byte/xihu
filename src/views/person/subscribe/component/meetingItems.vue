<template>
  <div class="subItem">
    <meetingcard v-for="item in subAgenda" :key="item.id" :data="item"></meetingcard>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import meetingcard from './meetingcard.vue'
import useMeetingStore from '@/store/modules/meeting';

let meetingStore = useMeetingStore();
const { getAgenda} = meetingStore;

const subAgenda = computed(()=>{
  return meetingStore.agendaItems?.filter(item=>item.isSub==1)
})

const agendaSubNum = computed(()=>{
  return subAgenda.value?.length
})

defineExpose({agendaSubNum})
onMounted(async() => {
  await getAgenda()
  console.log('123',agendaSubNum.value);
  
  
});
</script>

<style scoped>
.subItem {
  display: flex;
  flex-wrap: wrap;
}
</style>

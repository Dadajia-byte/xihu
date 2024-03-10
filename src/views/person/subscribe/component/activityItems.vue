<template>
  <div class="subItem">
    <activitycard v-for="item in subActivity" :key="item.id" :data="item"></activitycard>
  </div>
</template>
<script setup lang="ts">
import activitycard from './activitycard.vue'
import { computed, onMounted } from 'vue';
import useActivityStore from '@/store/modules/activity';

let activityStore = useActivityStore();
const {getActivty} = activityStore;

const subActivity = computed(()=>{
  return activityStore.lists?.filter(item=>item.isSub==1)
})

const activitySubNum = computed(()=>{
  return subActivity.value?.length
})

defineExpose({activitySubNum})
onMounted(async() => {
  activityStore.filterItem.pageSize = 1000;
  await getActivty()  
});
</script>

<style scoped>
.subItem {
  display: flex;
  flex-wrap: wrap;
}
</style>

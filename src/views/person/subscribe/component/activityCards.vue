<template>
  <div class="subItem">
    <activtyItems v-for="item in items"></activtyItems>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import activtyItems from './activityItems.vue'
import useMeetingStore from '@/store/modules/meeting';
let meetingStore = useMeetingStore();


onMounted(()=>{

})
</script>

<style scoped>
.subItem {
  display: flex;
  flex-wrap: wrap;
}
</style>

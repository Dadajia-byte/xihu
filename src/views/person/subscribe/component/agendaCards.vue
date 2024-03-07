<template>
  <div class="subItem">
    <AgendaItems></AgendaItems>
    <AgendaItems></AgendaItems>
    <AgendaItems></AgendaItems>
  </div>
</template>

<script setup lang="ts">
import AgendaItems from './agendaItems.vue'
</script>

<style scoped>
.subItem {
  display: flex;
  flex-wrap: wrap;
}
</style>

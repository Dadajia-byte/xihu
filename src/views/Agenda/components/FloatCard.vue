<template>
  <div class="float-card-box">
    <div
      class="bor"
      v-for="bor in bors"
      :key="bor"
      :style="getBorStyle(bor)"
    ></div>
    <span>{{ content }}</span>
  </div>
</template>

<script setup>
const bors = ['lt', 'lb', 'tl', 'tr', 'rt', 'rb', 'bl', 'br']
const props = defineProps({
  content: {
    type: String,
    default: '',
  },
})

const getBorStyle = (bor) => {
  const styles = {}
  bor[0] === 'l'
    ? (styles.left = '-10px')
    : bor[0] === 'r'
      ? (styles.right = '-10px')
      : bor[0] === 't'
        ? (styles.top = '-10px')
        : bor[0] === 'b'
          ? (styles.bottom = '-10px')
          : ''
  bor[1] === 't'
    ? (styles.top = '-10px')
    : bor[1] === 'b'
      ? (styles.bottom = '-10px')
      : bor[1] === 'l'
        ? (styles.left = '-10px')
        : bor[1] === 'r'
          ? (styles.right = '-10px')
          : ''
  styles.width = '20px'
  styles.height = '20px'
  bor[0] === 'l' || bor[0] === 'r'
    ? (styles.width = '2px')
    : (styles.height = '2px')

  return styles
}
</script>

<style scoped lang="scss">
.float-card-box {
  width: 4rem;
  height: 2.5rem;
  background-color: rgba(255, 255, 255, 0.241);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .bor {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.461);
  }
  span {
    // @include linear-txt;
    color: white;
    font-size: 0.5rem;
    font-weight: 300;
  }
}
</style>

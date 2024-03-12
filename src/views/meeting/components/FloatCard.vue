<template>
  <div>
    <div class="float-card-box">
      <div
        class="bor"
        v-for="bor in bors"
        :key="bor"
        :style="getBorStyle(bor)"
      ></div>
      <span>{{ content }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const bors = ['lt', 'lb', 'tl', 'tr', 'rt', 'rb', 'bl', 'br']
// @ts-ignore
const props = defineProps({
  content: {
    type: String,
    default: '',
  },
})

// @ts-ignore
const getBorStyle = (bor: any) => {
  const styles = {}
  bor[0] === 'l'
    ? // @ts-ignore
      (styles.left = '-10px')
    : bor[0] === 'r'
      ? // @ts-ignore
        (styles.right = '-10px')
      : bor[0] === 't'
        ? // @ts-ignore
          (styles.top = '-10px')
        : bor[0] === 'b'
          ? // @ts-ignore
            (styles.bottom = '-10px')
          : ''
  bor[1] === 't'
    ? // @ts-ignore
      (styles.top = '-10px')
    : bor[1] === 'b'
      ? // @ts-ignore
        (styles.bottom = '-10px')
      : bor[1] === 'l'
        ? // @ts-ignore
          (styles.left = '-10px')
        : bor[1] === 'r'
          ? // @ts-ignore
            (styles.right = '-10px')
          : ''
  // @ts-ignore
  styles.width = '20px'
  // @ts-ignore
  styles.height = '20px'
  bor[0] === 'l' || bor[0] === 'r'
    ? // @ts-ignore
      (styles.width = '2px')
    : // @ts-ignore
      (styles.height = '2px')
  return styles
}
</script>

<script lang="ts">
export default {
  name: 'FloatCard',
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

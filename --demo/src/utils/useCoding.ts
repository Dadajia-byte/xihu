import { ref } from 'vue'
const wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const useCoding = (str: string) => {
  const curStrs = ref<string[]>([])
  const letters = str.split('')
  let index = 0
  let isBegin = true

  const startCoding = async () => {
    while (isBegin) {
      if (index >= letters.length) {
        while (index > 0) {
          curStrs.value.pop()
          index--
          await wait(100)
        }
      }
      curStrs.value.push(letters[index])
      index++
      await wait(300)
    }
  }

  const destroyCoding = () => {
    curStrs.value = []
    isBegin = false
  }

  return {
    curStrs,
    startCoding,
    destroyCoding,
  }
}

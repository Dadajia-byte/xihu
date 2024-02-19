type UpdateNumberCallback = (num: number) => void
const increseNum = (
  updateFn: UpdateNumberCallback,
  finalNum: number,
  time: number = 1000,
) => {
  let rate = 31
  let num = 1
  // 步长
  let step = finalNum / (time / rate)
  let timer = setInterval(() => {
    num = Math.round(num + step)
    if (num > finalNum) {
      // 有可能加过头
      num = finalNum
      clearInterval(timer)
    }
    updateFn(num)
  }, rate)
}

export default increseNum

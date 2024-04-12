import useLayoutSettingStore from '@/store/setting'
let layoutSettingStore = useLayoutSettingStore()

export default () => {
  if (layoutSettingStore.isLog == false) {
    layoutSettingStore.dialogFormVisible = true
    return false
  }
  return true
}

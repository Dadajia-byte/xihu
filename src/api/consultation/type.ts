// 有关议程的数据
export interface IAgenda {
  date: string
  items: IAgendaItem[]
}

export interface IAgendaItem {
  id: number
  agendaName: string
  position: string
  content: string
  time: string
  type: string
  isSub: boolean // 该用户是否订阅 true代表已订阅
  /** 一些别的需要的功能
   * 回放的链接
   * ……
   *  */
}

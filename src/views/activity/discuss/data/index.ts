import { ref } from 'vue'

let commentList = ref([
  {
    topicId: '0',
    btnShow: false,
    index: '0',
    replyComment: '',
    myName: 'Lana Del Rey',
    myHeader:
      'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
    myId: 19870621,
    to: '',
    toId: -1,
    comments: [
      {
        name: 'Lana Del Rey',
        id: 19870621,
        headImg:
          'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
        content: '我发布一张新专辑Norman Fucking Rockwell,大家快来听啊',
        time: '2019年9月16日 18:43',
        commentNum: 2,
        like: 15,
        inputShow: false,
        reply: [
          {
            from: 'Taylor Swift',
            fromId: 19891221,
            fromHeadImg:
              'https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg',
            to: 'Lana Del Rey',
            toId: 19870621,
            content: '我很喜欢你的新专辑！！',
            time: '2019年9月16日 18:43',
            commentNum: 1,
            like: 15,
            inputShow: false,
          },
          {
            from: 'Ariana Grande',
            fromId: 1123,
            fromHeadImg:
              'https://ae01.alicdn.com/kf/Hf6c0b4a7428b4edf866a9fbab75568e6U.jpg',
            to: 'Lana Del Rey',
            toId: 19870621,
            content: '别忘记宣传我们的合作单曲啊',
            time: '2019年9月16日 18:43',
            commentNum: 0,
            like: 5,
            inputShow: false,
          },
        ],
      },
      {
        name: 'Taylor Swift',
        id: 19891221,
        headImg:
          'https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg',
        content: '我发行了我的新专辑Lover',
        time: '2019年9月16日 18:43',
        commentNum: 1,
        like: 5,
        inputShow: false,
        reply: [
          {
            from: 'Lana Del Rey',
            fromId: 19870621,
            fromHeadImg:
              'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
            to: 'Taylor Swift',
            toId: 19891221,
            content: '新专辑和speak now 一样棒！',
            time: '2019年9月16日 18:43',
            commentNum: 25,
            like: 5,
            inputShow: false,
          },
        ],
      },
      {
        name: 'Norman Fucking Rockwell',
        id: 20190830,
        headImg:
          'https://ae01.alicdn.com/kf/Hdd856ae4c81545d2b51fa0c209f7aa28Z.jpg',
        content: 'Plz buy Norman Fucking Rockwell on everywhere',
        time: '2019年9月16日 18:43',
        commentNum: 0,
        like: 5,
        inputShow: false,
        reply: [],
      },
    ],
  },
  {
    topicId: '1',
    btnShow: false,
    index: '0',
    replyComment: '',
    myName: 'Lana Del Rey',
    myHeader:
      'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
    myId: 19870621,
    to: '',
    toId: -1,
    comments: [
      {
        name: 'Lana Del Rey',
        id: 19870621,
        headImg:
          'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
        content: '我发布一张新专辑Norman Fucking Rockwell,大家快来听啊',
        time: '2019年9月16日 18:43',
        commentNum: 2,
        like: 15,
        inputShow: false,
        reply: [
          {
            from: 'Taylor Swift',
            fromId: 19891221,
            fromHeadImg:
              'https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg',
            to: 'Lana Del Rey',
            toId: 19870621,
            content: '我很喜欢你的新专辑！！',
            time: '2019年9月16日 18:43',
            commentNum: 1,
            like: 15,
            inputShow: false,
          },
        ],
      },

      {
        name: 'Norman Fucking Rockwell',
        id: 20190830,
        headImg:
          'https://ae01.alicdn.com/kf/Hdd856ae4c81545d2b51fa0c209f7aa28Z.jpg',
        content: 'Plz buy Norman Fucking Rockwell on everywhere',
        time: '2019年9月16日 18:43',
        commentNum: 0,
        like: 5,
        inputShow: false,
        reply: [],
      },
    ],
  },
  {
    topicId: '2',
    btnShow: false,
    index: '0',
    replyComment: '',
    myName: 'Lana Del Rey',
    myHeader:
      'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
    myId: 19870621,
    to: '',
    toId: -1,
    comments: [
      {
        name: 'Lana Del Rey',
        id: 19870621,
        headImg:
          'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
        content: '我发布一张新专辑Norman Fucking Rockwell,大家快来听啊',
        time: '2019年9月16日 18:43',
        commentNum: 2,
        like: 15,
        inputShow: false,
        reply: [
          {
            from: 'Taylor Swift',
            fromId: 19891221,
            fromHeadImg:
              'https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg',
            to: 'Lana Del Rey',
            toId: 19870621,
            content: '我很喜欢你的新专辑！！',
            time: '2019年9月16日 18:43',
            commentNum: 1,
            like: 15,
            inputShow: false,
          },
          {
            from: 'Ariana Grande',
            fromId: 1123,
            fromHeadImg:
              'https://ae01.alicdn.com/kf/Hf6c0b4a7428b4edf866a9fbab75568e6U.jpg',
            to: 'Lana Del Rey',
            toId: 19870621,
            content: '别忘记宣传我们的合作单曲啊',
            time: '2019年9月16日 18:43',
            commentNum: 0,
            like: 5,
            inputShow: false,
          },
        ],
      },
    ],
  },
  {
    topicId: '3',
    btnShow: false,
    index: '0',
    replyComment: '',
    myName: 'Lana Del Rey',
    myHeader:
      'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
    myId: 19870621,
    to: '',
    toId: -1,
    comments: [
      {
        name: 'Lana Del Rey',
        id: 19870621,
        headImg:
          'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
        content: '我发布一张新专辑Norman Fucking Rockwell,大家快来听啊',
        time: '2019年9月16日 18:43',
        commentNum: 2,
        like: 15,
        inputShow: false,
        reply: [
          {
            from: 'Taylor Swift',
            fromId: 19891221,
            fromHeadImg:
              'https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg',
            to: 'Lana Del Rey',
            toId: 19870621,
            content: '我很喜欢你的新专辑！！',
            time: '2019年9月16日 18:43',
            commentNum: 1,
            like: 15,
            inputShow: false,
          },
          {
            from: 'Ariana Grande',
            fromId: 1123,
            fromHeadImg:
              'https://ae01.alicdn.com/kf/Hf6c0b4a7428b4edf866a9fbab75568e6U.jpg',
            to: 'Lana Del Rey',
            toId: 19870621,
            content: '别忘记宣传我们的合作单曲啊',
            time: '2019年9月16日 18:43',
            commentNum: 0,
            like: 5,
            inputShow: false,
          },
        ],
      },
    ],
  },
  {
    topicId: '4',
    btnShow: false,
    index: '0',
    replyComment: '',
    myName: 'Lana Del Rey',
    myHeader:
      'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
    myId: 19870621,
    to: '',
    toId: -1,
    comments: [
      {
        name: 'Lana Del Rey',
        id: 19870621,
        headImg:
          'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
        content: '我发布一张新专辑Norman Fucking Rockwell,大家快来听啊',
        time: '2019年9月16日 18:43',
        commentNum: 2,
        like: 15,
        inputShow: false,
        reply: [
          {
            from: 'Taylor Swift',
            fromId: 19891221,
            fromHeadImg:
              'https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg',
            to: 'Lana Del Rey',
            toId: 19870621,
            content: '我很喜欢你的新专辑！！',
            time: '2019年9月16日 18:43',
            commentNum: 1,
            like: 15,
            inputShow: false,
          },
          {
            from: 'Ariana Grande',
            fromId: 1123,
            fromHeadImg:
              'https://ae01.alicdn.com/kf/Hf6c0b4a7428b4edf866a9fbab75568e6U.jpg',
            to: 'Lana Del Rey',
            toId: 19870621,
            content: '别忘记宣传我们的合作单曲啊',
            time: '2019年9月16日 18:43',
            commentNum: 0,
            like: 5,
            inputShow: false,
          },
        ],
      },
    ],
  },
  {
    topicId: '5',
    btnShow: false,
    index: '0',
    replyComment: '',
    myName: 'Lana Del Rey',
    myHeader:
      'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
    myId: 19870621,
    to: '',
    toId: -1,
    comments: [
      {
        name: 'Lana Del Rey',
        id: 19870621,
        headImg:
          'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
        content: '我发布一张新专辑Norman Fucking Rockwell,大家快来听啊',
        time: '2019年9月16日 18:43',
        commentNum: 2,
        like: 15,
        inputShow: false,
        reply: [
          {
            from: 'Taylor Swift',
            fromId: 19891221,
            fromHeadImg:
              'https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg',
            to: 'Lana Del Rey',
            toId: 19870621,
            content: '我很喜欢你的新专辑！！',
            time: '2019年9月16日 18:43',
            commentNum: 1,
            like: 15,
            inputShow: false,
          },
          {
            from: 'Ariana Grande',
            fromId: 1123,
            fromHeadImg:
              'https://ae01.alicdn.com/kf/Hf6c0b4a7428b4edf866a9fbab75568e6U.jpg',
            to: 'Lana Del Rey',
            toId: 19870621,
            content: '别忘记宣传我们的合作单曲啊',
            time: '2019年9月16日 18:43',
            commentNum: 0,
            like: 5,
            inputShow: false,
          },
        ],
      },
    ],
  },
])
export default commentList.value

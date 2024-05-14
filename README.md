# 西湖论剑数字平台 - 文档说明（前端）

### 技术栈

**vue3** + **vite** + **element-plus** + **scss** + **pinia** + **ts**

### 文件目录简要

- .husky：格式化/commit提交 钩子
- public：图标、标志性图片
- scripts：pnpm版本要求
- src：
  - api：接口
  - assets：静态资源存放处
  - components：组件
  - routers：路由
  - store：pinia 仓库
  - styles：样式
    - index.scss：全局样式
    - reset.scss：重置样式
    - variable.scss：全局变量
  - utils：封装方法
  - views：各页面 index
  - App.vue：
  - main.ts：入口文件

### 模块概要

- **（模块一）登录页面**
  - 手机号登录：需要输入手机号、短信验证码、图形验证码
  - 账号登录：需要输入手机号、密码、图形验证码，允许记住账号和密码，可以通过手机号找回密码
  - 可以使用微信扫码登录和微博登录
- **（模块二）注册页面**
  - 需要输入手机号、短信验证码、图形验证码
- **（模块三）创建用户**
  - 可以自己上传头像，或者使用默认的4个头像之一（最好可以根据填写的性别匹配默认的男女头像）
  - 需要填写性别、用户名（不能重复）、职业、公司、邮箱（要求符合邮箱格式）
  - 两次输入确认设置密码
- **（模块四）个人中心**
  - 允许更改用户的头像、用户名、邮箱、公司、职业
  - 手机号和性别不允许修改
  - 可以查看订阅的议程、精彩活动，以及自己订阅的日程安排
  - 可以通过完成任务得积分，用积分兑换商品
  - 可以查看自己的观看历史，每个视频显示观看的进度百分比
- **（模块五）大会议程展示**
  - 需要显示每项议程的名称、时间、地点、所属类型（主论坛、平行论坛……）
  - 可以订阅、取消议程
  - 可以查看自己订阅的日程安排
- **（模块六）精彩活动展示**
  - 显示每个活动的图片和信息
  - 可以通过点击查看活动详情，并且订阅活动
- **（模块七）成果展示**
  - 展示大会白皮书、新品发布、书籍的图片和信息
  - 可以点击下载白皮书
- **（模块八）大咖展示**
  - 展示专家委员会和演讲嘉宾的头像和介绍
  - 通过鼠标悬浮可以查看部分嘉宾出席的论坛和时间
  - 可以检索嘉宾的姓名，也可以通过筛选日期检索嘉宾
  - 可以订阅嘉宾出席的会议议程，也可以查看部分嘉宾的演讲视频
- **（模块九）合作伙伴展示**
  - 分成展商合作、媒体合作两个子页面
  - 展示合作伙伴的介绍宣传视频
  - 展示合作的展商和媒体logo，可以点击查看合作展商的详细信息
- **（模块十）大会介绍**
  - 展示大会的宣传视频和信息、亮点
  - 展示往届的大会，可以点击链接跳转
- **（模块十一）参会指南**
  - 展示大会场馆、大会交通、酒店住宿、大会签到、联系我们的信息
  - 增加一个二级导航条，可以选择子模块跳转查看
- **（模块十二）直播页面**(待完成)
  - 借助第三方直播平台接口进行直播，同时展示会议直播的具体流程
  - 可以对直播点赞、评论和分享
  - 展示其他论坛的会议直播，同时可以进行检索
- **（模块十三）评论**（待完成）
  - 分为“最热”和“最新”两个板块
  - 可以查看评论时间、内容，也可以发表评论
  - 可以回复、点赞他人的评论

### 性能优化

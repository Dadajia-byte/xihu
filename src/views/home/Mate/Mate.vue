<template>
  <div>
    <span class="divider">合作伙伴</span>
    <Mate :mateDatas="mateDatas"></Mate>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Mate from './component/MateComponent.vue'

const mateDatas = ref([
  {
    title: '战略合作媒体',
    logoData: [
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/60234dda9f664775a5b991bd8412dca1.png',
        companyUrl: '',
      },
    ],
  },
  {
    title: '新闻媒体',
    logoData: [
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/5dd30797a95541528532b0abf7d3cdba.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/5c64dfd9685d4ea0b48a4df497a28669.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/e0ac725f69aa45229e72e8c451393147.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/1ef7fe346f28471a89176ab96cc0f15d.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/03bf8c57aff1466ebf866454df40a42d.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/0347a02665f84bb58b637fc403b5a047.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/77fc901c76c947db8c9e352f2e0bc374.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/11ab86f796b3494098c73e2515bc64e1.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/f03f89c469da43d3a8290d26582f1fdc.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/6e9a1e0aa2254b918c24816d67e3adc1.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/b9706366768d40afb9c5d3352dbbb3cd.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/c9337b3e90e044dba26621055079f877.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/19cf02f5c00e446ba609d7ef66628b10.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/0744a131e3314cbc812996c8b1b4f5c4.png',
        companyUrl: '',
      },
    ],
  },
  {
    title: '生态合作媒体',
    logoData: [
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/ae832a31047749299bd504e6070d487a.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/94df6244d6b04a91b3e8545844bce830.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/d79ec14ff65b4af19b8439659668fd19.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/73bd035a85dd43a988a928d0557818d4.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/5739d4caa7214beaa27cc66d10644a62.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/d86aad180ee14acb95d1df723414aec2.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/2e88c33068c04d31a5bb9599c22382a0.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/a39af7377bbb4860809ab761137bc8ea.png',
        companyUrl: '',
      },
      {
        logoUrl:
          'https://img2023.gcsis.cn/2023/4/bce6aa664cd44e76af59ba89e4d4f04d.png',
        companyUrl: '',
      },
    ],
  },
])
</script>

<style scoped lang="scss">
.divider {
  display: flex;
  width: 4rem;
  align-items: center;
  text-align: center;
  color: #1185e4;
  font-size: 0.4286rem;
  margin: 0.5714rem auto;
  font-weight: 700;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 0.0429rem solid #1185e4;
    margin: 0 0.1429rem;
  }
}
</style>

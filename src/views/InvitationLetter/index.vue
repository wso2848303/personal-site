<template>
  <div class="page-invitation-letter">
    <div class="page-content-wrap">
      <!-- 邀请函头部 -->
      <div class="invitation-header">
        <h1 class="invitation-title mt-24">感谢宴邀请函</h1>
        <p class="invitation-subtitle">Appreciation Banquet</p>
      </div>

      <!-- 新人信息 -->
      <div class="couple-info">
        <div class="couple-names">
          <span class="groom-name">新郎姓名</span>
          <span class="and-symbol">&</span>
          <span class="bride-name">新娘姓名</span>
        </div>
        <p class="text1 color-gray-2 mt-12">诚挚邀请您参加我们的结婚感谢宴</p>
      </div>

      <!-- 时间信息 -->
      <div class="time-section">
        <h2 class="h2 color-gray-1 mt-24">时间</h2>
        <div class="time-details"></div>
      </div>

      <!-- 地点信息 -->
      <div class="location-section">
        <h2 class="h2 color-gray-1 mt-24">地点</h2>
        <div class="location-details"></div>
        <div class="text1 color-gray-2 mt-12">导航：</div>
        <div class="text1 color-gray-2 mt-12"></div>
      </div>

      <!-- 就餐安排 -->
      <div class="dining-section">
        <h2 class="h2 color-gray-1 mt-24">就餐安排</h2>
        <div class="dining-details">
          <p class="text1 color-gray-2 mt-12">18:00 开始就餐</p>
          <p class="text1 color-gray-2 mt-12">欢迎随时入座，自由交流</p>
        </div>
      </div>

      <!-- 温馨提示 -->
      <div class="tips-section">
        <h2 class="h2 color-gray-1 mt-24">温馨提示</h2>
        <ul class="ul text1 color-gray-2 mt-12">
          <li>请提前15分钟到达现场</li>
          <li>建议绿色出行，可选择公共交通</li>
          <li>如需停车，请提前联系酒店</li>
          <li>如有特殊饮食需求，请提前告知</li>
          <li>欢迎携带家人朋友一同参加</li>
        </ul>
      </div>

      <!-- 底部装饰 -->
      <div class="footer-decoration">
        <p class="text1 color-gray-2 mt-12">期待您的光临</p>
        <p class="text1 color-gray-2 mt-12">We look forward to your presence</p>
      </div>

      <!-- 被邀请人信息 -->
      <div class="invitee-info">
        <p class="text1 color-gray-2 mt-12">致：</p>
        <p class="text1 color-gray-2 mt-12">{{ inviteName || '亲爱的朋友' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InvitationLetter',
  computed: {
    inviteName() {
      return this.$route.params.inviteName
    },
  },
}
</script>

<style lang="less" scoped src="./index.less"></style>

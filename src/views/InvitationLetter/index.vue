<template>
  <div class="page-invitation-letter">
    <p class="h1 color-red-default">Invitation Letter</p>
    <p class="text1 color-gray-2 mt-12">Dear: {{ inviteName }}</p>
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

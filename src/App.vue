<template>
  <RouterView />
</template>
<script setup>
import { RouterView } from 'vue-router'
import '../src/less/global.less'
import vh from '@/uses/vh'
vh()
</script>

<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>
<script setup lang="ts">
import { useAppStore } from '@/store/app'
const appStore = useAppStore()
appStore.init()
</script>

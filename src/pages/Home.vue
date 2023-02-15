<template>
  <v-app class="material-you">
    <AppCC />
    <app-nav v-if="mdAndUp" class="material-you-nav" />
    <app-header class="material-you-header" />

    <app-content class="material-you-content" />
    <app-login />
  </v-app>
</template>

<script setup lang="ts">
import { useDisplay, useTheme } from 'vuetify'

import { useCurrentTheme } from '@/hooks/useTheme'

import AppCC from './layout/CC.vue'
import AppHeader from './layout/Header.vue'
import AppNav from './layout/Navbar.vue'
import AppContent from './layout/View.vue'
import AppLogin from './modal/Login.vue'
const { themeName } = useCurrentTheme()

const display = useDisplay()
const { mdAndUp } = display
const theme = useTheme()
watchEffect(() => {
  theme.global.name.value = themeName.value
})
</script>
<style lang="scss">
$cubic-bezier: cubic-bezier(0.55, -0.01, 0, 1.03);
$transition-time: 350ms;
.material-you-nav {
  border-inline-end-width: 0;
  transition-property: width;
  transition-duration: $transition-time;
  transition-timing-function: $cubic-bezier;
  .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
  }
  .content-warp {
    display: flex;
    flex-direction: column;
    .list-content {
      flex: initial;
      transition: flex $transition-time $cubic-bezier;
      .v-list-item {
        &:hover .v-icon {
          animation: bounce 1s;
        }
      }
    }
    &.rail-nav {
      .list-content {
        flex: auto;
      }
    }
  }
}
.material-you-content {
  transition: padding $transition-time $cubic-bezier;
}
.material-you-header {
  transition-property: left, width;
  transition-duration: $transition-time;
  transition-timing-function: $cubic-bezier;
}
</style>

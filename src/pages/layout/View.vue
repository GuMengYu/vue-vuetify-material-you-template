<template>
  <v-main>
    <v-container class="pt-4" fluid>
      <router-view v-slot="{ Component }">
        <transition v-if="$route.meta['keepAlive']" name="route-animation" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
        <transition v-else name="route-animation" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-container>
  </v-main>
</template>
<script setup lang="ts"></script>

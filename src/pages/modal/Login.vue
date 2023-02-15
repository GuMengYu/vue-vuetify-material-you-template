<template>
  <v-dialog v-model="showLogin" persistent>
    <v-card
      outlined
      color="surface"
      class="login-container py-4 align-self-center"
      rounded="lg"
      width="90vw"
      max-width="450"
    >
      <div class="d-flex justify-center">
        <v-icon color="secondary" size="large">
          {{ mdiLogin }}
        </v-icon>
      </div>

      <v-card-title class="text-center">Login</v-card-title>
      <v-card-subtitle class="text-center mt-0">{{ $t('message.login') }}</v-card-subtitle>
      <div class="mx-6 py-6">
        <v-text-field
          v-model="state.phone"
          variant="outlined"
          density="comfortable"
          :label="$t('message.phone_email')"
          :prepend-inner-icon="mdiAccount"
        >
        </v-text-field>
        <v-text-field
          v-model="state.password"
          variant="outlined"
          density="comfortable"
          :prepend-inner-icon="mdiLock"
          type="password"
          :label="$t('message.password')"
        >
        </v-text-field>
      </div>
      <v-divider class="mx-6 mb-2" />
      <div class="d-flex justify-space-between mx-3 align-center">
        <div>
          <v-btn variant="text" color="primary" :loading="state.loading" class="login-button" @click="handleCancel">
            {{ $t('common.cancel') }}
          </v-btn>
          <v-btn variant="text" color="primary" :loading="state.loading" class="login-button" @click="handleLogin">
            {{ $t('common.sign_in') }}
          </v-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { mdiAccount, mdiLock, mdiLogin, mdiReload } from '@mdi/js'
import { storeToRefs } from 'pinia'
import { computed, reactive, watch } from 'vue'

import { useAppStore } from '@/store/app'
import { useUserStore } from '@/store/user'

const appStore = useAppStore()
const { showLogin } = storeToRefs(appStore)

const state = reactive({
  phone: '',
  password: '',
  loading: false,
})

const handleLogin = () => {
  state.loading = true
}
const handleCancel = () => {
  showLogin.value = false
}
</script>

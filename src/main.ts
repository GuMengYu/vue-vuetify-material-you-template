import './styles/animate.scss'
import './styles/global.scss'
import './styles/utility.scss'

import { createApp } from 'vue'

import App from './App.vue'
// directives
import { useDirectives } from './directives'
// plugins
import { useContextMenu } from './plugins/contextmenu'
import { useDayjs } from './plugins/dayjs'
import { useI18n } from './plugins/i18n'
import { usePinia } from './plugins/pinia'
import { useToast } from './plugins/toast'
import { useVuetify } from './plugins/vuetify'
import { useFonts } from './plugins/webfontloader'
import { useRouter } from './router'

// 加载css fonts等资源
useFonts()
const app = createApp(App)
useRouter(app)
usePinia(app)
useVuetify(app)
useI18n(app)
useToast(app)
useDirectives(app)
useDayjs(app)
useContextMenu(app)
app.mount('#app')

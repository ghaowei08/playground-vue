import { createI18n } from 'vue-i18n'
import cnJson from '@cc/locale/cn.json'
import enJson from '@cc/locale/en.json'

const i18n = createI18n({
  legacy: false,
  locale: 'cn',
  fallbackLocale: 'en',
  availableLocales: ["en", "cn"],
  messages: {
    "cn": cnJson,
    "en": enJson,
  },
})

export default i18n
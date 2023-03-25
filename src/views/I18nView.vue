<template>
  <form>
    <label>{{ t('lang') }}</label>
    <select v-model="lang">
      <option value="cn">{{ t('japanese') }}</option>
      <option value="en">{{ t('english') }}</option>
    </select>
  </form>
</template>


<script setup lang="ts">
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n'

const lang = ref('en')

const { t, locale } = useI18n({
useScope: 'global'
})

watch(lang, (newLang) => {
locale.value = newLang
})

</script>

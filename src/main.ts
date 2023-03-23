import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import TextInput from '@cc/components/input/TextInput.vue';
import MultilineTextInput from '@cc/components/input/MultilineTextInput.vue';

const app = createApp(App)

app.component('text-input', TextInput)
app.component('multiline-text-input', MultilineTextInput)

app.use(createPinia())
// app.use(router)

app.mount('#app')

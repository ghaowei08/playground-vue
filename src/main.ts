import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import TextInput from '@cc/components/input/TextInput.vue';
import RadioInput from '@cc/components/input/RadioInput.vue';
import SelectInput from '@cc/components/input/SelectInput.vue';
import CheckboxInput from '@cc/components/input/CheckboxInput.vue';
import MultilineTextInput from '@cc/components/input/MultilineTextInput.vue';

const app = createApp(App)

app.component('text-input', TextInput)
app.component('radio-input', RadioInput)
app.component('checkbox-input', CheckboxInput)
app.component('multiline-text-input', MultilineTextInput)
app.component('select-input', SelectInput)

app.use(router)
app.use(createPinia())

app.mount('#app')

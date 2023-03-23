<template>
  <div id="answer1" ref="answer1Ref">
    <p>
      Ask a yes/no question:
      <input v-model="question1" />
    </p>
    <p>{{ answer1 }}</p>
  </div>
  <div>
    <p>
      Ask a yes/no question:
      <input v-model="question2.something.something1" />
    </p>
    <p>{{ answer2 }}</p>
  </div>

  <div>
    <input v-model="todoId" />
    <p>{{ data }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive, watchEffect, watchPostEffect } from 'vue'

const question1 = ref('')
const answer1 = ref('Qestions usually contain a question mark.')
// watch works directly on a ref
watch(question1, async (newValue, oldValue) => {
  if (newValue.indexOf('?') > -1) {
    answer1.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      console.log(res)
      answer1.value = (await res.json()).answer
    } catch (error) {
      answer1.value = 'Error! Could not reach the API. ' + error
    }
  }
})

const question2 = reactive({
  something: {
    something1: '',
    something2: '',
    something3: ''
  }
})
const answer2 = ref('Questions usually contain a question mark. ;-)')

watch(question2, async (newValue, oldValue) => {
  console.log(newValue, oldValue)
}, { deep: true })


const todoId = ref('')
const data = ref('')

watch(todoId, async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  data.value = await response.json()
}, { immediate: true })

watchEffect(async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  data.value = await response.json()
})

const answer1Ref = ref(null)
const watchCallBack = () => {
  // TODO: DOM Example
}

watch(todoId, watchCallBack, {
  flush: 'post'
})

watchPostEffect(() => {
  /* executed after Vue updates */
  console.log("watchPostEffect")
})
</script>
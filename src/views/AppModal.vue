<template>
  <div class="modal-wrapper" v-if="visible">
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
    <div class="modal-buttons">
      <button class="modal-button" @click="hide">Close</button>
      <button class="modal-button" @click="confirm">Confirm</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import emitter from '@cc/plugin/mitt'

const visible = ref<boolean>(false)
const title = ref<string>('Heelo')
const text = ref<string>('World')
let callback: () => void

onBeforeMount(() => {
  console.log("Here App Modal")
  emitter.on('show', (param) => {
    visible.value = true
    title.value = param.title
    text.value = param.text
    callback = param.callback
  })
})

function hide() {
  visible.value = false
}

function confirm() {
  callback()
}

function show(params) {
  // making modal visible
  visible.value = true;
  // setting title and text
  title.value = params.title;
  text.value = params.text;
  // setting callback function
   console.log(params.onConfirm)
}
</script>

<style scoped>
.modal-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  z-index: 1000;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.modal-buttons {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
}

.modal-button {
  flex-grow: 1;
}
</style>
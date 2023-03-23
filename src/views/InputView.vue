<template>
  <div>
    <p>Text Input</p>
    <p>Message is: {{ textMessage }}</p>
    <text-input :model-value="textMessage" @update:model-value="updateTextMessage"></text-input>
  </div>
  <div>
    <p>Multiline Text Input</p>
    <p>Message is: {{ multiTextMessage }}</p>
    <multiline-text-input :model-value="multiTextMessage"
      @update:model-value="updateMultilineTextMessage"></multiline-text-input>
  </div>
  <div>
    <p>Checkbox Input</p>
    <p>Message is: {{ checkboxMessage }}</p>
    <checkbox-input :model-value="checkboxMessage" :options="checkboxOptions" 
      @update:model-value="updateCheckboxMessage"></checkbox-input>
  </div>
  <div>
    <p>Radio Input</p>
    <p>Message is: {{ radioMessage }}</p>
    <radio-input :model-value="radioMessage" :options="radioOptions" 
      @update:model-value="updateRadioMessage"></radio-input>
  </div>
  <div>
    <p>Select Input</p>
    <p>Message is: {{ selectMessage }}</p>
    <select-input :model-value="selectMessage" :options="selectOptions"
      @update:model-value="updateSelectMessage"></select-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textMessage = ref('')
function updateTextMessage(event: any) {
  textMessage.value = event
}

const multiTextMessage = ref('')
function updateMultilineTextMessage(event: any) {
  multiTextMessage.value = event
}

const checkboxOptions = [{
  label: 'Jack',
  value: 'jack',
},{
  label: 'Queen',
  value: 'queen',
},{
  label: 'King',
  value: 'king',
}]
const checkboxMessage = ref([])
function updateCheckboxMessage(event: any) {
  checkboxMessage.value = event
}

const radioOptions = [{
  label: 'Jack',
  value: 'jack',
},{
  label: 'Queen',
  value: 'queen',
},{
  label: 'King',
  value: 'king',
}]
const radioMessage = ref('jack')
function updateRadioMessage(event: any) {
  radioMessage.value = event
}

const selectOptions = [{
  label: 'Jack',
  value: 'jack',
},{
  label: 'Queen',
  value: 'queen',
},{
  label: 'King',
  value: 'king',
}]
const selectMessage = ref('')
function updateSelectMessage(event: any) {
  selectMessage.value = event
}
</script>
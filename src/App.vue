<template>
  <text-input :model-value="textMessage" @update:model-value="updateTextMessage"></text-input>
  <multiline-text-input :model-value="multiTextMessage" @update:model-value="updateMultilineTextMessage"></multiline-text-input>
</template>

<script setup lang="ts">import { ref } from 'vue';

const textMessage = ref('')

function updateTextMessage(event: any){
  textMessage.value = event
}

const multiTextMessage = ref('')
function updateMultilineTextMessage(event: any){
  multiTextMessage.value = event
}
</script>
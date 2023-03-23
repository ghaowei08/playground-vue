<template>
  <p>Text Input</p>
  <p>Message is: {{ textMessage }}</p>
  <input v-model="textMessage" placeholder="edit me" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])

const textMessage = computed({
  get(){
    return props.modelValue
  },
  set(value){
    emits('update:modelValue', value)
  }
})

</script>
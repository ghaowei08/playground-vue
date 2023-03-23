<template>
  <div v-for="opt of props.options" :key="opt.value">
    <label :for="opt.value">{{ opt.label }}</label>
    <input type="radio" :value="opt.value" v-model="value" placeholder="edit me" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props { 
  modelValue: string,
  options: { label: string, value: string }[]
 }

 interface Emits{
    (e: 'update:modelValue', value: string)
 }
 
const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const value = computed({
  get(){
    return props.modelValue
  },
  set(value){
    emits('update:modelValue', value)
  }})

</script>
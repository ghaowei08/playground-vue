<template>
  <select v-model="value" :multiple="props.isMultiple">
  <option disabled value="">Please select one</option>
  <option v-for="opt of props.options" :key="opt.value" :value="opt.value">{{ opt.label}}</option>
</select>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props { 
  modelValue: string,
  options: { label: string, value: string }[]
  isMultiple?: boolean
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
  }
})

</script>
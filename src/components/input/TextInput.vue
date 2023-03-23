<template>
  <input v-model="value" type="input" placeholder="edit me" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props { 
  modelValue: string,
 }

 interface Emits{
    (e: 'update:modelValue', value: string)
 }
 
const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const value = computed({
  get(){
    return props.modelValue;
  },
  set(value){
    emits('update:modelValue',value)
  }
})

</script>

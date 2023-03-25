<template>
  This is my component
</template>

<script setup lang="ts">
import { onMounted } from 'vue';


onMounted(async () => {
  setTimeout(() => {
    console.log("Here")
  }, 5000)
})
</script>
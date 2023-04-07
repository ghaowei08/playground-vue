<template>
  Welcome to vue playground
  <button @click="showModal">modal!</button>

</template>


<script setup lang="ts">
import { inject } from 'vue';

const $modal = inject("$modal")

function showModal(){
  ($modal as any).show({
    title: "Test!",
    text: "test test test",
    callback: () => {
      console.log("It is callback")
    }
  })
}
</script>

<style scoped>

</style>
<template>
  <RouterView />
  <!-- <button @click="showModal">modal!</button> -->
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppModal from '@cc/views/AppModal.vue'
import { onMounted, inject } from 'vue';

onMounted(() => {
  console.log(inject('$msg'))
})

// const $modal = inject("$modal")

// function showModal(){
//   ($modal as any).show({
//     title: "Test!",
//     text: "test test test",
//     callback: () => {
//       console.log("It is callback")
//     }
//   })
// }

</script>
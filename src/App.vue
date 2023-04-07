<template>
  <!-- <RouterView></RouterView> -->
  <app-modal />
  <button @click="showModal">modal!</button>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppModal from '@cc/views/AppModal.vue'
import { onMounted, inject } from 'vue';

onMounted(() => {
  console.log(inject('$msg'))

})

const $modal = inject("$modal")
function showModal(){
  // inject('$modal').show({
  //   title: "Test!",
  //   text: "test test test",
  // })
  ($modal as any).show()
}

</script>
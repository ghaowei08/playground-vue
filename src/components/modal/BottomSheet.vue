<template>
  <div style="position: absolute; top: 0; left: 0; z-index: 50; overflow: hidden;">
    <Transition name="modal">
      <div v-if="isOpen" style="width: 100vw; height: 100vh; background-color: red;">
        <button @click="hide">hide</button>
        this is a modal
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, } from 'vue';

const isOpen = ref(false)

const show = () => {
  isOpen.value = true
}

const hide = () => {
  isOpen.value = false
}

defineExpose({ show })

</script>

<style>
.modal-enter-active {
  transition: 2s ease-in;
}

.modal-leave-active {
  transition: 2s ease-out;
}

.modal-enter-from,
.modal-leave-to {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transform: translateY(100%);
}

.modal-enter-to,
.modal-leave-from {
  transform: translateY(0px);
}
</style>
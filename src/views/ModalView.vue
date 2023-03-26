<template>
  <button @click="selectedComponent.action">Toggle</button>
  <component :is="selectedComponent.component" :ref="selectedComponent.ref"></component>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import BottomSheet from '../components/modal/BottomSheet.vue'

const bottomSheet = ref<InstanceType<typeof BottomSheet>>()

const selectedComponent = computed(() => ({
  component: BottomSheet,
  ref: bottomSheet,
  action: () => {
    bottomSheet.value?.show()
  }
}))
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter-from,
.v-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
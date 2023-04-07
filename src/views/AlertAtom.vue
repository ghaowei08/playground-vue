<template>
  <Transition>
    <div
      id="alert-1"
      class="w-full absolute mt-2 z-[100]"
      role="alert"
    >
      <div class="w-11/12 m-auto flex flex-row rounded-md border border-primary p-2 items-center bg-base-light">
        <slot name="left" />
        <slot />
        <slot name="right" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">

defineExpose({
  open,
});

</script>

<style>
.v-enter-active{
  transition: all 0.3s ease-out;
}

.v-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>

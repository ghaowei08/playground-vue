<template>
  <p>{{ x }} {{ y }}</p>
</template>


<script setup lang="ts">
import {useMouse} from '../modules/mouse'

const { x , y} = useMouse()

</script>

<style scoped>

</style>
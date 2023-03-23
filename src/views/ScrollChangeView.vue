<template>
  <div style="position: sticky; top: 0">
    <span @click="toOffset(titileHeight[num -1].start)" :id="'span' + num" style="border: 1px solid black; padding: 10px; margin: 10px;" v-for="num in numberRange" :style="{'backgroundColor': (num -1) == selectedSpan ? backgroundColor : ''}"
      :key="num" :ref="'span' + num">{{ 'span' + num }}</span>
    {{ windowScrollY }}
  </div>
  <div style="margin-top: 1em; text-align: center;">
    <div v-for="num in numberRange" :key="num" :id="'template' + num">
    {{ 'template' + num }}
      <div v-for="n in (num * 25)" :key="n * num" style="padding: 10px 20px;">{{ n * num }}
    </div>
  </div>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted, watchEffect, computed } from 'vue'

const backgroundColor = ref('#ff0000')
const numberRange = 4

const windowScrollY = ref(window.scrollY)

const titileHeight = ref<{start:number, end: number}[]>([])

onMounted(() => {
  window.addEventListener("scroll", e => {
    windowScrollY.value = window.scrollY
  })
})

const selectedSpan = computed(() => titileHeight.value.findIndex(e => windowScrollY.value > e.start && windowScrollY.value < e.end ))

watchEffect(() => {
  for(let i = 0; i < numberRange; i++){
    titileHeight.value.push({
      start: document.getElementById(`template${i+1}`)!.offsetTop,
      end: document.getElementById(`template${i+1}`)!.offsetTop + document.getElementById(`template${i+1}`)!.offsetHeight
    })
  }
}, {
  flush: 'post'
})

function toOffset(number){
  window.scrollTo({
  top: number,
  left: 100,
  behavior: "smooth",
  })

}
</script>

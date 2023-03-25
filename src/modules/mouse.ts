import { onMounted, onUnmounted, ref } from "vue";

export function useMouse(){
  const x = ref(0)
  const y = ref(0)

  onMounted(() => window.addEventListener(('mousemove'), update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  function update(event: MouseEvent){
    x.value = event.pageX
    y.value = event.pageY
  }

  return {x, y}
}
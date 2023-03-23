<template>
  <input v-for="otp in otpLength" ref="otpRefs" :key="otp" :id="'otp'+otp" style="height:3em; width:3em; border-radius:10px; font-size: large; text-align: center;" type="number" min="0"
    max="9" maxlength="1" @input="event => updateOtp(event, otp)" v-model="oneTimePassword[otp]" />
  <p>OTP : {{ mapOtp }}</p>
</template>


<script setup lang="ts">
import { ref , onMounted } from 'vue';

const otpLength = 6

const otpRefs = ref([])
const oneTimePassword = ref<{[key: number]: number}>({})
const mapOtp = ref('')

onMounted(() => (otpRefs.value[0]as HTMLInputElement).focus())

function updateOtp(event, num){
  oneTimePassword.value[num] = event.target.value.charAt(0)
  if( otpRefs.value[num]){
    (otpRefs.value[num] as HTMLInputElement).focus()
  }
  else{
    (otpRefs.value[num-1] as HTMLInputElement).blur()
    submit()
  }
}

function submit(){
  if(Object.values(oneTimePassword.value).length == 6){
    mapOtp.value =  Object.values(oneTimePassword.value).join('')
  }
  else{
    oneTimePassword.value = {}
  }
}
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
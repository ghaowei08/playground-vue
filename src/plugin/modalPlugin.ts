import AppModal from '@cc/views/AppModal.vue'
import { App } from 'vue';
import emitter from '@cc/plugin/mitt'


const modal = {
  install(app: App<Event>){
    app.component('app-modal', AppModal)
    app.provide('$modal', {
      show(params: any){
        console.log("Here SHow")
        emitter.emit('show', params)
      }
    })
  }}



export default modal
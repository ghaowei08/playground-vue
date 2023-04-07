import AppModal from '@cc/views/AppModal.vue'
import { App, inject } from 'vue';
import emitter from '@cc/plugin/mitt'

const modal = {
  install(app: App<Event>){
    app.component('app-modal', AppModal)
    app.provide('$modal', {
      show(params: any){
        emitter.emit('show', params)
      }
    })
  }}



export const useCreative = {
  modal: inject('$modal')
}
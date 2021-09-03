import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { BaseService } from './Helper/BaseService'
import { IAttribute } from '~/models/Attribute'
export default class AttributeService extends BaseService<IAttribute> {
  constructor(public $axios: NuxtAxiosInstance) {
    super($axios, 'admin/attributes')
  }
}

declare module 'vue/types/vue' {
  interface NuxtServiceInstance {
    attributes: AttributeService
  }
}

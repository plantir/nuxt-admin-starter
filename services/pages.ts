import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { BaseService } from './Helper/BaseService'
export default class PageService extends BaseService<any> {
  constructor(public $axios: NuxtAxiosInstance) {
    super($axios, 'admin/pages')
  }
}

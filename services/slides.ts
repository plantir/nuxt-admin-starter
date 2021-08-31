import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { BaseService } from './Helper/BaseService'
export default class SlideService extends BaseService<any> {
  constructor(public $axios: NuxtAxiosInstance) {
    super($axios, 'admin/slides')
  }
}

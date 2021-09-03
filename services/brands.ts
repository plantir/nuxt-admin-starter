import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { BaseService } from './Helper/BaseService'
export default class BrandService extends BaseService<any> {
  constructor(public $axios: NuxtAxiosInstance) {
    super($axios, 'admin/brands')
  }
}

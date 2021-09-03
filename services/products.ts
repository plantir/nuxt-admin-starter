import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { BaseService } from './Helper/BaseService'
import { IProduct } from '~/models/Product'
export default class ProductsService extends BaseService<IProduct> {
  constructor(public $axios: NuxtAxiosInstance) {
    super($axios, 'admin/products')
  }
  //   toggle_resolved(item) {
  //     let resolved = item.resolved == 1 ? true : false
  //     return this.$axios.$patch(`${this.path}/${item.id}/resolved`, {
  //       resolved: !resolved
  //     })
  //   }
}

declare module 'vue/types/vue' {
  interface NuxtServiceInstance {
    products: ProductsService
  }
}

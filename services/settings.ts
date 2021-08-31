import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
export default class SettingService {
  path = 'admin/settings'
  constructor(public $axios: NuxtAxiosInstance) {}

  $get() {
    return this.$axios.$get(`${this.path}`)
  }

  save(data: any) {
    return this.$axios.$put(`${this.path}`, data)
  }
}

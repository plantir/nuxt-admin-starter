import { IAuthUser } from '~/models/AuthUser'
import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { BaseService } from './Helper/BaseService'
export default class AuthService {
  path = 'admin/auth'
  constructor(public $axios: NuxtAxiosInstance) {}
  login(params: any) {
    return this.$axios.$post(`${this.path}/login`, params)
  }
  register(params: any) {
    return this.$axios.$post(`${this.path}/register`, params)
  }
  mobile_check(params: any) {
    return this.$axios.$post(`${this.path}/forget_password`, params)
  }
  reset_password(params: any) {
    return this.$axios.$post(`${this.path}/reset_password`, params)
  }
  check_duplicate_user(params: any) {
    return this.$axios.$post(`${this.path}/check_duplicate_user`, params)
  }
}

declare module 'vue/types/vue' {
  interface NuxtServiceInstance {
    auth_user: AuthService
  }
}


interface IEnum {
  toSelect: { text: string; value: number }[]
}
interface IUser {
  id: number
  username: string
  roles: string[]
  name: string
}
export interface Storage {
  setState(key: string, val: any): void
  getState(key: string): any
  watchState(key: string, callback: (newValue: any) => any): void
  setCookie(key: string, val: any, isJson?: boolean): void
  getCookie(key: string): any
  setLocalStorage(key: string, val: any, isJson?: boolean): void
  getLocalStorage(key: string): any
  setUniversal(key: string, val: any, isJson?: boolean): void
  getUniversal(key: string, isJson?: boolean): any
  syncUniversal(key: string, val: any, isJson?: boolean): void
  removeUniversal(key: string): any
}
export interface Auth {
  user?: any
  loggedIn: boolean
  $storage: Storage
  loginWith(strategy: string, date: any): Promise<any>
  login(args: any): Promise<any>
  setUser(user: any): void
  setToken(strategy: string, token: string): void
  setUserToken(token: string): Promise<any>
  fetchUser(): Promise<any>
  hasScope(role: string): boolean
  logout(): void
  onError(callback: (error: string, name: string, endpoin: string) => any): void
  onRedirect(callback: (to: Object, from: Object) => any): void
}
interface GTM {
  push(arg: { event: string; [key: string]: any }): any
}
declare module 'vue/types/vue' {
  interface Vue {
    $auth: Auth
    $gtm: GTM
  }
  interface Context {
    $auth: Auth
    $gtm: GTM
  }
  interface NuxtAppOptions {
    $auth: Auth
    $gtm: GTM
  }
}

declare module 'vue/types/vue' {
  interface NuxtServiceInstance {

  }
  interface NuxtEnumInstance {
    role: IEnum
    user_verify: IEnum
    personality_test: IEnum
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V> {
    auth?: string | boolean
  }
}

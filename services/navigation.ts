import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { INav } from '~/models/Navigation'
export default class NavigationService {
  constructor(public $axios: NuxtAxiosInstance) {}
  get(roles: string[]): INav[] {
    return [
      {
        icon: 'apps',
        title: 'دشبورد',
        to: '/'
      },
      {
        icon: 'la-images',
        title: 'اسلاید ها',
        to: '/slides'
      },
      {
        icon: 'la-images',
        title: 'برند ها',
        to: '/brands'
      },
      {
        icon: 'la-images',
        title: 'محصولات',
        to: '/products'
      },
      {
        icon: 'la-images',
        title: 'اتریبیوت ها',
        to: '/attributes'
      },
      {
        icon: 'la-users',
        title: 'صفحات',
        to: '/pages'
      },
      {
        icon: 'la-users',
        title: 'پروژه ها',
        to: '/projects'
      },
      {
        icon: 'la-cog',
        title: 'تنظیمات',
        to: '/settings'
      },
      {
        icon: 'la-globe',
        title: 'لندینگ بیماران خارج',
        child: [
          {
            icon: 'la-user-md',
            title: 'پزشکان',
            to: '/doctors'
          }
        ]
      }
    ]
  }
}

declare module 'vue/types/vue' {
  interface NuxtServiceInstance {
    navigation: NavigationService
  }
}

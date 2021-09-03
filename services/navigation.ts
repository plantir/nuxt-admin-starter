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
        icon: 'la-image',
        title: 'اسلاید ها',
        to: '/slides'
      },

      {
        icon: 'la-images',
        title: 'صفحات',
        to: '/pages'
      },
      {
        icon: 'la-project-diagram',
        title: 'پروژه ها',
        to: '/projects'
      },
      {
        icon: 'la-shopping-basket',
        title: 'محصولات',
        child: [
          {
            title: 'برند ها',
            to: '/brands'
          },
          {
            title: 'لیست محصولات',
            to: '/products'
          },
          {
            title: 'اتریبیوت ها',
            to: '/attributes'
          }
        ]
      },
      {
        icon: 'la-cog',
        title: 'تنظیمات',
        to: '/settings'
      }
    ]
  }
}

declare module 'vue/types/vue' {
  interface NuxtServiceInstance {
    navigation: NavigationService
  }
}

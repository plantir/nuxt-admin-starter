<style lang="scss"></style>

<template>
  <section v-if="title">
    <vr-form-generator
      :title="title"
      :loading="loading"
      :item="item"
      :formData="formData"
      :service="this.$service.settings"
      :customSave="save"
    ></vr-form-generator>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import { VRFormData } from 'vrwebdesign-nuxt/modules/nuxt-form-generator'
@Component
export default class SettingPage extends Vue {
  title = 'تنظیمات سایت'
  service = this.$service.settings
  loading = true
  formData = <VRFormData>[]
  item = <any>{}
  async mounted() {
    this.item = await this.$service.settings.$get()
    this.loading = false
    this.formData = [
      {
        rows: [
          {
            label: 'تلفن ثابت',
            type: 'textField',
            placeholder: 'تلفن ثابت را وارد نمایید',
            model: 'tell',
          },
          {
            label: 'فکس',
            type: 'textField',
            placeholder: 'فکس را وارد نمایید',
            model: 'fax',
          },
          {
            label: 'ایمیل',
            type: 'textField',
            placeholder: 'ایمیل را وارد نمایید',
            model: 'email',
          },
          {
            label: 'تلگرام',
            type: 'textField',
            placeholder: 'تلگرام را وارد نمایید',
            model: 'telegram',
          },
          {
            label: 'واتس اپ',
            type: 'textField',
            placeholder: 'واتس اپ را وارد نمایید',
            model: 'whatsapp',
          },
          {
            label: 'لینکداین',
            type: 'textField',
            placeholder: 'لینکداین را وارد نمایید',
            model: 'linkedin',
          },
          {
            label: 'اینستاگرام',
            type: 'textField',
            placeholder: 'اینستاگرام را وارد نمایید',
            model: 'instagram',
          },
          {
            label: 'آدرس دفتر اصلی',
            type: 'textField',
            placeholder: 'آدرس دفتر اصلی را وارد نمایید',
            model: 'mainOffice',
          },
          {
            label: 'طول جغرافیایی',
            type: 'textField',
            placeholder: 'طول جغرافیایی را وارد نمایید',
            model: 'lng',
          },
          {
            label: 'عرض جغرافیایی',
            type: 'textField',
            placeholder: 'عرض جغرافیایی را وارد نمایید',
            model: 'lat',
          },
        ],
      },
    ]
  }
  async save(item: any) {
    this.loading = true
    try {
      await this.$service.settings.save(item)
      this.$toast.success().showSimple('با موفقیت انجام شد')
    } catch (error) {
      this.$toast.error().showSimple('خطایی رخ داده است')
    }
    this.loading = false
  }
}
</script>

<style lang="scss"></style>

<template>
  <section v-if="title">
    <vr-form-generator
      :title="title"
      :loading="loading"
      :item="item"
      :formData="formData"
      :service="$service.products"
    ></vr-form-generator>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { VRFormData } from 'vrwebdesign-nuxt/modules/nuxt-form-generator'
import Attributes from '@/components/Pages/Products/Attributes.vue'
export default Vue.extend({
  data() {
    return {
      date: null,
      title: <any>'',
      loading: this.$route.params.id ? false : true,
      formData: <VRFormData>[],
      item: <any>{},
    }
  },
  async mounted() {
    if (this.$route.params.id != 'create') {
      this.item = await this.$service.products.$get(this.$route.params.id)
      this.title = `مشاهده محصول {{name}} `
    } else {
      this.title = 'ایجاد جدید'
    }
    let brands = await this.$service.brands.$query({ perPage: 1000 })
    let brands_items = brands.data.map((item) => {
      return {
        text: item.title,
        value: item.id,
      }
    })
    this.formData = [
      {
        rows: [
          {
            label: 'نام محصول',
            type: 'textField',
            validation: { required: true },
            placeholder: 'نام محصول را وارد نمایید',
            model: 'name',
          },
          {
            label: 'برند',
            type: 'autocomplete',
            validation: { required: true },
            items: brands_items,
            placeholder: 'برند را انتخاب نمایید',
            model: 'brand_id',
          },
          {
            label: 'اسلاگ',
            type: 'textField',
            validation: { required: true },
            placeholder: 'اسلاگ را وارد نمایید',
            model: 'slug',
          },
          {
            label: 'ویژگی ها',
            type: 'textField',
            component: Attributes,
            model: 'attributes',
          },
          {
            label: 'عکس اصلی',
            type: 'fileUpload',
            placeholder: 'عکس اصلی را آپلود نمایید',
            model: 'main_image',
          },
          {
            label: 'عکس های دیگر',
            type: 'fileUpload',
            placeholder: 'عکس های دیگر را آپلود نمایید',
            multiple: true,
            model: 'images',
          },
          {
            label: 'توضیحات',
            type: 'textArea',
            placeholder: 'توضیحات را وارد نمایید',
            model: 'description',
          },
        ],
      },
      {
        title: 'زبان های دیگر',
        rows: [
          {
            label: 'نام محصول به انگلیسی',
            type: 'textField',
            validation: { required: true },
            placeholder: 'نام محصول را به انگلیسی وارد نمایید',
            model: 'en_name',
          },
          {
            label: 'توضیحات به انگلیسی',
            type: 'textArea',
            placeholder: 'توضیحات به انگلیسی را وارد نمایید',
            model: 'en_description',
          },
        ],
      },
    ]
  },
})
</script>

<style lang="scss"></style>

<template>
  <section v-if="title">
    <vr-form-generator
      :title="title"
      :loading="loading"
      :item="item"
      :formData="formData"
      :service="service"
    ></vr-form-generator>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { VRFormData } from 'vrwebdesign-nuxt/modules/nuxt-form-generator'
export default Vue.extend({
  data() {
    return {
      date: null,
      title: '',
      service: this.$service.pages,
      loading: this.$route.params.id ? false : true,
      formData: <VRFormData>[],
      item: <any>{},
    }
  },
  async mounted() {
    if (this.$route.params.id !== 'create') {
      this.loading = true
      this.item = await this.service.$get(this.$route.params.id)
      this.title = `ویرایش صفحه {{name}}`
      this.loading = false
    } else {
      this.title = 'ایجاد صفحه جدید'
    }
    this.formData = [
      {
        rows: [
          {
            label: 'اسلاگ',
            type: 'textField',
            validation: { required: true },
            placeholder: 'اسلاگ را وارد نمایید',
            model: 'slug',
          },
          {
            label: 'نام',
            type: 'textField',
            validation: { required: true },
            placeholder: 'نام را وارد نمایید',
            model: 'name',
          },
          {
            label: 'عنوان',
            type: 'textField',
            validation: { required: true },
            placeholder: 'عنوان را وارد نمایید',
            model: 'title',
          },
          {
            label: 'توضیحات',
            type: 'textArea',
            validation: { required: true },
            placeholder: 'توضیحات را وارد نمایید',
            model: 'description',
          },

          {
            label: 'عکس',
            type: 'fileUpload',
            validation: { required: true },
            placeholder: 'عکس را وارد نمایید',
            model: 'image',
          },
        ],
      },
      {
        title: 'زبان های دیگر',
        rows: [
          {
            label: 'عنوان انگلیسی',
            type: 'textField',
            validation: { required: true },
            placeholder: 'عنوان انگلیسی را وارد نمایید',
            model: 'en_title',
          },
          {
            label: 'توضیحات انگلیسی',
            type: 'textArea',
            validation: { required: true },
            placeholder: 'توضیحات انگلیسی را وارد نمایید',
            model: 'en_description',
          },
        ],
      },
    ]
  },
})
</script>

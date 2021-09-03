<style lang="scss"></style>

<template>
  <section v-if="title">
    <vr-form-generator
      :title="title"
      :loading="loading"
      :item="item"
      :formData="formData"
      :service="$service.attributes"
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
      title: <any>'',
      loading: this.$route.params.id ? false : true,
      formData: <VRFormData>[],
      item: <any>{},
    }
  },
  async mounted() {
    if (this.$route.params.id != 'create') {
      this.item = await this.$service.attributes.$get(this.$route.params.id)
      this.title = `ویرایش ویژگی {{name}} `
    } else {
      this.title = 'ایجاد جدید'
    }
    this.formData = [
      {
        rows: [
          {
            label: 'نام ویژگی',
            type: 'textField',
            validation: { required: true },
            placeholder: 'نام ویژگی را وارد نمایید',
            model: 'name',
          },
          {
            label: 'نام نمایشی',
            type: 'textField',
            validation: { required: true },
            placeholder: 'نام نمایشی را وارد نمایید',
            model: 'label',
          },
          {
            label: 'مقدار پیشفرض',
            type: 'textField',
            placeholder: 'مقدار پیشفرض را وارد نمایید',
            model: 'default',
          },
          {
            label: 'آیکون',
            type: 'fileUpload',
            placeholder: 'آیکون را آپلود نمایید',
            model: 'icon',
          },
        ],
      },
      {
        title: 'زبان های دیگر',
        rows: [
          {
            label: 'نام نمایشی به انگلیسی',
            type: 'textField',
            validation: { required: true },
            placeholder: 'نام نمایشی را به انگلیسی وارد نمایید',
            model: 'en_label',
          },
        ],
      },
    ]
  },
})
</script>

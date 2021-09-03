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
      service: this.$service.brands,
      loading: this.$route.params.id ? false : true,
      formData: <VRFormData>[],
      item: <any>{},
    }
  },
  async mounted() {
    if (this.$route.params.id !== 'create') {
      this.loading = true
      this.item = await this.service.$get(this.$route.params.id)
      this.title = `ویرایش برند {{title}}`
      this.loading = false
    } else {
      this.title = 'ایجاد برند جدید'
    }
    this.formData = [
      {
        rows: [
          {
            label: 'عنوان',
            type: 'textField',
            validation: { required: true },
            placeholder: 'عنوان را وارد نمایید',
            model: 'title',
          },
          {
            label: 'عنوان انگلیسی',
            type: 'textField',
            validation: { required: true },
            placeholder: 'عنوان انگلیسی را وارد نمایید',
            model: 'en_title',
          },
        ],
      },
    ]
  },
})
</script>

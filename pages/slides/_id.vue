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
      service: this.$service.slides,
      loading: this.$route.params.id ? false : true,
      formData: <VRFormData>[],
      item: <any>{},
    }
  },
  async mounted() {
    if (this.$route.params.id !== 'create') {
      this.loading = true
      this.item = await this.service.$get(this.$route.params.id)
      this.title = `ویرایش اسلاید {{title}}`
      this.loading = false
    } else {
      this.title = 'ایجاد اسلاید جدید'
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
            label: 'ترتیب',
            type: 'textField',
            validation: { number: true },
            placeholder: 'ترتیب را وارد نمایید',
            model: 'sort_order',
          },

          {
            label: 'عکس',
            type: 'fileUpload',
            placeholder: 'عکس را وارد نمایید',
            model: 'src',
          },
        ],
      },
    ]
  },
})
</script>

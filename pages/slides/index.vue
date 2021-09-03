<style lang="scss"></style>

<template>
  <section ref="wrapper">
    <v-card>
      <vr-data-grid
        :headers="headers"
        :title="title"
        :service="$service.slides"
        :filters="filters"
        :withRecycle="true"
      >
        <template #items="{ item }">
          <td>{{ item.id }}</td>
          <td class="pa-4">
            <v-img :src="item.src" max-width="150px"></v-img>
          </td>
          <td>{{ item.title }}</td>
          <td>{{ item.sort_order }}</td>
          <td>{{ item.created_at | persianDate | persianDigit }}</td>
        </template>
      </vr-data-grid>
    </v-card>
  </section>
</template>
<script>
export default {
  data() {
    return {
      title: {
        text: 'لیست اسلاید ها',
      },
      headers: [
        { text: 'آیدی', align: 'right', value: 'id', width: '10%' },
        {
          text: 'تصویر',
          align: 'right',
          sortable: false,
          width: '20%',
        },
        { text: 'عنوان', align: 'right', value: 'title', width: '20%' },
        {
          text: 'ترتیب',
          align: 'right',
          value: 'sort_order',
          width: '20%',
        },
        {
          text: 'تاریخ ایجاد',
          align: 'right',
          value: 'created_at',
          width: '20%',
        },
      ],
      filters: [
        {
          label: 'آیدی',
          model: 'id:=',
        },
        {
          label: 'نام',
          clearable: false,
          model: 'title',
        },
      ],
    }
  },
}
</script>

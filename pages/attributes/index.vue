<style lang="scss"></style>

<template>
  <section ref="wrapper">
    <v-card>
      <vr-data-grid
        :headers="headers"
        :title="title"
        :service="$service.attributes"
        :filters="filters"
        :withRecycle="true"
        :dataGrid="dataGrid"
      >
        <template #items="{item}">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.label }}</td>
          <td>{{ item.default | persianDigit }}</td>
          <td>
            <v-img width="24px" :src="item.icon"></v-img>
          </td>
          <td>{{ item.create_at | persianDate | persianDigit }}</td>
        </template>
      </vr-data-grid>
    </v-card>
  </section>
</template>
<script>
export default {
  data() {
    return {
      dataGrid: {},
      title: {
        text: 'لیست ویژگی ها',
        icon: 'la-paperclip'
      },
      filters: [
        {
          icon: 'la-search',
          name: 'id',
          model: 'id',
          label: 'شناسه'
        },
        {
          icon: 'la-search',
          name: 'name',
          model: 'name',
          label: 'نام ویژگی'
        },
        {
          icon: 'la-search',
          name: 'name',
          model: 'label',
          label: 'نام نمایشی'
        }
      ],
      headers: [
        {
          text: 'شناسه',
          align: 'right',
          value: 'id',
          width: '10%'
        },
        {
          text: 'نام ویژگی',
          align: 'right',
          value: 'name',
          width: '10%'
        },
        {
          text: 'نام نمایشی',
          align: 'right',
          value: 'label',
          width: '10%'
        },
        {
          text: 'پیشفرض',
          align: 'right',
          value: 'default',
          width: '10%'
        },
        {
          text: 'آیکون',
          align: 'right',
          sortable: false,
          width: '10%'
        },
        {
          text: 'تاریخ ایجاد',
          align: 'right',
          value: 'created_at',
          width: '10%'
        }
      ]
    }
  }
}
</script>

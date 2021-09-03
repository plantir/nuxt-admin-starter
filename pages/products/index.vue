<style lang="scss"></style>

<template>
  <section ref="wrapper">
    <v-card>
      <vr-data-grid
        :headers="headers"
        :title="title"
        :service="$service.products"
        :filters="filters"
        :withRecycle="true"
        :dataGrid="dataGrid"
      >
        <template #items="{item}">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.slug }}</td>
          <td>{{ item.brand.title }}</td>
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
      harchi: null,
      dataGrid: {},
      title: {
        text: 'لیست محصولات',
        icon: 'add_shopping_cart'
      },
      filters: [
        {
          icon: 'la-search',
          model: 'id',
          label: 'شناسه'
        },
        {
          icon: 'la-search',
          model: 'name',
          label: 'نام محصول'
        },
        {
          icon: 'la-search',
          model: 'slug',
          label: 'اسلاگ'
        },
        {
          icon: 'la-search',
          model: 'brand.title',
          label: 'برند'
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
          text: 'نام محصول',
          align: 'right',
          value: 'name',
          width: '20%'
        },
        {
          text: 'اسلاگ محصول',
          align: 'right',
          value: 'slug',
          width: '20%'
        },
        {
          text: 'برند',
          align: 'right',
          sortable: false,
          width: '20%'
        },

        {
          text: 'تاریخ ایجاد',
          align: 'right',
          value: 'created_at',
          width: '20%'
        }
      ]
    }
  }
}
</script>

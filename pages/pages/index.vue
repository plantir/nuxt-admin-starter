<style lang="scss"></style>

<template>
  <section ref="wrapper">
    <v-card>
      <vr-data-grid
        :headers="headers"
        :title="title"
        :service="$service.pages"
        :filters="filters"
        :withRecycle="true"
      >
        <template #items="{ item }">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.updated_at | persianDate | persianDigit }}</td>
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
        text: 'لیست صفحات',
        icon: 'la-pages',
      },
      headers: [
        { text: 'آیدی', align: 'right', value: 'id', width: '10%' },
        {
          text: 'نام صفحه',
          align: 'right',
          value: 'name',
          width: '20%',
        },
        { text: 'عنوان', align: 'right', value: 'title', width: '20%' },
        {
          text: 'تاریخ تغییر',
          align: 'right',
          value: 'updated_at',
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
          model: 'name',
        },
        {
          label: 'وضعیت تایید',
          type: 'select',
          items: [
            { text: 'تایید نشده', value: '0' },
            {
              text: 'تایید شده',
              value: '1',
            },
          ],
          model: 'is_verified',
        },
        {
          label: 'تاریخ ایحاد',
          type: 'date',
          model: 'created_at',
        },
      ],
    }
  },
}
</script>

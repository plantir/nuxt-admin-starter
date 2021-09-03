<style lang="scss"></style>

<template>
  <section ref="wrapper">
    <v-card>
      <vr-data-grid
        :headers="headers"
        :title="title"
        :service="$service.brands"
        :filters="filters"
        :withRecycle="true"
      >
        <template #items="{ item }">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.en_title }}</td>
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
        text: 'لیست برند ها',
      },
      headers: [
        { text: 'آیدی', align: 'right', value: 'id', width: '10%' },
        { text: 'عنوان', align: 'right', value: 'title', width: '20%' },
        {
          text: 'عنوان انگلیسی',
          align: 'right',
          value: 'en_title',
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
        {
          label: 'نام انگلیسی',
          clearable: false,
          model: 'en_title',
        },
      ],
    }
  },
}
</script>

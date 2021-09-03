<style lang="scss"></style>

<template>
  <section ref="wrapper">
    <v-card>
      <vr-data-grid
        :headers="headers"
        :title="title"
        :service="$service.users"
        :filters="filters"
        :withRecycle="true"
      >
        <template #items="{item}">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.mobile }}</td>
          <td>
            <vr-badge
              :color="item.is_verified?'green':'red'"
            >{{ item.is_verified | enum('user_verify') }}</vr-badge>
          </td>
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
        text: 'لیست کاربران',
      },
      headers: [
        { text: 'آیدی', align: 'right', value: 'id', width: '10%' },
        {
          text: 'نام و نام خانوادگی',
          align: 'right',
          value: 'name',
          width: '20%'
        },
        { text: 'موبایل', align: 'right', value: 'mobile', width: '20%' },
        {
          text: 'وضعیت تایید',
          align: 'right',
          value: 'is_verified',
          width: '20%'
        },
        {
          text: 'تاریخ ایجاد',
          align: 'right',
          value: 'created_at',
          width: '20%'
        }
      ],
      filters: [
        {
          label: 'آیدی',
          model: 'id:='
        },
        {
          label: 'نام',
          clearable: false,
          model: 'name'
        },
        {
          label: 'وضعیت تایید',
          type: 'select',
          items: [
            { text: 'تایید نشده', value: '0' },
            {
              text: 'تایید شده',
              value: '1'
            }
          ],
          model: 'is_verified'
        },
        {
          label: 'تاریخ ایحاد',
          type: 'date',
          model: 'created_at'
        }
      ]
    }
  }
}
</script>

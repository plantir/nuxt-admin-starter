<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  .attribute-info {
    min-width: 200px;
    display: flex;
    align-items: center;
  }
  .default {
    opacity: 0.6;
    margin-right: 4px;
  }
  + .item {
    margin-top: 12px;
  }
}
.form-group {
  margin-bottom: 20px;
}
</style>
<template>
  <div class="form-group">
    <label>{{ field.label }}</label>
    <div>
      <div class="item" v-for="(item, index) in attributes" :key="index">
        <v-checkbox
          color="primary"
          hide-details
          v-model="item.selected"
        ></v-checkbox>
        <div class="attribute-info">
          <div>
            <v-img
              v-if="item.icon"
              width="24px"
              height="24px"
              :src="item.icon"
              class="ml-2"
            ></v-img>
          </div>
          <span>{{ item.name }}</span>
          <span class="default">({{ item.default }})</span>
        </div>
        <v-text-field
          class="mr-2"
          name="name"
          label="مقدار فارسی"
          v-model="item.value"
          :disabled="!item.selected"
          outline
          hide-details
        ></v-text-field>
        <v-text-field
          class="mr-2"
          name="name"
          label="مقدار انگلیسی"
          v-model="item.en_value"
          :disabled="!item.selected"
          outline
          hide-details
        ></v-text-field>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['field', 'value'],
  data() {
    return {
      attributes: this.value,
    }
  },
  watch: {
    attributes: {
      handler: function (val) {
        this.$emit('input', val)
      },
      deep: true,
    },
  },
})
</script>

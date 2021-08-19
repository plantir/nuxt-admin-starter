<style lang="scss" scoped>
</style>
<template>
  <Auth />
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import Auth from '@/components/Pages/Auth/Index.vue'

@Component({
  layout: 'AuthPage',
  components: { Auth }
})
export default class component_name extends Vue {}
</script>

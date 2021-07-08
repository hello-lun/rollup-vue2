<template>
  <div class="app">
    <Hello />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import Hello from '@/components/pages/Hello.vue'

export default defineComponent({
  name: 'App',
  components: { Hello },
})
</script>

<style scoped>
</style>

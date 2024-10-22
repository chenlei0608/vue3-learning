<template>
  <div class="demo-props">
    <h1>This is an demo-props page</h1>
    <Child :my-car="car" :my-school="school" />
  </div>
</template>

<script lang="ts" setup>
  import Child from './child.vue'
  import { ref } from 'vue'

  const car = ref<string>('劳斯莱斯')
  const school = ref<string>('北京大学')
</script>

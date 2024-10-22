<template>
  <div class="demo-props">
    <h1>This is an demo-emit page</h1>
    <Child @get-school-offer="getData" />
  </div>
</template>

<script lang="ts" setup>
import Child from './child.vue'

const getData = (val: string) => {
  console.log('得到数据', val)
}
</script>

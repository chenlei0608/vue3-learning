<template>
  <div class="demo-props-child">
    <h2>This is an demo-props-child page</h2>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    myCar: {
      type: String,
      default: '大众'
    },
    mySchool: {
      type: String,
      default: '郑州轻工业大学'
    }
  })
  console.log('props', props)
</script>

<style scoped>
.demo-props-child {
  background-color: aquamarine;
  padding: 20px;
}
</style>

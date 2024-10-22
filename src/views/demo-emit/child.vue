<template>
  <div class="demo-props-child">
    <h1>This is an demo-props-child page</h1>
    <button @click="clickMe">点我</button>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['getSchoolOffer'])
const clickMe = () => {
  emit('getSchoolOffer', '哈哈哈')
}
</script>

<style scoped>
.demo-props-child {
  background-color: aquamarine;
  padding: 20px;
}
</style>

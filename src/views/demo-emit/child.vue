<template>
  <div class="demo-emit-child">
    <h2>This is an demo-emit-child page</h2>
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
.demo-emit-child {
  background-color: aquamarine;
  padding: 20px;
}
</style>

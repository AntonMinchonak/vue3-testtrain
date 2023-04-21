<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {

  padding: 10px 20px;
  border: 1px solid rgb(61, 180, 61);
  color: white;
  font-weight: 600;
  background: rgb(61, 180, 61);
  cursor: pointer;
  display: inline-block;
}
</style>
<template>
  <select v-model="sort" @change="$emit('changeSort', sort)" class="select" name="" id="">
    <option disabled value="s">Выберите из списка</option>
    <option  class="option" v-for="option in options" :value="option" :key="option">{{option}}</option>
  </select>


</template>

<script>
export default {
  data() {
    return {
      sort: 'id'
    }
  },
  name: 'my-select',
  props: ['options', ]
}
</script>

<style>
.select {
  border: 1px solid rgb(48, 235, 48);
  padding: 10px;
  display: inline-block;
  margin-left: auto;
}

.option {
  padding: 10px 20px;
  border: none;
  color: black
}
</style>
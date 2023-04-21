<template>
  <!-- <input  :value="modelValue" @input="updateInput" class="input" type="text" :placeholder="placeholder"> -->
  <input  v-model="value" @input="updateInput" class="input" type="text" :placeholder="placeholder">
</template>

<script>
export default {
  name: 'my-input',
  data() {
    return {
      value: ''
    }
  },
  props: ['placeholder', 'modelValue'],
  methods: {
    updateInput(evt) {
      this.$emit('update:modelValue', evt.target.value)
    }
  }
}
</script>

<style>
.input {
  border: 1px solid rgb(61, 180, 61);

  padding: 10px 15px;
}

</style>
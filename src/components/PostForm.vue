<template>
<div class="">
      <my-button @click='isHidden=!isHidden'>Create post</my-button>
<my-popup @closePopup='closePopup' :isHidden='isHidden'>
   <form class="form" action="">
      <my-input v-model="titleInput" placeholder="Title" />
      <my-input v-model="bodyInput" placeholder="Body" />
      <my-button @click.prevent="createPost" class="btn">Create</my-button>
    </form>
    </my-popup>
    </div>
</template>

<script>

export default {
  data() {
    return {
      titleInput: '',
      bodyInput: '',
      isHidden:true
    }
  },
  methods: {
    createPost() {
      this.$emit('createPost',{id: Date.now(), title: this.titleInput, body:this.bodyInput})
      this.titleInput = ''
      this.bodyInput = ''
    },
    createPost() {
      this.$store.commit('createPost',{id: Date.now(), title: this.titleInput, body:this.bodyInput})
      this.titleInput = ''
      this.bodyInput = ''
    },
    closePopup() {
      this.isHidden=true
    }
  }
}
</script>

<style>
.input {
  border: 1px solid rgb(61, 180, 61);

  padding: 10px 15px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}



</style>
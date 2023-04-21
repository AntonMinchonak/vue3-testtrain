<template>
  <div class="post" >
      <my-button class="delete" @click="deletePost">Delete Post</my-button> 
      <div @click="$router.push(`/posts/${post.id}`)"><strong>{{post.id}} Post Name: </strong>{{post.title}}</div>
      <div class=""> <strong>Description: </strong>{{post.body}}</div>
    </div>
</template>

<script>

export default {


props: {
  post: {
    type: Object,
    required: true
  }
},
methods: {
  deletePost() {
    this.$emit('deletePost', this.post.id)
    this.$store.commit('deletePost',this.post.id)
  }
}
}
</script>

<style>
.post {
  padding: 20px;
  border: 1px solid rgb(195, 218, 195);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.delete {
  margin-left: auto;
}
</style>
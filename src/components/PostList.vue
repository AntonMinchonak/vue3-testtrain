<template>
    <div class="postList">
    <my-select :sort='sort' @changeSort='changeSort' :options='options'></my-select>
    <transition-group name="post-list">
      <PostItem @deletePost='deletePost' v-for="post in posts" :post="post" :key="post.id"></PostItem>
    </transition-group>
 </div>
</template>

<script>
import PostItem from './PostItem.vue';

export default {
  components: {PostItem},
  data() {
    return {
      options: ['id', 'title', 'body']
    }
  },
  methods: {
    deletePost(id) {
      this.$emit('deletePost', id)
    },
    changeSort(option) {
      this.$emit('changeSort', option)
      this.$store.commit('changeSort', option)
    }
  },
  // props: ["posts"]
  props: {
    posts: {
      type: Array,
      required:true
    },
    sort: {
      type: String,
      required:false
    }
  }
}
</script>

<style scoped>
.postList {
  display: flex;
  flex-direction: column;
  gap: 10px;
}


.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.3s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  height: 0;
  padding-top: 0; 
  padding-bottom: 0; 
  /* transform: translateY(30px); */
}
.post-list-move {
  transition: transform 0.1s ease;
}
</style>
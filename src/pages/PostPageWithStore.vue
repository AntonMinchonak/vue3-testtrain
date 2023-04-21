
<template>
  <div class="postsPage" @scroll="scrolled">
    <PostForm /> 
    <my-input placeholder="search" v-model="$store.state.postModule.search"></my-input>
    <PostList  :posts="$store.getters.searchedPosts" />
    <h4 v-if="$store.state.postModule.isDeleted">Post was succesfully deleted</h4>
    <h4 v-if="!$store.getters.searchedPosts.length">List is empty</h4>
    <!-- <div ref='scrollBorder' class="scroll-border"></div> -->
    <div v-intersection class="scroll-border"></div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'

let timer;

export default {
  components: {
    PostForm, PostList
  },
  data() {
    return {
      // posts: [
      //     {id:1, title: "jopa", body: 'asasf asf asf af asfsafd'},
      //     {id:2, title: "opqweqwea", body: 'asas fasf asfasf asf asf d'},
      //     {id:3, title: "e2pa", body: 'afas asf asf asfasf asfsd'},
      //   ] ,
      //   isDeleted:false,
      //   sort: 'id',
      //   search: '',
      //   page: 0,
      //   limit: 10,
      //   isLoading: false
    }
  },
  methods: {
    // createPost(newPost) {
    //   this.posts = [...this.posts, newPost]
    //   this.titleInput = ''
    //   this.bodyInput = ''
    // },
    // deletePost(id) {
    //   this.isDeleted = true 
    //   clearTimeout(timer)
    //   this.posts = this.posts.filter(e=>e.id!==id)
    //   timer = setTimeout(()=>this.isDeleted = false , 2000)
    // },
    // changeSort(option) {
    //   this.sort = option
    // },
    // async fetchPosts() {
    //   try {
    //     this.isLoading = true
    //     this.page+=1
    //     await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`)
    //       .then(response => {
    //         return response.json()})
    //       .then(json => {

    //         const mem = new Set()
    //         const newList = [...this.posts]
    //         newList.forEach(e=>mem.add(e.id))
    //         json.forEach(e=>mem.has(e.id)?'':newList.push(e))
    //         this.posts = newList

    //         // this.posts=[...this.posts, ...json]
    //         })
    //     } catch (err) {
    //         console.log(err);
    //     }
    //     this.isLoading = false
    // },
  },

  computed: {
    // sortedPosts() {
    //   return [...this.posts].sort((a,b)=> {
    //     // if (b[this.sort]<a[this.sort]) return -1
    //     return typeof(a[this.sort])==='number' ? b[this.sort]-a[this.sort] : a[this.sort].localeCompare(b[this.sort])
    //   })
    // },
    // searchedPosts() {
    //   return this.sortedPosts.filter(e=> e.title.includes(this.search) || e.body.includes(this.search))
    // },
  },

  async mounted() {
    console.log(this.$store.state.postModule.posts);
    this.$store.dispatch('fetchPosts')
    //  console.log(this.$store.getters.doubleLikes)
    //  this.$store.commit('addLikes')
    //  console.log(this.$store.state.likes);
    // this.fetchPosts()

    
    // const options = {
    //   rootMargin: '0px',
    //   threshold: 1.0
    // }

    // const callback = async (entries, observer) => {

    //   if (entries[0].isIntersecting && !this.isLoading) {
    //     let scrolled = window.scrollY
    //     this.page++
    //     await this.fetchPosts()
    //     window.scrollTo(0, scrolled)

    //   }
      
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.scrollBorder)
  },


}


</script>

<style scoped>

.postsPage {
  display: flex;
  flex-direction: column;
  gap: 60px;
  color: rgb(30, 54, 30);
}

.scroll-border {
  margin-top: 100px;
  /* margin-bottom: 100px; */
}

</style>
import { ref, onMounted } from "vue"

export default function usePosts(limit) {
  const posts = ref([])
  const isLoading = ref(false)
  const page = ref(0)

  async function fetching() {
    try {
        isLoading.value = true
        page.value+=1
        await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
          .then(response => {
            return response.json()})
          .then(json => {

            const mem = new Set()
            const newList = [...posts.value]
            newList.forEach(e=>mem.add(e.id))
            json.forEach(e=>mem.has(e.id)?'':newList.push(e))
            posts.value = newList

            // this.posts=[...this.posts, ...json]
            })
        } catch (err) {
            console.log(err);
        }
        isLoading.value = false
  }
        
  onMounted(fetching)
    
  return {
    posts, isLoading, page
  }
}
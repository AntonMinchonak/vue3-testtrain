import { ref, computed } from "vue";

export default function useSortedPosts(posts) {
  const sort = ref('id')
  console.log(sort.value);
  const sortedPosts = computed(() => {
     return [...posts.value].sort((a, b) => {
       // if (b[this.sort]<a[this.sort]) return -1
       return typeof a[sort.value] === "number" ? b[sort.value] - a[sort.value] : a[sort.value].localeCompare(b[sort.value]);
     });
  })

  return {
    sort, sortedPosts
  }
}
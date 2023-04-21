import { ref, computed } from "vue";

export default function useSearchedPosts(sortedPosts) {
  const search = ref("");
  const searchedPosts = computed(() => {
    return sortedPosts.value.filter(e => e.title.includes(search.value) || e.body.includes(search.value));
  });

  return {
    search,
    searchedPosts,
  };
}


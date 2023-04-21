import store from "@/store";

export default {
  mounted(el, binding) {
    // console.log(el, binding.value.fetchPosts);

console.log(store.state.postModule.isLoading);
    let { isLoading, fetchPosts } = { ...binding.value };
    
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = async (entries, observer) => {

    if (entries[0].isIntersecting && !store.state.postModule.isLoading) {
      let scrolled = window.scrollY

      await store.dispatch('fetchPosts')
      window.scrollTo(0, scrolled)

    }

    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
};
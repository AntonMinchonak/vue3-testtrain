export const postModule = {
  actions: {
    async fetchPosts(cx) {
      try {
        cx.state.isLoading = true;
        cx.state.page += 1;
        console.log(cx.state.page);
        await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${cx.state.limit}&_page=${cx.state.page}`)
          .then(response => {
            return response.json();
          })
          .then(json => {
            const mem = new Set();
            const newList = [...cx.state.posts];
            newList.forEach(e => mem.add(e.id));
            json.forEach(e => (mem.has(e.id) ? "" : newList.push(e)));
            cx.commit("handleFetchPosts", newList);
            console.log(newList);
          });
      } catch (err) {
        console.log(err);
      }
      cx.state.isLoading = false;
    },
  },
  state: {
    posts: [
      { id: 1, title: "jopa", body: "asasf asf asf af asfsafd" },
      { id: 2, title: "opqweqwea", body: "asas fasf asfasf asf asf d" },
      { id: 3, title: "e2pa", body: "afas asf asf asfasf asfsd" },
    ],
    isDeleted: false,
    sort: "id",
    search: "",
    page: 0,
    limit: 10,
    isLoading: false,
  },
  mutations: {
    createPost(state,newPost) {
      state.posts = [...state.posts, newPost];
      state.titleInput = "";
      state.bodyInput = "";
    },
    deletePost(state,id) {
      state.isDeleted = true;
      // clearTimeout(timer);
      state.posts = state.posts.filter(e => e.id !== id);
    
    },
    changeSort(state,option) {
      state.sort = option;
    },
    handleFetchPosts(state,newList) {
      state.posts = newList;
    },
    
  },
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((a, b) => {
        // if (b[this.sort]<a[this.sort]) return -1
        return typeof a[state.sort] === "number" ? b[state.sort] - a[state.sort] : a[state.sort].localeCompare(b[state.sort]);
      });
    },
    searchedPosts(state, getters) {
      console.log(getters);
      return getters.sortedPosts.filter(e => e.title.includes(state.search) || e.body.includes(state.search));
    },
  },
};
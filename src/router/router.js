import Main from '@/pages/Main'
import PostPage from "@/pages/PostPage";
import SinglePost from "@/pages/SinglePost";
import PostPageWithStore from "@/pages/PostPageWithStore";
import CompositionPostPage from "@/pages/CompositionPostPage";
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/posts/:id",
    component: SinglePost,
  },
  {
    path: "/store",
    component: PostPageWithStore,
  },
  {
    path: "/composition",
    component: CompositionPostPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
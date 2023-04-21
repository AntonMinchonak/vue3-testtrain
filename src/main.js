import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'
import components from '@/UI'
import router from '@/router/router';
import VInersection from './directives/VInersection';
import store from './store';

// createApp(App).use(store).use(router).mount('#app')

const app = createApp(App)
  
components.forEach(e=>app.component(e.name,e));

app.directive('intersection', VInersection)

app.use(router).use(store).mount('#app')

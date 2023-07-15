import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import components from '../src/components/UI';
import store from './vuex/store';

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component)
})

app
  .use(router)
  .use(store)
  .mount('#app');

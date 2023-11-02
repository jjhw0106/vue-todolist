import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/store'


const app = createApp(App);
// use보다 mount를 먼저하면 error 발생
// store를 연결해준 다음에 mount를 해주어야 한다.
app.use(store)
   .mount('#app');

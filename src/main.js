import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css' // import แบบ npm
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // import แบบ npm

const app = createApp(App)

app.use(router)

app.mount('#app')

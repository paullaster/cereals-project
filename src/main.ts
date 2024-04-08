import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './routes/routes';
import pinia from './plugins/pinia';
import Vue3Toastify from 'vue3-toastify';


const app = createApp(App);
app.use(Vue3Toastify, {
    autoClose: 3000,
    maxToasts: 5,
    newestOnTop: true,
    closeOnClick: false,
    rtl: true,
    draggable: true,
    pauseOnHover: true,
    draggablePercent: 50,
    transition: 'Vue3Toastify__fade',
    transitionMode: 'out-in',
    position: 'top-right',
    opacity: 1,
});


app.use(pinia);

const options: any = {
    router
};

app.use(() => ({}), options);

app.use(vuetify).use(router).mount('#app');
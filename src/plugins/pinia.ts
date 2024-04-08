import { createPinia } from "pinia";
import { markRaw } from "vue";
import { toast } from "vue3-toastify";
import router from "../routes/routes";

const pinia = createPinia();
pinia.use(({store}) => {
    store.router = markRaw(router);
    store.toast = markRaw(toast);
});

export default pinia;
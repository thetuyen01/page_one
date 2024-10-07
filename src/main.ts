import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";

import en from "./locales/en.json";
import vi from "./locales/vi.json";

const i18n = createI18n({
  locale: "en", // Ngôn ngữ mặc định
  messages: {
    en,
    vi,
  },
});

const app = createApp(App);

app.use(ElementPlus);
app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount("#app");

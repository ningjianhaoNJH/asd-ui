import { App, Plugin } from "vue";
import TForm from "./src/form.vue";

const ButtonInstall: Plugin = {
  install(app: App) {
    app.component("t-form", TForm);
  },
};

export default ButtonInstall;
export { TForm };

import * as components from "./stories";
import "./plugins/vuetify";
import "@mdi/font/css/materialdesignicons.css";
const plugin = {
  install(app) {
    if (this.installed) return;
    this.installed = true;
    // eslint-disable-next-line
    Object.entries(components).forEach(([componentName, component]) => {
      if (component.isShim === undefined) {
        app.component(component.name, component);
      }
    });
  }
};

export default plugin;
export * from "./stories";

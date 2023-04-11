/*
 * @Author: ningjianhaoNJH 375332835@qq.com
 * @Date: 2023-03-31 13:54:22
 * @LastEditors: ningjianhaoNJH 375332835@qq.com
 * @LastEditTime: 2023-04-11 14:14:59
 * @FilePath: \asd-ui\docs\docs\.vitepress\theme\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import DefaultTheme from "vitepress/theme";
import PgKit from "asd-ui";
import "asd-ui/styles/button.scss";
// 插件的组件，主要是demo组件
import "./styles/index.css";
import "vitepress-theme-demoblock/dist/theme/styles/index.css";
import Demo from "vitepress-theme-demoblock/dist/client/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// import "uno.css";
console.log(PgKit);
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(PgKit);
    app.use(ElementPlus);
    app.component("Demo", Demo);
    app.component("DemoBlock", DemoBlock);
  },
};

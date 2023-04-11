/*
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2023-02-02 22:43:20
 * @LastEditors: ningjianhaoNJH 375332835@qq.com
 * @LastEditTime: 2023-04-11 14:13:43
 * @FilePath: \asd-ui\packages\ui\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { PgButton } from "@asd-ui/components/button";
import { PgTag } from "@asd-ui/components/tag";
import { TForm } from "@asd-ui/components/form";
import Components from "./components";
import { App } from "vue";
import "uno.css";
import "./styles/index.scss";
const Installer = {
  install(app: App) {
    Components.forEach((c) => {
      app.use(c);
    });
  },
};

export default Installer;
export { PgButton, PgTag, TForm };

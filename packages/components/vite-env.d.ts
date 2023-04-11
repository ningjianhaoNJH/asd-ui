/*
 * @Author: ningjianhaoNJH 375332835@qq.com
 * @Date: 2023-03-31 13:54:22
 * @LastEditors: ningjianhaoNJH 375332835@qq.com
 * @LastEditTime: 2023-04-11 11:06:16
 * @FilePath: \asd-ui\packages\components\vite-env.d.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

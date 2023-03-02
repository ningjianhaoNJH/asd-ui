/*
 * @Author: 宁建浩 375332835@qq.com
 * @Date: 2023-03-02 10:11:54
 * @LastEditors: 宁建浩 375332835@qq.com
 * @LastEditTime: 2023-03-02 10:41:26
 * @FilePath: \asd-ui\examples\typings\vue-shim.d.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
}

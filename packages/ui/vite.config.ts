/*
 * @Author: ningjianhaoNJH 375332835@qq.com
 * @Date: 2023-03-31 13:54:22
 * @LastEditors: ningjianhaoNJH 375332835@qq.com
 * @LastEditTime: 2023-04-11 11:33:21
 * @FilePath: \asd-ui\packages\ui\vite.config.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";
import { safelist } from "./config/uno";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import DefineOptions from "unplugin-vue-define-options/vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./index.ts",
      name: "ui",
      fileName: (format) => `ui.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖，防止多个vue产生冲突
      external: ["vue"],
    },
    cssCodeSplit: true,
  },
  plugins: [
    vue(),
    dts(),
    DefineOptions(),
    Unocss({
      safelist,
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});

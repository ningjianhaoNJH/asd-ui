/*
 * @Author: 宁建浩 375332835@qq.com
 * @Date: 2023-03-02 10:49:55
 * @LastEditors: 宁建浩 375332835@qq.com
 * @LastEditTime: 2023-03-02 10:58:47
 * @FilePath: \asd-ui\packages\components\vite.config.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
export default defineConfig({
  build: {
    target: 'modules',
    //打包文件目录
    outDir: 'es',
    //压缩
    minify: false,
    //css分离
    //cssCodeSplit: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue'],
      input: ['src/index.ts'],
      output: [
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: 'es',
          preserveModulesRoot: 'src',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: 'lib',
          preserveModulesRoot: 'src',
        },
      ],
    },
    lib: {
      entry: './index.ts',
      formats: ['es', 'cjs'],
    },
  },
  plugins: [
    vue(),
    dts({
      //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: '../../tsconfig.json',
    }),
    dts({
      outputDir: 'lib',
      tsConfigFilePath: '../../tsconfig.json',
    }),
  ],
});

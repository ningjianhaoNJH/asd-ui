/*
 * @Author: 宁建浩 375332835@qq.com
 * @Date: 2023-03-02 10:30:47
 * @LastEditors: 宁建浩 375332835@qq.com
 * @LastEditTime: 2023-03-02 10:31:11
 * @FilePath: \asd-ui\packages\components\src\button\types.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { ExtractPropTypes } from 'vue';

export const ButtonType = [
  'default',
  'primary',
  'success',
  'warning',
  'danger',
];

export const ButtonSize = ['large', 'normal', 'small', 'mini'];

export const buttonProps = {
  type: {
    type: String,
    values: ButtonType,
  },
  size: {
    type: String,
    values: ButtonSize,
  },
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

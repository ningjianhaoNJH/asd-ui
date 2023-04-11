import { VueElement } from "vue";

export type CommonFormType =
  | "input"
  | "password"
  | "select"
  | "custom"
  | "number"
  | "select-group"
  | "tree-select"
  | "multiple-field-select"
  | "color"
  | "date"
  | "date-range"
  | "sales-date-range"
  | "sales-num-range"
  | "switch"
  | "slider"
  | "button"
  | "upload"
  | "textarea"
  | "radio-group"
  | "checkbox-group"
  | "custom-form"
  | "uploadFile"
  | "gather-time"
  | "select-product";

export enum AcceptType {
  ALL = 0,
  IMG,
  DOC,
  EXCEL,
}
export interface FormRule {
  required: boolean;
  message: string;
  trigger: string | string[];
}
export interface Params {
  [propsName: string]: unknown;
}
export interface Option {
  label: string;
  value: any;
  [prop: string]: any;
}

export type FieldName = string | string[];
export type Fun<T = unknown, Ret = void> = (...args: T[]) => Ret;
export interface TFormItem extends Params {
  type: CommonFormType;
  label?: string;
  fieldName?: FieldName;
  rules?: FormRule[];
  options?: Option[];
  extraConfig?: Params;
  notRender?: boolean;
  placeholder?: string;
  render?: VueElement | string | Element;
  dataType?: Fun<unknown, void>;
  initialValue?: string;
  vModel?: string | number | boolean | unknown[];
  className?: string;
}

import type { JSX } from 'react';

export type FontWeightType =
    | 'DEFAULT'
    | 'THIN'
    | 'EXTRA_LIGHT'
    | 'LIGHT'
    | 'REGULAR'
    | 'MEDIUM'
    | 'SEMI_BOLD'
    | 'BOLD'
    | 'EXTRA_BOLD'
    | 'BLACK';

export interface Payload {
  disable?: boolean;
}

export interface Description {
  content: string;
  weight?: FontWeightType;
  href?: string;
  postImage?: string;
  postHref?: string;
  descriptions?: Description[];
}

export interface Left {
  title: string;
  subTitle?: JSX.Element;
}

export interface Right {
  title?: string;
  subTitle?: string;
  descriptions?: Description[];
}

export interface RowElement {
  left: Left;
  right: Right;
}

export interface FooterType {
  disable: boolean;
  github: string;
  version: string;
}

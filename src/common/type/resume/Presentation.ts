import type { Description, Payload } from '@/common/type/Common';

export interface PresentationType extends Payload {
  list: PresentationItem[];
}

export interface PresentationItem {
  key: number;
  title: string;
  subTitle: string;
  at: string;
  descriptions: Description[];
}

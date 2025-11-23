import type { Description, Payload } from '@/common/type/Common';

export interface OpenSourceType extends Payload {
  list: OpenSourceItem[];
}

export interface OpenSourceItem {
  key: number;
  title: string;
  descriptions: Description[];
}

import type { Payload } from '@/common/type/Common';

export interface EducationType extends Payload {
  list: EducationItem[];
}

export interface EducationItem {
  key: number;
  title: string;
  subTitle: string;
  startedAt: string;
  endedAt?: string;
}

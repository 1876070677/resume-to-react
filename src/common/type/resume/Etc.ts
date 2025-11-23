import type { Payload } from '@/common/type/Common';

export interface EtcType extends Payload {
  list: EtcItem[];
}

export interface EtcItem {
  key: number;
  title: string;
  subTitle: string;
  startedAt: string;
  endedAt?: string;
}

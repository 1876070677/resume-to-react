import type { Payload } from '@/common/type/Common';

export interface IntroduceType extends Payload {
  contents: string[];
  sign: string;
  latestUpdated: string;
}

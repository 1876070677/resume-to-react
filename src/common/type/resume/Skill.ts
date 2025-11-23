import type { Payload } from '@/common/type/Common';

export interface SkillType extends Payload {
  skills: Skill[];
  tooltip?: string;
}

export interface Skill {
  category: string;
  items: Item[];
}

export interface Item {
  key: number;
  title: string;
  level?: 1 | 2 | 3 | 4;
}

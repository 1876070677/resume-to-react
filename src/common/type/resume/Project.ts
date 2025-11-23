import type { Description, Payload } from '@/common/type/Common';

export interface ProjectType extends Payload {
  /** ### 프로젝트 리스트 */
  list: ProjectItem[];
}

export interface ProjectItem {
  key: number;
  title: string;
  where: string;
  startedAt: string;
  endedAt?: string;
  descriptions: Description[];
}

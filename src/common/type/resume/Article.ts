import type { Description, Payload } from '@/common/type/Common';

export interface ArticleType extends Payload {
  list: Description[];
}

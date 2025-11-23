import type { ArticleType } from '@/common/type/resume/Article';
import { CommonDescription } from '@/entities/resume/common/CommonDescription';
import { EmptyRowCol } from '@/entities/resume/common/EmptyRowCol';

export function ArticleRow({ payload }: { payload: ArticleType }) {
  return (
    <EmptyRowCol>
      <CommonDescription descriptions={payload.list} />
    </EmptyRowCol>
  );
}

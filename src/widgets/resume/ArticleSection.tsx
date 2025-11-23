import type { ArticleType } from '@/common/type/resume/Article';
import { ArticleRow } from '@/entities/resume/article/ArticleRow';
import { CommonSection } from '@/entities/resume/common/CommnSection';

export function ArticleSection({ payload }: { payload: ArticleType }) {
  return (
    !payload.disable && (
      <CommonSection title="ARTICLE">
        <ArticleRow payload={payload} />
      </CommonSection>
    )
  );
}

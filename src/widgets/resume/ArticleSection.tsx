import type { ArticleType } from '@/common/type/resume/Article';
import { ArticleRow } from '@/entities/resume/article/ArticleRow';
import { CommonSection } from '@/entities/resume/common/CommonSection';

interface PropsForArticle {
  id?: string;
  payload: ArticleType;
}

export function ArticleSection({ id, payload }: PropsForArticle) {
  return (
    !payload.disable && (
      <div id={id}>
        <CommonSection title="ARTICLE">
          <ArticleRow payload={payload} />
        </CommonSection>
      </div>
    )
  );
}

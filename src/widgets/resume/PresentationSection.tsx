import type { PresentationType } from '@/common/type/resume/Presentation';
import { CommonSection } from '@/entities/resume/common/CommonSection';
import PresentationRow from '@/entities/resume/presentation/PresentationRow';

interface PropsForPresentation {
  id?: string;
  payload: PresentationType;
}

export function PresentationSection({ id, payload }: PropsForPresentation) {
  return (
    !payload.disable && (
      <div id={id}>
        <CommonSection title="PRESENTATION">
          <PresentationRow payload={payload} />
        </CommonSection>
      </div>
    )
  );
}

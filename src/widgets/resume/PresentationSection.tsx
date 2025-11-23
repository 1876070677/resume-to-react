import type { PresentationType } from '@/common/type/resume/Presentation';
import { CommonSection } from '@/entities/resume/common/CommnSection';
import PresentationRow from '@/entities/resume/presentation/PresentationRow';

export function PresentationSection({ payload }: { payload: PresentationType }) {
  return (
    !payload.disable && (
      <CommonSection title="PRESENTATION">
        <PresentationRow payload={payload} />
      </CommonSection>
    )
  );
}

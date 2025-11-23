import type { EducationType } from '@/common/type/resume/Education';
import { CommonSection } from '@/entities/resume/common/CommnSection';
import { EducationRow } from '@/entities/resume/education/EducationRow';

export function EducationSection({ payload }: { payload: EducationType }) {
  return (
    !payload.disable && (
      <CommonSection title="EDUCATION">
        <EducationRow payload={payload} />
      </CommonSection>
    )
  );
}

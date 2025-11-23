import type { EtcType } from '@/common/type/resume/Etc';
import { CommonSection } from '@/entities/resume/common/CommnSection';
import { EducationRow } from '@/entities/resume/education/EducationRow';

export function EtcSection({ payload }: { payload: EtcType }) {
  return (
    !payload.disable && (
      <CommonSection title="ETC">
        <EducationRow payload={payload} />
      </CommonSection>
    )
  );
}

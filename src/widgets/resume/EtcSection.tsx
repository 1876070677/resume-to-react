import type { EtcType } from '@/common/type/resume/Etc';
import { CommonSection } from '@/entities/resume/common/CommonSection';
import { EducationRow } from '@/entities/resume/education/EducationRow';

interface PropsForEtc {
  id?: string;
  payload: EtcType;
}

export function EtcSection({ id, payload }: PropsForEtc) {
  return (
    !payload.disable && (
      <div id={id}>
        <CommonSection title="ETC">
          <EducationRow payload={payload} />
        </CommonSection>
      </div>
    )
  );
}

import type { OpenSourceType } from '@/common/type/resume/OpenSource';
import { CommonSection } from '@/entities/resume/common/CommnSection';
import OpenSourceRow from '@/entities/resume/opensource/OpenSourceRow';

export function OpenSourceSection({ payload }: { payload: OpenSourceType }) {
  return (
    !payload.disable && (
      <CommonSection title="OPEN SOURCE">
        <OpenSourceRow payload={payload} />
      </CommonSection>
    )
  );
}

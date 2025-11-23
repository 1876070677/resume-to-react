import dayjs from 'dayjs';
import type { RowElement } from '@/common/type/Common';
import type { EducationItem, EducationType } from '@/common/type/resume/Education';
import { CommonRows } from '@/entities/resume/common/CommonRow';
import { EmptyRowCol } from '@/entities/resume/common/EmptyRowCol';

function serialize(item: EducationItem): RowElement {
  const [startedAt] = [item.startedAt].map((at) => dayjs(at).format('YYYY.MM'));

  const endedAt = item.endedAt === undefined ? ' ' : [item.endedAt].map((at) => dayjs(at).format('YYYY.MM'));

  return {
    left: { title: `${startedAt} ~ ${endedAt}` },
    right: {
      ...item,
    },
  };
}

export function EducationRow({ payload }: { payload: EducationType }) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => <CommonRows key={item.key} payload={serialize(item)} index={index} />)}
    </EmptyRowCol>
  );
}

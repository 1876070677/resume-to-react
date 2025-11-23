import dayjs from 'dayjs';

import type { RowElement } from '@/common/type/Common';
import type { PresentationItem, PresentationType } from '@/common/type/resume/Presentation';
import { CommonRows } from '@/entities/resume/common/CommonRow';
import { EmptyRowCol } from '@/entities/resume/common/EmptyRowCol';

function serialize(item: PresentationItem): RowElement {
  return {
    left: {
      title: dayjs(item.at).format('YYYY.MM'),
    },
    right: {
      ...item,
    },
  };
}

export default function PresentationRow({ payload }: { payload: PresentationType }) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => <CommonRows key={item.key} payload={serialize(item)} index={index} />)}
    </EmptyRowCol>
  );
}

import type { PropsWithChildren } from 'react';

import Col from '@/entities/resume/common/Col';
import Row from '@/entities/resume/common/Row';

export function EmptyRowCol<T = {}>({ children }: PropsWithChildren<T>) {
  return (
    <Row>
      <Col>{children}</Col>
    </Row>
  );
}

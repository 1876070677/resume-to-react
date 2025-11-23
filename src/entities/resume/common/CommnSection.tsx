import type { PropsWithChildren } from 'react';

import Col from '@/entities/resume/common/Col';
import { EmptyRowCol } from '@/entities/resume/common/EmptyRowCol';
import Row from '@/entities/resume/common/Row';

export function CommonSection({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <div className="mt-[3rem] mb-3">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2 className="text-blue">
              <span>{title}</span>
            </h2>
          </Col>
        </Row>
        {children}
      </EmptyRowCol>
    </div>
  );
}

import type { FooterType } from '@/common/type/Common';
import Col from '@/entities/resume/common/Col';
import { EmptyRowCol } from '@/entities/resume/common/EmptyRowCol';
import { HrefTargetBlank } from '@/entities/resume/common/HrefTargetBlank';
import Row from '@/entities/resume/common/Row';

export function Footer({ payload }: { payload: FooterType }) {
  return (
    <Row>
      <Col className="bg-[#f5f5f5] px-0 mt-[50px] h-[80px]">
        <div className="text-center mt-4">
          <EmptyRowCol>
            <small>
              {payload.disable ? (
                'End of file'
              ) : (
                <>
                  v.
                  {`${payload.version} / `}
                  <HrefTargetBlank url="https://github.com/1876070677" text="Github" />
                  {' / '}
                  Original Template by
                  {' '}
                  <HrefTargetBlank url="https://github.com/uyu423/resume-nextjs" text="resume-nextjs" />
                </>
              )}
            </small>
          </EmptyRowCol>
        </div>
      </Col>
    </Row>
  );
}

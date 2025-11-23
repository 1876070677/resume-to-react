import type { RowElement } from '@/common/type/Common';
import Col from '@/entities/resume/common/Col';
import { CommonDescription } from '@/entities/resume/common/CoomonDescription';
import Row from '@/entities/resume/common/Row';

export function CommonRows({ index, payload }: { payload: RowElement; index: number }) {
  const { left, right } = payload;

  const isNeedDescriptionPadding = !!(right.title || right.subTitle);

  return (
    <div>
      {index > 0 ? <hr className="border border-black/10 mt-[1.5rem] mb-[1rem]" /> : ''}
      <Row className="grid-cols-12">
        <Col className="col-span-12 md:col-span-3 md:text-right">
          <Row>
            <Col className="md:col-span-12">
              <h4 className="text-gray">{left.title}</h4>
            </Col>
            {left.subTitle ? <Col className="md:col-span-12">{left.subTitle}</Col> : ''}
          </Row>
        </Col>
        <Col className="col-span-12 md:col-span-9">
          {right.title ? <h4>{right.title}</h4> : ''}
          {right.subTitle ? <i className="text-gray">{right.subTitle}</i> : ''}
          {right.descriptions ? (
            <CommonDescription
              descriptions={right.descriptions}
              option={{ padding: isNeedDescriptionPadding }}
            />
          ) : (
            ''
          )}
        </Col>
      </Row>
    </div>
  );
}

import type { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { ContactType } from '@/common/type/resume/Profile';
import { HrefTargetBlank } from '@/entities/resume/common/HrefTargetBlank';
import Row from '@/entities/resume/common/Row';
import Col from '@/entities/resume/common/Col';
import Badge from '@/entities/resume/common/Badge';

export default function Contact({ payload }: PropsWithChildren<{ payload: ContactType }>) {
  const createLink = () => {
    if (payload.badge) {
      return <Badge className="bg-graylight text-notice">{payload.title || payload.link}</Badge>;
    }
    if (payload.link) {
      return (
        <HrefTargetBlank url={payload.link} text={payload.title} />
      );
    }
    return (
      <span>{payload.title}</span>
    );
  };
  return (
    <Row className="pb-2 grid-cols-12">
      <Col className="text-left col-span-1">
        <FontAwesomeIcon icon={payload.icon} />
      </Col>
      <Col className="col-span-11 text-left">{createLink()}</Col>
    </Row>
  );
}

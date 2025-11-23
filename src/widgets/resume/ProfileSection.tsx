import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { ProfileSectionProps } from '@/common/type/resume/Profile';
import Contact from '@/entities/resume/profile/Contact';
import ProfileImage from '@/entities/resume/profile/ProfileImage';
import { EmptyRowCol } from '@/entities/resume/common/EmptyRowCol';
import Row from '@/entities/resume/common/Row';
import Col from '@/entities/resume/common/Col';
import Notice from '@/entities/resume/common/Notice';

export function ProfileSection({ payload }: { payload: ProfileSectionProps }) {
  const { image, contacts, name, notice } = payload;

  return (
    !payload.disable && (
      <div className="mt-[3rem]">
        <Row className="grid-cols-12 gap-1">
          <Col className="col-span-12 md:col-span-3 mx-auto">
            <ProfileImage src={image} />
          </Col>
          <Col className="col-span-12 md:col-span-9">
            <Row>
              <Col>
                <h1 className="text-blue text-center md:text-left">
                  {name.title} 
                  {' '}
                  <small>{name.small || ''}</small>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col className="pt-3">
                {contacts.map((contact) => (
                  <Contact key={contact.key} payload={contact} />
                ))}
              </Col>
            </Row>
            <EmptyRowCol>
              <Notice className="mt-3 text-left border-none">
                {notice.icon ? <FontAwesomeIcon className="mr-2" icon={notice.icon} /> : ''}
                {notice.title}
              </Notice>
            </EmptyRowCol>
          </Col>
        </Row>
      </div>
    )
  );
}

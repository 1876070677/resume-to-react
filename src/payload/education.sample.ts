import type { EducationType } from '@/common/type/resume/Education';

const education: EducationType = {
  disable: false,

  list: [
    {
      key: 1,
      title: 'University of Open Source',
      subTitle: 'PhD in System Engineering (Honorary)',
      startedAt: '1991-03',
      // endedAt: '2010-02',
    },
    {
      key: 2,
      title: 'Antarctica High School',
      subTitle: 'Graduated',
      startedAt: '1989-03',
      endedAt: '1991-02',
    },
  ],
};

export default education;

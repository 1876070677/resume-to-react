import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

import image from '@/assets/sample_tux.png';
import type { ProfileSectionProps } from '@/common/type/resume/Profile';

export const profile: ProfileSectionProps = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: 'Tux Linux Penguin',
    small: '(Tux)',
  },
  contacts: [
    {
      key: 1,
      title: 'tux@linux.org',
      link: 'mailto:tux@linux.org',
      icon: faEnvelope,
    },
    {
      key: 2,
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      key: 3,
      link: 'https://github.com/uyu423/resume-nextjs',
      icon: faGithub,
    },
    {
      key: 4,
      link: 'https://www.facebook.com/groups/ubuntu.ko',
      icon: faFacebook,
    },
  ],
  notice: {
    title:
      "The content below is all fictitious and is just a sample from 'https://github.com/uyu423/resume-nextjs'.",
    icon: faBell,
  },
};

export default profile;

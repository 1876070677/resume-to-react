import type { ProjectType } from '@/common/type/resume/Project';

const project: ProjectType = {
  disable: false,
  list: [
    {
      key: 1,
      title: 'Linux Kernel Optimization Project',
      startedAt: '2020-06',
      where: 'Linux Foundation',
      descriptions: [
        {
          content:
            'Initiated and lead a collaborative project aimed at optimizing the Linux Kernel for various hardware architectures.',
        },
        {
          content:
            'Achieved significant improvements in system performance and resource management.',
          weight: 'MEDIUM',
          descriptions: [
            { content: '30% improvement in system resource efficiency' },
            { content: 'Job Scheduler Refactor and Optimization' },
          ],
        },
      ],
    },
    {
      key: 2,
      title: 'Global Linux Bootcamp',
      startedAt: '2017-05',
      endedAt: '2019-12',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
  ],
};

export default project;

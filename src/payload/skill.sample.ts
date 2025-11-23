import type { Skill, SkillType } from '@/common/type/resume/Skill';

const programmingLanguages: Skill = {
  category: 'Programming Languages',
  items: [
    {
      key: 1,
      title: 'C',
      level: 3,
    },
    {
      key: 2,
      title: 'Shell Scripting',
      level: 3,
    },
    {
      key: 3,
      title: 'Python',
      level: 3,
    },
    {
      key: 4,
      title: 'Perl',
      level: 2,
    },
    {
      key: 5,
      title: 'Golang',
      level: 2,
    },
    {
      key: 6,
      title: 'Rust',
      level: 1,
    },
  ],
};

const kernelDevelopment: Skill = {
  category: 'Kernel Development',
  items: [
    {
      key: 1,
      title: 'Kernel Programming',
      level: 3,
    },
    {
      key: 2,
      title: 'GNU Debugger',
      level: 3,
    },
    {
      key: 3,
      title: 'Memory Management',
      level: 2,
    },
    {
      key: 4,
      title: 'System Call Interface',
      level: 2,
    },
  ],
};

const virtualization: Skill = {
  category: 'Virtualization',
  items: [
    {
      key: 1,
      title: 'Docker',
      level: 3,
    },
    {
      key: 2,
      title: 'KVM',
      level: 3,
    },
    {
      key: 3,
      title: 'Xen',
      level: 2,
    },
    {
      key: 4,
      title: 'VirtualBox',
      level: 2,
    },
    {
      key: 5,
      title: 'VMware ESXi',
      level: 1,
    },
  ],
};

const automation: Skill = {
  category: 'Automation',
  items: [
    {
      key: 1,
      title: 'Ansible',
      level: 3,
    },
    {
      key: 2,
      title: 'Puppet',
      level: 3,
    },
    {
      key: 3,
      title: 'Chef',
      level: 2,
    },
    {
      key: 4,
      title: 'Jenkins',
      level: 2,
    },
    {
      key: 5,
      title: 'CI/CD Pipelines',
      level: 1,
    },
    {
      key: 6,
      title: 'Infrastructure as Code',
      level: 1,
    },
  ],
};

const networkSecurity: Skill = {
  category: 'Network Security',
  items: [
    {
      key: 1,
      title: 'iptables',
      level: 3,
    },
    {
      key: 2,
      title: 'OpenSSH',
      level: 3,
    },
    {
      key: 3,
      title: 'OpenSSL',
      level: 2,
    },
    {
      key: 4,
      title: 'NACLs',
      level: 2,
    },
    {
      key: 5,
      title: 'VPN Technologies',
      level: 2,
    },
    {
      key: 6,
      title: 'Intrusion Detection',
      level: 1,
    },
  ],
};

const misc: Skill = {
  category: 'Misc',
  items: [
    {
      key: 1,
      title: 'Coffee Brewing',
    },
    {
      key: 2,
      title: "Rubik's Cube Solving",
    },
    {
      key: 3,
      title: 'Table Tennis',
    },
    {
      key: 4,
      title: 'Guitar Playing',
    },
    {
      key: 5,
      title: 'Joke Telling',
    },
    {
      key: 6,
      title: 'Duct Tape Crafting',
    },
  ],
};

const skill: SkillType = {
  disable: false,
  skills: [programmingLanguages, kernelDevelopment, automation, virtualization, networkSecurity, misc],
  tooltip:
    '1: 기초 개념 이해\n2: 간단한 프로젝트 구현 가능\n3: 원하는 기능/서비스를 독자적으로 구현 가능\n4: 실제 서비스 수준의 개발 및 배포 가능',
};

export default skill;

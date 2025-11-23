import type { Item } from '@/common/type/resume/Skill';
import Badge from '@/entities/resume/common/Badge';
import { cn } from '@/features/Util';

export function SkillBadge({ level }: { level: Item['level'] }) {
  if (!level) {
    return '';
  }

  const color = (() => {
    switch (level) {
      case 4: {
        return 'bg-[#8045ef]';
      }
      case 3: {
        return 'bg-[#007bff]';
      }
      case 2: {
        return 'bg-[#6c757d]';
      }
      case 1:
      default: {
        return 'bg-[#f8f9fa]';
      }
    }
  })();

  return (
    <span>
      <Badge className={cn(color, 'text-white px-[7.2px] rounded-xl')}>
        {level}
      </Badge>
      {' '}
    </span>
  );
}

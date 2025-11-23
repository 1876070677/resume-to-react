import Badge from '@/entities/resume/common/Badge';

export function SkillKeywords({ skillKeywords }: { skillKeywords?: string[] }) {
  if (!skillKeywords) {
    return null;
  }
  return (
    <li className="list-disc">
      <strong>Skill Keywords</strong>
      <div>
        {skillKeywords.map((keyword, index) => (
          /* eslint-disable react/no-array-index-key */
          <Badge key={index.toString()} className="mr-1 bg-graydeep text-white rounded-md">
            {keyword}
          </Badge>
        ))}
      </div>
    </li>
  );
}

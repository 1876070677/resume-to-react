import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/entities/resume/common/Tooltip';

export function SkillTooltip({ content }: { content?: string }) {
  if (!content) {
    return '';
  }

  return (
    content && (
      <small>
        {' '}
        <Tooltip>
          <TooltipTrigger>
            <FontAwesomeIcon icon={faQuestionCircle} id="skill-tooltip" />
          </TooltipTrigger>
          <TooltipContent
            side="right"
            className="font-pretendard bg-black text-white whitespace-pre-wrap shadow-lg"
          >
            {content}
          </TooltipContent>
        </Tooltip>
      </small>
    )
  );
}

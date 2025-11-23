/* eslint-disable react/no-array-index-key */
import type { Description, FontWeightType } from '@/common/type/Common';
import { HrefTargetBlank } from '@/entities/resume/common/HrefTargetBlank';
import { cn } from '@/features/Util';

const fontWeightTailwind: Record<FontWeightType, string> = {
  DEFAULT: 'font-light', // 300
  THIN: 'font-thin', // 100
  EXTRA_LIGHT: 'font-extralight', // 200
  LIGHT: 'font-light', // 300
  REGULAR: 'font-normal', // 400
  MEDIUM: 'font-medium', // 500
  SEMI_BOLD: 'font-semibold', // 600
  BOLD: 'font-bold', // 700
  EXTRA_BOLD: 'font-extrabold', // 800
  BLACK: 'font-black', // 900
};

function getFontWeightClass(weight?: Description['weight']): string {
  if (!weight) {
    const defaultWeight = fontWeightTailwind.LIGHT; 
    return defaultWeight;
  }
  return fontWeightTailwind[weight] || fontWeightTailwind.DEFAULT;
}

function DescriptionRow({ description }: { description: Description }) {
  const { content, href, postImage, postHref, weight } = description;
  const weightClass = getFontWeightClass(weight);

  const component = (() => {
    if (href && postImage) {
      return (
        <li className={cn(weightClass)}>
          <HrefTargetBlank url={href} text={content} /> 
          {' '}
          <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (href) {
      return (
        <li className={cn(weightClass)}>
          <HrefTargetBlank url={href} text={content} />
        </li>
      );
    }
    if (postHref && postImage) {
      return (
        <li className={cn(weightClass)}>
          {content} 
          {' '}
          <HrefTargetBlank url={postHref} text={postHref} />
          {' '}
          <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (postHref) {
      return (
        <li className={cn(weightClass)}>
          {content} 
          {' '}
          <HrefTargetBlank url={postHref} text={postHref} />
        </li>
      );
    }
    if (postImage) {
      return (
        <li className={cn(weightClass)}>
          {content} 
          {' '}
          <img src={postImage} alt={postImage} />
        </li>
      );
    }
    return (
      <>
        <meta name="format-detection" content="telephone=no" />
        <li className={cn(weightClass)}>{content}</li>
      </>
    );
  })();

  return component;
}

function DescriptionRecursion({ descriptions }: { descriptions: Description[] }) {
  return (
    <ul className="list-disc pl-[40px]" style={{ listStyleType: 'circle' }}>
      {descriptions.map((description, index) => (
        <div key={index.toString()}>
          <DescriptionRow description={description} />
          {description.descriptions ? (
            <DescriptionRecursion
              descriptions={description.descriptions}
            />
          ) : (
            ''
          )}
        </div>
      ))}
    </ul>
  );
}

export function CommonDescription({ descriptions, option }: { descriptions: Description[]; option?: { padding?: boolean } }) {
  return (
    descriptions ? (
      <ul className={cn('list-disc pl-[40px]', option?.padding ? 'pt-2' : '')}>
        {descriptions.map((description, descIndex) => (
          <div key={descIndex.toString()}>
            <DescriptionRow description={description} />
            {description.descriptions ? (
              <DescriptionRecursion
                descriptions={description.descriptions}
              />
            ) : (
              ''
            )}
          </div>
        ))}
      </ul>
    ) : (
      ''
    )
  );
}

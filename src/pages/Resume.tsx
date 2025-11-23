import { useRef, useState } from 'react';

import profile from '@/payload/profile.sample';
import introduce from '@/payload/introduce.sample';
import skill from '@/payload/skill.sample';
import experience from '@/payload/experience.sample';
import project from '@/payload/project.sample';
import openSource from '@/payload/openSource.sample';
import presentation from '@/payload/presentation.sample';
import article from '@/payload/article.sample';
import education from '@/payload/education.sample';
import etc from '@/payload/etc.sample';
import footer from '@/payload/footer.sample';
import Container from '@/entities/resume/common/Container';
import { SkillSection } from '@/widgets/resume/SkillSection';
import { ProfileSection } from '@/widgets/resume/ProfileSection';
import { IntroduceSection } from '@/widgets/resume/IntroduceSection';
import { ExperienceSection } from '@/widgets/resume/ExperienceSection';
import { ProjcecSection } from '@/widgets/resume/ProjectSection';
import { OpenSourceSection } from '@/widgets/resume/OpenSourceSection';
import { ArticleSection } from '@/widgets/resume/ArticleSection';
import { EducationSection } from '@/widgets/resume/EducationSection';
import { EtcSection } from '@/widgets/resume/EtcSection';
import { Footer } from '@/widgets/resume/Footer';
import { PresentationSection } from '@/widgets/resume/PresentationSection';
import { cn } from '@/features/Util';
import { createMultiPagePDFPerSection, handleCapture } from '@/features/ConvertToPdf';
import ResumePdf from '@/pages/ResumePdf';
import useResumeStore from '@/zustand/ResumeStore';

export function Resume() {
  // state.
  const setCapture = useResumeStore((state) => state.setCapture);
  const clearCapture = useResumeStore((state) => state.clearCapture);
  const [opened, setOpened] = useState(false);

  // ref.
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickConvert = async () => {
    if (!containerRef?.current) return;
    const { imageDataURL } = await handleCapture(containerRef.current);
    
    if (imageDataURL) {
      setCapture(imageDataURL);
      setOpened(true);
    }
  };

  const handleClickDownload = async () => {
    if (!containerRef?.current) return;
    await createMultiPagePDFPerSection(containerRef.current);
  };

  return (
    <>
      <div>
        <button
          type="button" 
          className={cn(
            'absolute top-2 right-2 text-white bg-bluelight font-pretendard px-3 py-1 rounded-md hover:scale-110 transition-all duration-400',
            'ease-in-out',
          )}
          onClick={() => handleClickConvert()}
        >
          PDF로 변환
        </button>
        <button 
          className={cn(
            'absolute top-15 right-2 text-white bg-gray font-pretendard px-3 py-1 rounded-md hover:scale-110 transition-all duration-400',
            'ease-in-out',
          )}
          type="button"
          onClick={() => { 
            clearCapture();
            setOpened(false);
          }}
        >
          미리보기 제거
        </button>
        {opened && (
          <button 
            className={cn(
              'absolute top-[87px] right-2 text-white bg-greendeep font-pretendard px-3 py-1 rounded-md hover:scale-110 transition-all duration-400',
              'ease-in-out',
            )}
            type="button"
            onClick={() => { 
              handleClickDownload();
            }}
          >
            PDF 다운로드
          </button>
        )}
      </div>
      <div className={cn('absolute top-0 h-full w-[50%]', opened ? 'left-0' : 'left-[-9999px]')}>
        <ResumePdf />
      </div>
      <Container ref={containerRef} className="font-pretendard font-light break-words break-keep leading-relaxed leading-18">
        <ProfileSection payload={profile} />
        <IntroduceSection payload={introduce} />
        <SkillSection payload={skill} />
        <ExperienceSection payload={experience} />
        <ProjcecSection payload={project} />
        <OpenSourceSection payload={openSource} />
        <PresentationSection payload={presentation} />
        <ArticleSection payload={article} />
        <EducationSection payload={education} />
        <EtcSection payload={etc} />
        <Footer payload={footer} />
      </Container>
    </>
  );
}

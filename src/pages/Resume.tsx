import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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

export function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = async () => {
    const element = resumeRef.current;
    if (!element) return; 

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL('image/png');
    
    // eslint-disable-next-line new-cap
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    const ratio = imgWidth / imgHeight;
    const finalHeight = pdfWidth / ratio;

    let heightLeft = finalHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, finalHeight);
    heightLeft -= pdfHeight;
    while (heightLeft >= 0) {
      position = heightLeft - finalHeight;

      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, finalHeight);
    
      heightLeft -= pdfHeight;
    }
    pdf.save('report.pdf');
  };

  return (
    <>
      <div>
        <button
          type="button" 
          onClick={handleDownloadPdf}
          className={cn(
            'absolute top-2 right-2 text-white bg-bluelight font-pretendard px-3 py-1 rounded-md hover:scale-110 transition-all duration-400',
            'ease-in-out',
          )}
        >
          PDF 다운로드
        </button>
      </div>
      <Container ref={resumeRef} className="font-pretendard font-light break-words break-keep leading-relaxed leading-18">
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
